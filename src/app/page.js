'use client';

import React from 'react';
import { Terminal, Zap, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const RetroPortfolio = () => {
  return (
    <>
      {/* Neon header */}
      <h1 className="text-6xl font-bold text-center mb-8 animate-pulse">
        <span className="text-orange-500 glow-orange-500">Esteban Leandro Marin</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-center mb-12 animate-blink">
        Senior Fullstack Developer
      </p>

      {/* Terminal-style about section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-neon mb-8">
        <div className="flex items-center mb-4">
          <Terminal className="mr-2" />
          <span className="text-xl font-semibold">About Me</span>
        </div>
        <p className="mb-4">
          Creative and passionate full-stack developer with over 10 years of experience, specializing in building fast, accessible, and user-centric digital products.
        </p>
        <p>
          Excited about building cool stuff that makes a real impact, with a focus on usability and accessibility.
        </p>
      </div>

      {/* Skills section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg shadow-neon">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Zap className="mr-2" />
            Front-End Skills
          </h2>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-neon">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Zap className="mr-2" />
            Back-End Skills
          </h2>
          <ul className="list-disc list-inside">
            <li>C#</li>
            <li>.NET</li>
            <li>Prisma</li>
            <li>SQL and NoSQL databases</li>
          </ul>
        </div>
      </div>

      {/* Contact links */}
      <div className="text-center">
        <div className="flex justify-center space-x-4">
          <Link href="https://github.com/elemarin" passHref>
            <Github size={32} className="text-white animate-blink" target="_blank" rel="noopener noreferrer" />
          </Link>
          <Link href="https://www.linkedin.com/in/estebanleandro/" passHref>
            <Linkedin size={32} className="text-white animate-blink" target="_blank" rel="noopener noreferrer" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default RetroPortfolio;