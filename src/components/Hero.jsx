import React from "react";
import Head from "next/head";
import { Instagram, Facebook, Twitter, ChevronRight } from "lucide-react";

/**
 * FITNESS LANDING PAGE
 * Features: Responsive layout, Dark theme, Tailwind gradients, and Lucide icons.
 */

export default function FitnessLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500">
      <Head>
        <title>Fitness | Discover Your Limit</title>
      </Head>

      {/* Background Glow Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]" />
      </div>

      <main className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-12 min-h-[calc(100vh-80px)]">
        {/* Social Sidebar (Fixed-style on large screens) */}
        <div className="hidden lg:flex flex-col gap-6 absolute left-12 top-1/2 -translate-y-1/2">
          <Instagram
            size={20}
            className="hover:text-red-500 cursor-pointer transition-colors"
          />
          <Facebook
            size={20}
            className="hover:text-red-500 cursor-pointer transition-colors"
          />
          <Twitter
            size={20}
            className="hover:text-red-500 cursor-pointer transition-colors"
          />
        </div>

        {/* Hero Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {/* Circular Glow behind the athlete */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-red-600/30 rounded-full blur-[80px] -z-10" />

          {/* Athlete Image Placeholder */}
          <img
            src="https://clipground.com/images/gym-png-images-3.png"
            alt="Fitness Athlete"
            className="w-full max-w-md lg:max-w-xl object-contain drop-shadow-[0_0_50px_rgba(220,38,38,0.3)]"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left z-10">
          <h1 className="text-6xl md:text-8xl font-black leading-tight uppercase italic tracking-tighter">
            Dominate <br />
            <span className="text-white">Yourself</span>
          </h1>

          <p className="mt-4 text-red-500 uppercase tracking-[0.3em] font-bold text-sm">
            Select Your Real Path
          </p>

          <p className="mt-8 text-gray-400 max-w-lg  lg:mx-0 leading-relaxed text-sm md:text-base">
            Regular physical activity can improve your muscle strength and boost
            your endurance. Exercise delivers oxygen and nutrients to your
            tissues and helps your cardiovascular system work more efficiently.
            And when your heart and lung health improve, you have more energy to
            tackle daily chores.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
            <a href="#cta">
              <button className="px-10 py-3 border-2 border-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
                Join Now
              </button>
            </a>

            <button className="group flex items-center gap-2 uppercase tracking-widest font-bold text-sm hover:text-red-500 transition-colors">
              More
              <span className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-red-500">
                <ChevronRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </main>

      {/* Decorative Footer Detail */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-red-600 to-transparent opacity-50" />
    </div>
  );
}
