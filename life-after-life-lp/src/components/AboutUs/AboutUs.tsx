// src/components/About.tsx

import React from "react";
import { motion } from "framer-motion";
import { threeDlogo } from "../../assets/images";

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
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            animate={{ y: [0, -15, 0] }}
            className="relative h-[400px] md:h-[500px] order-1 md:order-2"
          >
            <img
              src={threeDlogo}
              alt="About Us Illustration"
              className="w-full h-full object-contain rounded-3xl"
            />
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

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              המשימה שלנו
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              לעזור למשפחות לשמור על הזיכרונות של אהוביהם חיים ונגישים, ליצור
              מרחב דיגיטלי חם ומכבד שבו אהבה, סיפורים וזיכרונות ימשיכו לחיות
              לדורות הבאים.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition shadow-lg"
            >
              הצטרפו אלינו היום
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
