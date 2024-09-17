'use client';

import React, { useEffect, useRef } from 'react';
import { Terminal, Zap } from 'lucide-react';

const RetroPortfolio = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const stars = [];
    const colors = ['#FFD700', '#ADFF2F', '#FF4500', '#1E90FF', '#00BFFF'];

    const createStar = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2, // Increased size range
        speed: Math.random() * 1 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    const populateStars = () => {
      stars.length = 0; // Clear existing stars
      for (let i = 0; i < 150; i++) {
        stars.push(createStar());
      }
    };

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = star.color;
        ctx.fillRect(star.x, star.y, star.size, star.size);

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0 - star.size; // Reset to top once it moves off screen
        }
      });

      requestAnimationFrame(animateStars);
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      populateStars(); // Re-populate stars to cover the new canvas size
    };

    // Set canvas to full screen
    setCanvasSize();

    animateStars();

    // Adjust canvas size on resize
    window.addEventListener('resize', setCanvasSize);

    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Retro 8-bit space background */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
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

        {/* Contact button */}
        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full animate-pulse">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetroPortfolio;