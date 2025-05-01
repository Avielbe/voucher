

// // src/components/StepCard.tsx
// import { useState } from "react";
// import type { Step } from "../data/steps";
// import { VoucherIcon, HotelIcon, PaymentIcon } from "./Icons";
// import { motion, AnimatePresence } from "framer-motion";

// interface StepCardProps {
//     step: Step;
// }

// const StepCard: React.FC<StepCardProps> = ({ step }) => {
//     const [open, setOpen] = useState(false);

//     const getIcon = () => {
//         switch (step.icon) {
//             case "VoucherIcon":
//                 return <VoucherIcon />;
//             case "HotelIcon":
//                 return <HotelIcon />;
//             case "PaymentIcon":
//                 return <PaymentIcon />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col">
//             <div className="bg-blue-50 p-4 flex items-center justify-center">
//                 <div className="w-16 h-16 text-blue-600">
//                     {getIcon()}
//                 </div>
//             </div>

//             <div className="p-6 flex-grow">
//                 <div className="flex items-center mb-3">
//                     <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
//                         {step.id}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
//                 </div>

//                 <p className="text-gray-600 mb-4">{step.shortDesc}</p>

//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
//                 >
//                     {open ? "הסתר פרטים" : "הצג פרטים נוספים"}
//                     <svg
//                         className={`w-4 h-4 mr-1 transition-transform ${open ? 'rotate-180' : ''}`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </button>

//                 <AnimatePresence>
//                     {open && (
//                         <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="overflow-hidden"
//                         >
//                             <div className="mt-4 text-gray-700 border-t pt-4 text-sm">
//                                 <p className="leading-relaxed">{step.details}</p>

//                                 {step.link && step.link.length > 0 && (
//                                     <div className="mt-4 space-y-2">
//                                         {step.link.map((link, index) => (
//                                             <a
//                                                 key={index}
//                                                 href={link.url}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
//                                             >
//                                                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                                                 </svg>
//                                                 {link.text}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// };

// export default StepCard;

import { useState } from 'react';
import type { Step } from '../data/steps';
import { VoucherIcon, HotelIcon, PaymentIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

interface StepCardProps {
  step: Step;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const [open, setOpen] = useState(false);

  const getIcon = () => {
    switch (step.icon) {
      case 'VoucherIcon':
        return <VoucherIcon />;
      case 'HotelIcon':
        return <HotelIcon />;
      case 'PaymentIcon':
        return <PaymentIcon />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Centered Number Badge */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-10 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
          {step.id}
        </div>
      </div>

      {/* Icon */}
      <div className="mt-12 flex items-center justify-center">
        <div className="w-16 h-16 text-white">{getIcon()}</div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white text-center">
            {step.title}
          </h3>
          <p className="text-white mb-4 text-center">{step.shortDesc}</p>
        </div>

        {/* Toggle Details */}
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="mx-auto mt-2 flex items-center gap-2 bg-white/30 hover:bg-white/50 text-white font-medium px-4 py-2 rounded-full transition"
          >
            {open ? 'הסתר פרטים' : 'הצג פרטים נוספים'}
            <svg
              className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4 bg-white/20 p-4 rounded-md text-sm text-white"
              >
                <p className="leading-relaxed">{step.details}</p>
                {step.link?.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-2 text-white underline"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {link.text}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default StepCard;
