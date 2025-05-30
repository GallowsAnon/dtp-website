"use client";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4 py-16">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Debauched Tea Party Blog</h1>
        <div className="mb-8 p-6 bg-gray-900 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2 text-white">Welcome to Our New IRC Server!</h2>
          <p className="mb-2 text-lg text-gray-200">We&apos;re excited to announce the launch of our brand new IRC server at <span className="font-mono">irc.debauchedtea.party</span> port <span className="font-mono">1337</span>! Join us to chat about tech, infosec, AI, and more. Web chat is coming soon, but for now, you&apos;ll need to use an IRC client to connect. We look forward to meeting you!</p>
          <Link href="/blog/new-irc-server" className="text-blue-400 hover:underline">Read more</Link>
        </div>
        {/* More blog posts can be added here */}
      </div>
    </main>
  );
} 