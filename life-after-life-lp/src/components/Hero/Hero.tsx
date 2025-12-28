// src/components/Hero.tsx

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen px-4 pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Right Content */}
        <div className="space-y-6 md:space-y-8 text-center md:text-right order-2 md:order-1">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
              משאירים אותם קרוב
              <span className="flex items-center justify-center md:justify-start gap-3 mt-2">
                אל הלב
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-rose-600"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0"
          >
            Life After Life מאפשרת לכם ליצור זיכרונות דיגיטליים מרגשים של
            יקיריכם שנפטרו, לשמור אותם קרובים ללבכם לנצח.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-gray-800 transition text-sm md:text-base">
              הצטרפו עכשיו
            </button>
          </motion.div>
        </div>

        {/* Left Illustration - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="relative h-[500px] md:h-[700px] w-full order-1 md:order-2 hidden md:block"
        >
          {/* Background gradient blob - large pink/purple */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="absolute top-[10%] left-[15%] w-[400px] h-[500px] bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-[40%] blur-3xl"
          ></motion.div>

          {/* Floating Polaroid Photo 1 - Top Left (Yellow) */}
          <motion.div
            initial={{ opacity: 0, y: -30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            whileHover={{ rotate: -4, scale: 1.05, y: -5 }}
            className="absolute top-[10%] left-[8%] w-36 bg-white rounded-xl shadow-2xl p-3 z-20 cursor-pointer"
          >
            <div className="w-full h-36 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg mb-3 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.6">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
          </motion.div>

          {/* Floating Polaroid Photo 2 - Top Right (Blue/Purple gradient) */}
          <motion.div
            initial={{ opacity: 0, y: -30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            whileHover={{ rotate: 4, scale: 1.05, y: -5 }}
            className="absolute top-[5%] right-[12%] w-40 bg-white rounded-xl shadow-2xl p-3 z-20 cursor-pointer"
          >
            <div className="w-full h-40 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-lg mb-3 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="white" opacity="0.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
          </motion.div>

          {/* Diary/Book - Right Center (Purple) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 5 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            whileHover={{ rotate: 2, scale: 1.05 }}
            className="absolute top-[40%] right-[5%] z-20 cursor-pointer"
          >
            <div className="w-32 h-40 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl shadow-2xl relative">
              <div className="absolute inset-3 bg-white/20 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 space-y-2">
                <div className="h-1 bg-white/50 rounded"></div>
                <div className="h-1 bg-white/50 rounded w-4/5"></div>
                <div className="h-1 bg-white/50 rounded w-3/5"></div>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-indigo-600 to-purple-700 rounded-l-xl"></div>
            </div>
          </motion.div>

          {/* Central Memory Circle - Main Focus (moved down and centered better) */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="relative w-72 h-72"
            >
              {/* Outer glow ring - animated pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 blur-xl"
              ></motion.div>

              {/* Middle ring - teal/blue gradient */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-teal-200 to-blue-300 opacity-40"></div>

              {/* White ring */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-10 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-pointer"
              >
                {/* Inner pink circle with heart */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-xl">
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </motion.svg>
                </div>
              </motion.div>

              {/* Orbiting sparkle - gold */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-2 right-10 w-5 h-5"
              >
                <svg viewBox="0 0 24 24" fill="#fbbf24">
                  <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z"/>
                </svg>
              </motion.div>

              {/* Orbiting sparkle - blue */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-6 left-8 w-4 h-4"
              >
                <svg viewBox="0 0 24 24" fill="#60a5fa">
                  <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>

           {/* Note/Card Element with lines - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="absolute bottom-24 right-8 md:right-16 bg-white rounded-xl shadow-2xl p-4 md:p-5 w-28 md:w-32 z-15 cursor-pointer"
          >
            <div className="space-y-2">
              <div className="h-2 bg-gray-300 rounded w-full"></div>
              <div className="h-2 bg-gray-300 rounded w-4/5"></div>
              <div className="h-2 bg-gray-300 rounded w-3/5"></div>
            </div>
          </motion.div>

          {/* Floating Polaroid Photo 3 - Bottom Left (Green/Teal with clock) */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
            className="absolute bottom-[12%] left-[10%] w-36 bg-white rounded-xl shadow-2xl p-3 z-20 cursor-pointer"
          >
            <div className="w-full h-36 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-lg mb-3 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white" opacity="0.6">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
          </motion.div>

          {/* Memory Timeline - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            className="absolute top-[38%] left-[2%] z-10"
          >
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.7 }}
                className="w-4 h-4 rounded-full bg-rose-400 shadow-lg"
              ></motion.div>
              <div className="w-0.5 h-16 bg-gradient-to-b from-rose-400 to-purple-400 mx-auto"></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                className="w-4 h-4 rounded-full bg-purple-400 shadow-lg"
              ></motion.div>
              <div className="w-0.5 h-16 bg-gradient-to-b from-purple-400 to-blue-400 mx-auto"></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.9 }}
                className="w-4 h-4 rounded-full bg-blue-400 shadow-lg"
              ></motion.div>
            </div>
          </motion.div>

          {/* Candle flame - Top Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
            className="absolute top-[8%] left-[45%] z-15"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-7 h-10 bg-gradient-to-t from-orange-400 via-yellow-300 to-yellow-100 rounded-full blur-sm opacity-90"
              ></motion.div>
              <div className="absolute inset-0 bg-yellow-200 rounded-full blur-lg opacity-60"></div>
            </div>
          </motion.div>

          {/* Floating hearts */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[25%] left-[25%]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(236, 72, 153, 0.5)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-[30%] right-[20%]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(147, 51, 234, 0.5)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </motion.div>

          {/* Decorative curved lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" viewBox="0 0 500 700">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 2, ease: "easeInOut" }}
              d="M 120 150 Q 200 200 180 300"
              stroke="url(#grad1)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6,6"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 2.2, ease: "easeInOut" }}
              d="M 380 250 Q 320 350 340 450"
              stroke="url(#grad2)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6,6"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899"/>
                <stop offset="100%" stopColor="#a855f7"/>
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6"/>
                <stop offset="100%" stopColor="#3b82f6"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;