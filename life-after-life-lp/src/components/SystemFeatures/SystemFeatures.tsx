import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const systemFeatures = [
    {
      title: "מערכת מאובטחת ומוצפנת",
      description:
        "הפרטיות שלך היא הדבר החשוב לנו ביותר. המערכת פועלת בטכנולוגיות אבטחה מתקדמות, עם הצפנת מידע מקצה לקצה כך שרק אתה יכול לגשת למידע שלך – אף אחד אחר, כולל המערכת עצמה, לא יכול לקרוא אותו.",
    },
    {
      title: "מערכת אימות ותזמון השליחה",
      description:
        "המערכת כוללת מנגנון אימות חכם שבודק מדי תקופה אם המשתמש עדיין פעיל, באמצעות תזכורות והודעות מותאמות. במקביל, פועל מערכת תזמון מתקדמת שמבטיחה שהמידע או ההודעות יישלחו בדיוק בזמן הנכון – לפי תנאים שהוגדרו מראש.",
    },
    {
      title: "העלאת זכרונות חשובים",
      description:
        "המערכת מאפשרת לך להעלות בקלות סרטונים, תמונות ומכתבים אישיים – רגעים מרגשים, מחשבות עמוקות או מסרים שחשוב לך שישמרו לדורות הבאים. כל זיכרון נשמר בצורה מאובטחת ומוצפנת, ונשלח רק לאנשים שבחרת, בזמן הנכון ובדרך האישית ביותר.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="features">
      {/* Background decoration - Free flowing organic shapes */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full blur-3xl translate-x-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.25, 0.2] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tl from-purple-300 to-blue-300 rounded-full blur-3xl -translate-x-1/2"
      />

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-indigo-300/40 to-purple-400/40 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {systemFeatures.map((feature, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-32 last:mb-0 ${
              index % 2 === 0 ? "" : "md:grid-flow-dense"
            }`}
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`space-y-6 ${
                index % 2 === 0 ? "order-2 md:order-1" : "order-2"
              }`}
            >
              {/* Decorative line - free flowing */}
              <div className="relative">
                <svg
                  className="absolute -top-8 -right-4 w-20 h-20 text-rose-400 opacity-40"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <motion.path
                    d="M 10 50 Q 30 20 50 50 T 90 50"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                {feature.title}
              </h3>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature highlights */}
              <div className="space-y-4 pt-4">
                {index === 0 && (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">
                        הצפנה מקצה לקצה
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">
                        פרטיות מלאה ומוגנת
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">
                        גישה מאובטחת בלבד
                      </span>
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">
                        תזמון אוטומטי חכם
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">
                        מנגנון אימות מתקדם
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">
                        שליחה אוטומטית בזמן הנכון
                      </span>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">
                        תמיכה בסרטונים ותמונות
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">
                        מכתבים אישיים ומסרים
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">
                        שמירה לדורות הבאים
                      </span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Image/Mockup Side - Free flowing */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative h-[400px] md:h-[500px] ${
                index % 2 === 0 ? "order-1 md:order-2" : "order-1"
              }`}
            >
              {/* Free flowing background blobs */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-300/50 to-pink-400/50 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tl from-purple-300/50 to-blue-400/50 rounded-full blur-3xl"
              />

              {/* Mockup content based on feature type */}
              {index === 0 && (
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative">
                    {/* Lock/Security Icon - Free floating */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                      </svg>
                    </motion.div>

                    {/* Floating organic shapes */}
                    <motion.div
                      animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, 12, 0],
                        x: [0, -8, 0],
                        rotate: [0, 15, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-300/70 to-cyan-400/70 rounded-full shadow-lg"
                    />

                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, -20, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
                      className="absolute top-16 -left-8 w-14 h-14 bg-gradient-to-br from-purple-300/60 to-pink-400/60 rounded-full shadow-lg"
                    />
                  </div>
                </div>
              )}

              {index === 1 && (
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative">
                    {/* Clock/Scheduling Icon */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>

                    {/* Floating organic shapes */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl"
                    >
                      <span className="text-3xl">🔔</span>
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, 15, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="absolute top-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal-300/70 to-cyan-400/70 rounded-full shadow-lg"
                    />

                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                        rotate: [0, 25, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      className="absolute -top-4 left-4 w-16 h-16 bg-gradient-to-br from-rose-300/60 to-pink-400/60 rounded-full shadow-lg"
                    />
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative">
                    {/* Upload/Cloud Icon */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                      </svg>
                    </motion.div>

                    {/* Floating organic media shapes */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, 0],
                        y: [0, -8, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-rose-300 to-pink-400 rounded-2xl shadow-xl"
                    />

                    <motion.div
                      animate={{
                        rotate: [0, -10, 0],
                        y: [0, 10, 0],
                        scale: [1, 1.15, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-300 to-purple-400 rounded-2xl shadow-xl"
                    />

                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        x: [0, 8, 0],
                        rotate: [0, 20, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: 0.8,
                      }}
                      className="absolute top-12 -left-6 w-16 h-16 bg-gradient-to-br from-amber-300/70 to-orange-400/70 rounded-full shadow-lg"
                    />

                    <motion.div
                      animate={{
                        y: [0, 12, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
                      className="absolute bottom-16 -right-6 w-14 h-14 bg-gradient-to-br from-teal-300/60 to-cyan-400/60 rounded-full shadow-lg"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
