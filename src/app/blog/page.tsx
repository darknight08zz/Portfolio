
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    fetchPosts();
  }, []);

  return (
    <section className="container py-20 min-h-screen">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold">Tech Blog</h2>
        <div className="flex gap-4">
          <Link href="/admin" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Admin Dashboard
          </Link>
          <Link href="/rss" className="text-muted text-sm hover:text-foreground hidden">
            RSS
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg">No posts yet.</p>
          <p className="mt-2 text-sm">Check back soon!</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group block border rounded-xl overflow-hidden hover:shadow-lg transition-all dark:bg-gray-800/50"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="text-xs text-muted-foreground mb-3">
                  {new Date(post.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="text-blue-600 text-sm font-medium mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}