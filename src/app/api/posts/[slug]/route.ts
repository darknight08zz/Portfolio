
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Post from '@/models/Post';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await connectToDatabase();
        const { slug } = await params;

        const post = await Post.findOne({ slug });

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await connectToDatabase();
        const { slug } = await params;
        const deletedPost = await Post.findOneAndDelete({ slug });

        if (!deletedPost) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Post deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const body = await request.json();
        await connectToDatabase();
        const { slug } = await params;

        // Basic validation
        if (!body.title || !body.content || !body.slug) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const updatedPost = await Post.findOneAndUpdate(
            { slug },
            { ...body },
            { new: true } // Return the updated document
        );

        if (!updatedPost) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json(updatedPost);
    } catch (error) {
        console.error('Update Post Error:', error);
        return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
}
