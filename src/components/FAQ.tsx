
// src/components/FAQ.tsx
import { useState } from "react";
import { faqItems } from "../data/faq";
import { motion, AnimatePresence } from "framer-motion";

const FAQ: React.FC = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section className="mt-16 mb-12">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                >
                    שאלות ותשובות
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
                />
            </div>

            <div className="max-w-3xl mx-auto">
                <motion.div
                    className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background glow effect */}
                    <div className="absolute -inset-1 z-0  bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-50 blur-xl"></div>

                    <div className="relative isolate z-10 bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden">
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`border-b border-gray-100 last:border-b-0`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                onHoverStart={() => setHoveredItem(item.id)}
                                onHoverEnd={() => setHoveredItem(null)}
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    // className={`w-full px-6 py-5 text-right flex justify-between items-center focus:outline-none transition-colors duration-300 ${
                                    //     hoveredItem === item.id ? 'bg-blue-50/80' : ''
                                    // }`}
                                    className={`w-full px-6 py-5 text-right flex justify-between items-center focus:outline-none transition-colors duration-300
                                            ${openItem === item.id
                                            ? 'bg-slate-50'                /* פתוח – רקע אפרפר‑בהיר */
                                            : hoveredItem === item.id
                                                ? 'bg-blue-50/60'            /* Hover – רמז כחול עדין */
                                                : 'bg-white/90'}             /* סגור – לבן‑זכוכיתי */
                                        `}
                                >
                                    <span className={`font-medium text-lg transition-colors duration-300 ${openItem === item.id
                                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
                                            : 'text-gray-800'
                                        }`}>
                                        {item.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openItem === item.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${openItem === item.id
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                                : 'bg-gray-100 text-gray-500'
                                            }`}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openItem === item.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 py-5 bg-blue-50/30 text-gray-700">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                >
                                                    {item.answer}
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;