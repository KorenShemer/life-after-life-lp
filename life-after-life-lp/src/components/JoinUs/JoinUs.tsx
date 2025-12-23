import React, { useState } from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Email submitted:", email);
      // Add your submit logic here
    }
  };

  return (
    <div className="py-16 md:py-24 bg-transparent" dir="rtl">
      <div className="max-w-5xl mx-auto px-4">
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 rounded-3xl shadow-2xl">
          {/* Enhanced background decorations */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-300 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-blue-300 rounded-full blur-3xl"
          />

          {/* Floating cloud-like shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 left-1/4 w-20 h-20 md:w-28 md:h-28 bg-white/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-white/15 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 right-1/3 w-12 h-12 md:w-16 md:h-16 bg-cyan-200/30 rounded-full blur-lg"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute bottom-1/4 left-1/4 w-14 h-14 md:w-20 md:h-20 bg-white/25 rounded-full blur-xl"
          />

          <div className="relative z-10 py-12 md:py-16 px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              {/* Right Side - Clean Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[350px] md:h-[450px] order-2 md:order-1"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Soft glow behind phone */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute w-48 h-48 md:w-64 md:h-64 bg-cyan-400 rounded-full blur-3xl"
                  />

                  {/* Phone mockup */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative z-10 w-56 h-[380px] md:w-60 md:h-[400px] bg-white rounded-[2.5rem] shadow-2xl p-2.5 border-2 border-cyan-200"
                  >
                    {/* Phone screen */}
                    <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[2.2rem] p-5 flex flex-col gap-5">
                      {/* Lock icon */}
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                      </motion.div>

                      {/* Memory/Photo Album icon */}
                      <div className="flex-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl">
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        </svg>
                      </div>
                    </div>

                    {/* Floating elements around phone */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute -top-3 -right-3 w-10 h-10 border-2 border-pink-400 rounded-full"
                    />
                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                        x: [0, -5, 0],
                      }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                      className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-90"
                    />
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="absolute top-1/3 -left-6 w-3 h-3 bg-cyan-400 rounded-full opacity-80"
                    />
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                      className="absolute bottom-1/4 -right-5 w-2 h-2 bg-blue-400 rounded-full"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Left Side - Clean Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2 space-y-6"
              >
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  נסו בחינם עוד היום
                </h2>

                {/* Description */}
                <div className="space-y-3 text-white/90 text-sm md:text-base leading-relaxed drop-shadow-md">
                  <p>
                    יש דברים שלא חוזרים – מילים, מחשבות, סודרים ששווה לשמור.
                    המערכת שלנו מאפשרת לכם לתעד זיכרונות, רגשות ותרגנים אישיים
                    שיעניינו בזמן הנכון לאנשים שאתם בוחרים.
                  </p>
                  <p>
                    התחילו עכשיו, ללא התחייבות, ותראו כמה פשוט זה לשמור את מה
                    שבאמת חשוב.
                  </p>
                </div>

                {/* Email Input */}
                <div className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="הכנס את האימייל שלך"
                    className="w-full bg-white/90 backdrop-blur-sm border-2 border-white/50 px-5 py-3.5 text-gray-800 placeholder-gray-500 text-sm md:text-base rounded-xl focus:outline-none focus:border-white transition-all shadow-lg"
                  />

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-4 md:gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#10b981"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-white text-sm md:text-base font-semibold drop-shadow-lg">
                        ללא אפשרות תשלום
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#10b981"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-white text-sm md:text-base font-semibold drop-shadow-lg">
                        חינם לשנה
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-slate-900 to-blue-900 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl hover:from-slate-200 hover:to-blue-400 hover:text-black transition-all shadow-xl"
                  >
                    קבל 2 זכרונות בחינם
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JoinUs;
