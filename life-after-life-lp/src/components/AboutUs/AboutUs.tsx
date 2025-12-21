// src/components/About.tsx

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      title: "זיכרונות לנצח",
      description:
        "שמרו על זיכרונות יקרים של יקיריכם במקום אחד מאובטח ונגיש לכל המשפחה.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
      title: "תמונות וסיפורים",
      description:
        "העלו תמונות, סרטונים וסיפורים שמספרים את הסיפור הייחודי של אהוביכם.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "שיתוף משפחתי",
      description:
        "הזמינו בני משפחה וחברים לשתף זיכרונות ולהנציח את אהבתכם המשותפת.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: "ציון תאריכים חשובים",
      description:
        "קבלו תזכורות לימי הזיכרון, ימי הולדת ואירועים משמעותיים אחרים.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200 to-teal-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Content with max-width */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            אודותינו
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Life After Life נוצרה מתוך אהבה עמוקה ורצון לשמור על זיכרונות היקרים
            של אלו שאהבנו. אנחנו מאמינים שכל חיים ראויים להיזכר ולהינצח.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 md:order-1"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              המסע שלנו
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                כשאיבדנו מישהו קרוב, הבנו כמה קשה לשמור על כל הזיכרונות, התמונות
                והסיפורים במקום אחד. רצינו מקום שבו כל המשפחה יכולה להתכנס,
                לזכור ולחלוק את האהבה שלהם.
              </p>
              <p>
                Life After Life היא יותר מאפליקציה - זה מקום מקלט דיגיטלי
                לזיכרונות, מרחב לאהבה שלא נגמרת, ודרך לוודא שהסיפורים של אהובינו
                ימשיכו לחיות דרך הדורות.
              </p>
              <p>
                אנחנו כאן כדי להקל עליכם בתקופה הקשה, ולספק לכם כלי שיעזור לשמור
                על הזיכרון חי ומשמעותי.
              </p>
            </div>
          </motion.div>

          {/* Image/Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-purple-100 to-blue-100 rounded-3xl">
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-2xl flex items-center justify-center"
                >
                  <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Floating mini cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-12 right-8 w-20 h-24 bg-white rounded-lg shadow-xl p-2"
              >
                <div className="w-full h-16 bg-gradient-to-br from-amber-200 to-orange-300 rounded"></div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-16 left-8 w-20 h-24 bg-white rounded-lg shadow-xl p-2"
              >
                <div className="w-full h-16 bg-gradient-to-br from-blue-200 to-purple-300 rounded"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 md:mb-16">
            מה אנחנו מציעים
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mission Statement - Full Width with more height */}
      <div dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full bg-gradient-to-r from-[#005bea] to-[#00c6fb] p-10 sm:p-12 md:px-16 md:py-24 lg:py-32 text-center overflow-hidden"
        >
          {/* Decorative Icon - Left (Teal Book/Bookmark) - Animated */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            whileInView={{ opacity: 0.2, x: 0, rotate: 12 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-0 bottom-0 transform -translate-x-1/4 translate-y-1/4 mix-blend-overlay pointer-events-none"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [12, 15, 12],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 text-teal-300"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 2h12v16H6V4zm4 3a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
                <path d="M16 4h2v16h-2V4z" opacity="0.6" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Decorative Icon - Right (Yellow Document) - Animated */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            whileInView={{ opacity: 0.25, x: 0, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-0 top-0 transform translate-x-1/4 -translate-y-1/4 mix-blend-overlay pointer-events-none"
          >
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [-12, -15, -12],
              }}
              transition={{
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
                rotate: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 text-yellow-300"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V1.5H5.625zM7.5 5.25a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm.75 3.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm.75 4.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm.75 4.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-10 sm:mb-12 md:mb-16 leading-tight drop-shadow-sm px-2"
            >
              לשמור על הזיכרונות של אהוביהם חיים ונגישים, ליצור מרחב דיגיטלי חם
              ומכבד שבו אהבה, סיפורים וזיכרונות ימשיכו לחיות לדורות הבאים.
            </motion.h3>

            {/* Combined Input and Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-xl mx-auto space-y-3 sm:space-y-0"
            >
              {/* Mobile: Stacked layout */}
              <div className="flex flex-col sm:hidden gap-3">
                <input
                  type="email"
                  placeholder="הכנס את האימייל שלך"
                  className="w-full bg-white px-6 py-4 text-gray-800 placeholder-gray-500 text-base rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-black text-white font-bold text-base px-8 py-4 rounded-full hover:bg-gray-900 transition-colors shadow-xl"
                >
                  הצטרפו עכשיו
                </motion.button>
              </div>

              {/* Desktop: Side by side layout */}
              <div className="hidden sm:flex items-center bg-white rounded-full p-1 pl-2 shadow-xl focus-within:ring-2 focus-within:ring-white/50 transition-all">
                <input
                  type="email"
                  placeholder="הכנס את האימייל שלך"
                  className="flex-1 bg-transparent px-4 py-4 text-gray-800 placeholder-gray-500 text-lg focus:outline-none rounded-r-full"
                />
                <motion.button
                  whileHover={{ backgroundColor: "#2674f1ff", color: "#ffffffff" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-black text-white font-bold text-lg px-8 py-3.5 rounded-full hover:bg-gray-900 transition-colors duration-[0.03s] shrink-0"
                >
                  הצטרפו עכשיו
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
