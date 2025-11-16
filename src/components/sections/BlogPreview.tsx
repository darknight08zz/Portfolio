import Link from 'next/link';

export function BlogPreview() {
  // Placeholder for future blog posts
  const posts = [
    { title: 'Building My First AI-Powered OMR Scanner', date: 'Coming Soon' },
    { title: 'Why I Switched from CSS to Tailwind', date: 'Coming Soon' },
    { title: 'Lessons from 200+ DSA Problems', date: 'Coming Soon' },
  ];

  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Tech Blog</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post, i) => (
          <div key={i} className="border rounded-lg p-6 hover:bg-muted/30 transition">
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{post.date}</p>
            <Link href="#" className="text-blue-600 text-sm mt-2 inline-block opacity-50 pointer-events-none">
              Read more →
            </Link>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground mt-8">
        Stay tuned for technical deep dives and project walkthroughs!
      </p>
    </section>
  );
}