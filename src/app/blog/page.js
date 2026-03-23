"use client";
import React from 'react';
import Link from 'next/link';

const posts = [
    {
        title: "गर्मियों में पशुओं का दूध कैसे बनाए रखें?",
        excerpt: "How to maintain milk yield during summers? Simple tips on water, shade, and nutrition.",
        date: "Feb 20, 2026",
        tag: "Health"
    },
    {
        title: "सही मिनरल मिक्सचर चुनने की विधि",
        excerpt: "How to choose the right mineral mixture? Don't just look at the price, look at the concentration.",
        date: "Feb 15, 2026",
        tag: "Nutrition"
    },
    {
        title: "Mastitis (थनैला) से बचाव के 5 उपाय",
        excerpt: "Preventing mastitis with simple udder health practices and hygiene.",
        date: "Feb 10, 2026",
        tag: "Safety"
    }
];

const BlogPage = () => {
    return (
        <div className="relative min-h-screen bg-bg-light pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-7xl font-black text-text-dark mb-6">
                        डेयरी ज्ञान <br />
                        <span className="text-primary">Dairy Education Blog</span>
                    </h1>
                    <p className="text-text-dark/70 text-xl font-medium max-w-2xl">
                        Practical, farmer-friendly advice on dairy nutrition and animal health. No jargon, just results.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-green-100 group hover:shadow-xl transition-all">
                            <div className="h-48 bg-bg-light flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                                📝
                            </div>
                            <div className="p-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-bg-light px-2 py-1 rounded mb-4 inline-block">
                                    {post.tag}
                                </span>
                                <h2 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-text-dark/60 mb-8 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-text-dark/40">{post.date}</span>
                                    <Link href="#" className="text-primary font-bold text-sm">Read More →</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
