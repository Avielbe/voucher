// src/components/FAQ.tsx
import { useState } from "react";
import { faqItems } from "../data/faq";
import { motion, AnimatePresence } from "framer-motion";

const FAQ: React.FC = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section className="mt-16 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">שאלות ותשובות</h2>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {faqItems.map((item) => (
                    <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none"
                        >
                            <span className="font-medium text-gray-800">{item.question}</span>
                            <svg
                                className={`w-5 h-5 text-blue-600 transition-transform ${openItem === item.id ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <AnimatePresence>
                            {openItem === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
