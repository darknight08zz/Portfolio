
'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

interface BlogPost {
    title: string;
    content: string;
    createdAt: string;
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchPost() {
            try {
                const resolvedParams = await params;
                const res = await fetch(`/api/posts/${resolvedParams.slug}`);
                if (!res.ok) throw new Error('Post not found');
                const data = await res.json();
                setPost(data);
            } catch (err) {
                setError('Failed to load post');
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, [params]);

    if (loading) {
        return (
            <div className="flex justify-center min-h-screen py-20">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="container py-20 text-center min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                <Link href="/blog" className="text-blue-600 hover:underline">
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <article className="container max-w-3xl py-20 min-h-screen">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block transition-colors">
                ← Back to Blog
            </Link>

            <header className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
                <time className="text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </time>
            </header>

            <div className="prose dark:prose-invert prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    );
}
