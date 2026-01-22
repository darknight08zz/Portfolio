
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function WriteBlogContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const editSlug = searchParams.get('slug'); // Check if we are editing

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: ''
    });
    const [pin, setPin] = useState('');
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // Simple hardcoded PIN
    const ADMIN_PIN = '1234';

    useEffect(() => {
        // If PIN is already entered (simulated session or just re-entry), potentially skip?
        // For now, we always ask for PIN on refresh for security in this simple app.
        if (isAuthenticated && editSlug) {
            fetchPostData(editSlug);
        }
    }, [isAuthenticated, editSlug]);

    const fetchPostData = async (slug: string) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/posts/${slug}`);
            if (res.ok) {
                const data = await res.json();
                setFormData({
                    title: data.title,
                    slug: data.slug,
                    excerpt: data.excerpt,
                    content: data.content
                });
                setIsEditing(true);
            } else {
                alert('Failed to load post for editing');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === ADMIN_PIN) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect PIN');
        }
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        // Only auto-generate slug if NOT editing (to avoid breaking links unexpectedly)
        if (!isEditing) {
            setFormData(prev => ({
                ...prev,
                title,
                slug: generateSlug(title)
            }));
        } else {
            setFormData(prev => ({ ...prev, title }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = isEditing ? `/api/posts/${formData.slug}` : '/api/posts';
            const method = isEditing ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error(`Failed to ${isEditing ? 'update' : 'create'} post`);
            }

            alert(`Post ${isEditing ? 'updated' : 'created'} successfully!`);
            router.push('/admin'); // Go back to dashboard
        } catch (error) {
            console.error(error);
            alert(`Error ${isEditing ? 'updating' : 'creating'} post`);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                <form onSubmit={handleAuth} className="p-8 border rounded-lg shadow-lg bg-card max-w-sm w-full">
                    <h2 className="text-xl font-bold mb-4 text-center">Admin Access</h2>
                    <input
                        type="password"
                        placeholder="Enter PIN"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="w-full p-2 border rounded mb-4 bg-background"
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                        Enter
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-20 px-4 max-w-3xl">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">{isEditing ? 'Edit Post' : 'Write New Post'}</h1>
                <button
                    type="button"
                    onClick={() => router.push('/admin')}
                    className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                >
                    Cancel
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={handleTitleChange}
                        className="w-full p-2 border rounded bg-background"
                        placeholder="Post Title"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Slug</label>
                    <input
                        type="text"
                        required
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        className={`w-full p-2 border rounded bg-background font-mono text-sm ${isEditing ? 'bg-muted/50 cursor-not-allowed' : ''}`}
                        placeholder="post-url-slug"
                        disabled={isEditing} // Prevent changing slug on edit to simple keep URLs stable, or could allow
                        title={isEditing ? "Slug cannot be changed directly to preserve URL" : ""}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Excerpt</label>
                    <textarea
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        className="w-full p-2 border rounded bg-background h-20"
                        placeholder="Short summary..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Content (Markdown)</label>
                    <textarea
                        required
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="w-full p-2 border rounded bg-background h-96 font-mono text-sm"
                        placeholder="# Write your post here..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full text-white p-3 rounded font-bold disabled:opacity-50 ${isEditing ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}
                >
                    {loading ? 'Saving...' : (isEditing ? 'Update Post' : 'Publish Post')}
                </button>
            </form>
        </div>
    );
}

export default function WriteBlogPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <WriteBlogContent />
        </Suspense>
    );
}
