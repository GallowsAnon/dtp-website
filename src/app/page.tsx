"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4 py-16">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Debauched Tea Party</h1>
        <p className="mb-4 text-lg">
          We&apos;re a community of tech enthusiasts, hackers, and curious minds who love to explore the intersection of technology, security, and creativity. Whether you&apos;re into cybersecurity, programming, AI, or just love learning about new tech, you&apos;ll find a welcoming space here.
        </p>
        <p className="mb-6 text-xl max-w-2xl text-center">
          Our IRC server is open to everyone—drop in to chat, ask questions, or just hang out. Enjoy our community-run radio station, where you can listen to music, tech talk, and live shows curated by our members. Explore our blog for the latest in technology, infosec, and AI, and check out our personal and collaborative projects.
        </p>
        <p className="mb-8 text-lg max-w-2xl text-center">
          At DTP, we believe in learning by doing and growing together. We encourage you to join us, contribute your ideas, submit projects, DJ on the radio, or simply share exciting tech news. Everyone is welcome, and every voice matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
          <a
            href="/webchat"
            className="btn-primary px-6 py-3 rounded font-semibold transition text-center"
          >
            Join the Chat
          </a>
          <Link
            href="/radio"
            className="btn-secondary px-6 py-3 rounded font-semibold transition text-center"
          >
            Listen to Radio
          </Link>
        </div>
        <div className="mb-4 text-center">
          <span className="font-bold">IRC Network:</span> <span className="font-mono">irc.debauchedtea.party</span> <span className="font-bold">port</span> <span className="font-mono">1337</span>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {/* X (Twitter) icon placeholder */}
          <a href="https://x.com/DebauchedTea" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#1A1A1A" />
              <path d="M22.7 9.3L16.9 15.1L11.1 9.3H9.3V9.7L15.1 15.5L9.3 21.3V22.7H11.1L16.9 16.9L22.7 22.7H24.5V22.3L18.7 16.5L24.5 10.7V9.3H22.7Z" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
