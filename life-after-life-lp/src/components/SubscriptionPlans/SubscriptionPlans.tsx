import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "מנוי חינם",
      subtitle: "להתחלה מושלמת",
      price: "חינמי",
      period: "2 זכרונות",
      features: [
        { text: "2 זכרונות לשמירה", included: true },
        { text: "מערכת תזמון ואימות", included: true },
      ],
      note: "הזכרונות נשמרים לשנה ואז צריך לחדש מנוי*",
      highlighted: false,
    },
    {
      name: "מנוי יחיד",
      subtitle: "המומלץ ביותר",
      price: "199",
      period: "שנתי",
      currency: "ש״ח",
      features: [
        { text: "20 זכרונות לשמירה", included: true },
        { text: "יומן לשמירת זכרונות מהיום יום", included: true },
        { text: "מערכת תזמון ואימות", included: true },
        { text: "שמירת זכרונות לשנה", included: true },
      ],
      note: "הזכרונות נשמרים לשנה ואז צריך לחדש מנוי*",
      highlighted: true,
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="pricing" dir="rtl">
      {/* Background decoration - Free flowing organic shapes */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.2, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tl from-blue-300 to-teal-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      />
      
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 25, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-rose-300/30 to-pink-400/30 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            תוכניות המחירים שלנו
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            בחרו את התוכנית המתאימה לכם והתחילו לשמור את הזכרונות החשובים ביותר
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative"
            >
              <div
                className={`h-full rounded-3xl p-8 md:p-10 shadow-xl flex flex-col transition-all ${
                  plan.highlighted
                    ? "bg-white border-2 border-sky-400"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                {/* Plan Name */}
                <div className="mb-6 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
                    {plan.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    {plan.currency && (
                      <span className="text-xl md:text-2xl font-semibold text-gray-700">
                        {plan.currency}
                      </span>
                    )}
                    <span className="text-4xl md:text-5xl font-bold text-black">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-center mt-2 text-sm md:text-base text-gray-600">
                    / {plan.period}
                  </div>
                </div>

                {/* Features Header */}
                <div className="text-sm md:text-base font-semibold mb-4 text-center text-gray-700">
                  :החבילה כוללת
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          feature.included
                            ? "bg-gradient-to-br from-green-400 to-emerald-500"
                            : "bg-gray-300"
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill={feature.included ? "white" : "transparent"}
                        >
                          {feature.included ? (
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          ) : (
                            <path
                              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                              fill="#9CA3AF"
                            />
                          )}
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-700">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Note */}
                {plan.note && (
                  <p className="text-xs md:text-sm mb-6 text-center text-gray-500">
                    {plan.note}
                  </p>
                )}

                {/* Button - Fixed at bottom */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg mt-auto ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:from-purple-600 hover:to-indigo-600"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  בחר תוכנית
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-sm md:text-base text-gray-600">
            כל התוכניות כוללות אבטחה מלאה והצפנה מקצה לקצה
          </p>
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            * ניתן לבטל את המנוי בכל עת ללא עלויות נוספות
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;