
// src/components/StepCard.tsx
import { useState } from "react";
import type { Step } from "../data/steps";
import { VoucherIcon, HotelIcon, PaymentIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

interface StepCardProps {
    step: Step;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const getIcon = () => {
        switch (step.icon) {
            case "VoucherIcon":
                return <VoucherIcon />;
            case "HotelIcon":
                return <HotelIcon />;
            case "PaymentIcon":
                return <PaymentIcon />;
            default:
                return null;
        }
    };

    return (
        <motion.div
            className="relative h-full rounded-3xl overflow-hidden group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Aurora Glow Background Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-70 blur-lg group-hover:opacity-100 transition duration-300"></div>

            {/* Card Content */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden h-full flex flex-col">
                {/* Step Number (Centered above icon) */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                        {step.id}
                    </div>
                </div>

                {/* Icon Container */}
                <div className="pt-16 pb-6 px-6 flex items-center justify-center">
                    <motion.div
                        className="w-20 h-20 text-blue-600"
                        animate={isHovered ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                            transition: { duration: 0.5 }
                        } : {}}
                    >
                        {getIcon()}
                    </motion.div>
                </div>

                <div className="p-6 pt-2 flex-grow bg-white rounded-t-3xl">
                    <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                        {step.title}
                    </h3>

                    <p className="text-gray-700 mb-6 text-center">
                        {step.shortDesc}
                    </p>

                    <motion.button
                        onClick={() => setOpen(!open)}
                        className="w-full py-3 px-4 rounded-full font-medium transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                            color: "white",
                            boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)"
                        }}
                    >
                        <div className="flex items-center justify-center">
                            {open ? "הסתר" : "הסבר מורחב"}
                            <motion.svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ rotate: open ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                        </div>
                    </motion.button>

                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="mt-6 text-gray-700 border-t border-gray-100 pt-6 text-sm whitespace-pre-line space-y-3 text-right">
                                    <p className="leading-relaxed">{step.details}</p>

                                    {step.link && step.link.length > 0 && (
                                        <div className="mt-4 space-y-3">
                                            {step.link.map((link, index) => (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-blue-600 hover:text-purple-600 hover:underline transition-colors duration-300"
                                                >
                                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    {link.text}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default StepCard;