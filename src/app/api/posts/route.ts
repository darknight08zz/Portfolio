
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Post from '@/models/Post';

export async function GET() {
    try {
        await connectToDatabase();
        const posts = await Post.find({}).sort({ createdAt: -1 });
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await connectToDatabase();

        // Simple verification (in a real app, use auth)
        // For now, we trust the client side "PIN" check or just the obscurity of the admin path

        const { title, content, excerpt, slug } = body;

        // Basic validation
        if (!title || !content || !slug) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const post = await Post.create({
            title,
            content,
            excerpt: excerpt || content.substring(0, 150) + '...',
            slug,
        });

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.error('Create Post Error:', error);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}
