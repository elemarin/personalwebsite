'use client';

import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React, { useEffect, useRef } from 'react';
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
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
        size: Math.random() * 4 + 2,
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
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
          
          {/* Top header navigation */}
          <nav className="relative z-20 container my-6 mx-auto px-4 py-4 flex justify-between items-right">
            <span className="text-orange-500 "></span>
            <ul className="flex space-x-4">
              <li>
                <Link href="/projects" className='text-xl text-green-400 glow-orange-500 hover:text-orange-300 hover:underline'>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Retro 8-bit space background */}
          <canvas ref={canvasRef} className="absolute inset-0" />

          {/* Content container */}
          <div className="relative z-10 container mx-auto px-4">
            {children}
          </div>
          
        </div>
        <Analytics/>
      </body>
    </html>
  );
}
