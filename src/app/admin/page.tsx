
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [pin, setPin] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const ADMIN_PIN = '151723114010843';

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === ADMIN_PIN) {
            setIsAuthenticated(true);
            fetchPosts();
        } else {
            alert('Incorrect PIN');
        }
    };

    async function fetchPosts() {
        try {
            const res = await fetch('/api/posts');
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error('Failed to fetch posts', error);
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = async (slug: string) => {
        if (!confirm('Are you sure you want to delete this post? This cannot be undone.')) return;

        try {
            const res = await fetch(`/api/posts/${slug}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setPosts(posts.filter(p => p.slug !== slug));
                alert('Post deleted successfully');
            } else {
                alert('Failed to delete post');
            }
        } catch (error) {
            console.error('Delete error', error);
            alert('Error deleting post');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                <form onSubmit={handleAuth} className="p-8 border rounded-lg shadow-lg bg-card max-w-sm w-full">
                    <h2 className="text-xl font-bold mb-4 text-center">Admin Dashboard</h2>
                    <input
                        type="password"
                        placeholder="Enter PIN"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="w-full p-2 border rounded mb-4 bg-background"
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                        Access Dashboard
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-20 px-4 max-w-4xl min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                        ← Back to Blog
                    </Link>
                    <h1 className="text-3xl font-bold">Manage Posts</h1>
                </div>
                <Link href="/admin/write" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-medium">
                    + Create New Post
                </Link>
            </div>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : posts.length === 0 ? (
                <p className="text-center text-muted-foreground">No posts found.</p>
            ) : (
                <div className="bg-card border rounded-lg overflow-hidden shadow">
                    <table className="w-full text-left">
                        <thead className="bg-muted/50">
                            <tr>
                                <th className="p-4">Title</th>
                                <th className="p-4 hidden sm:table-cell">Date</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {posts.map((post) => (
                                <tr key={post._id} className="hover:bg-muted/20">
                                    <td className="p-4 font-medium">
                                        <Link href={`/blog/${post.slug}`} className="hover:underline">
                                            {post.title}
                                        </Link>
                                    </td>
                                    <td className="p-4 hidden sm:table-cell text-muted-foreground text-sm">
                                        {new Date(post.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="p-4 text-right space-x-2">
                                        <Link
                                            href={`/admin/write?slug=${post.slug}`}
                                            className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium px-2 py-1"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post.slug)}
                                            className="text-red-600 hover:text-red-800 text-sm font-medium px-2 py-1"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
