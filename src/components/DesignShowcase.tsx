// // export default DesignShowcase;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CreditCard, Home2, Wallet, Mail, Linkedin } from 'lucide-react';

// type StyleId = 'glass' | 'aurora' | 'neo' | 'brutal';

// const STYLES: { id: StyleId; name: string }[] = [
//   { id: 'glass', name: 'גלאסמורפיזם' },
//   { id: 'aurora', name: 'אורורה UI' },
//   { id: 'neo', name: 'ניומורפיזם' },
//   { id: 'brutal', name: 'ברוטליזם' },
// ];

// const STEP_TITLES = ['הנפקת שובר', 'בחירת מלון או צימר', 'מימוש השובר בחופשה'];
// const STEP_DESCS = [
//   'תיאור קצר של השלב הזה במימוש השובר.',
//   'תיאור קצר של השלב הזה במימוש השובר.',
//   'תיאור קצר של השלב הזה במימוש השובר.',
// ];

// export default function DesignShowcaseTest() {
//   const [style, setStyle] = useState<StyleId>('glass');

//   return (
//     <section className="py-12 bg-gray-50">
//       {/* כפתורי בחירה */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {STYLES.map(s => (
//           <button
//             key={s.id}
//             onClick={() => setStyle(s.id)}
//             className={`px-4 py-2 rounded-full font-medium transition ${style === s.id
//               ? 'bg-blue-600 text-white shadow-lg'
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//           >
//             {s.name}
//           </button>
//         ))}
//       </div>

//       {/* תצוגת הסגנון הנבחר */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={style}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.4 }}
//           className="container mx-auto px-4"
//         >
//           <CardGrid style={style} />
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// }

// function CardGrid({ style }: { style: StyleId }) {
//   const containerClasses = {
//     glass: 'backdrop-blur-lg bg-white/30 border border-white/50 rounded-xl',
//     aurora: 'bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-xl text-white',
//     neo: 'bg-gray-100 shadow-inner rounded-2xl',
//     brutal: 'border-4 border-black bg-white',
//   }[style];

//   const btnClasses = {
//     glass: 'mt-4 px-4 py-2 bg-white/50 hover:bg-white text-blue-800 rounded-full',
//     aurora: 'mt-4 px-4 py-2 bg-white/30 hover:bg-white/50 rounded-lg',
//     neo: 'mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md',
//     brutal: 'mt-4 w-full py-2 border-4 border-black font-black hover:bg-black hover:text-white',
//   }[style];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//       {[0, 1, 2].map(i => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5, delay: i * 0.2 }}
//           className={`${containerClasses} p-6 flex flex-col items-center text-center`}
//         >
//           {/* מספר במרכז מעל האייקון */}
//           <div className="relative -top-8">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">
//               {i + 1}
//             </div>
//           </div>

//           {/* אייקון */}
//           <div className="my-4">
//             {i === 0 && <CreditCard size={48} />}
//             {i === 1 && <Wallet size={48} />}
//             {i === 2 && <Wallet size={48} />}
//           </div>

//           <h3 className="font-semibold text-xl mb-2">{STEP_TITLES[i]}</h3>
//           <p className="text-sm mb-4">{STEP_DESCS[i]}</p>
//           <button className={btnClasses}>הצג פרטים נוספים</button>
//         </motion.div>
//       ))}

//       {/* כפתורי יצירת קשר */}
//       <div className="sm:col-span-3 mt-8 flex justify-center gap-4">
//         <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
//           <Mail size={20} /> <span>שלח מייל</span>
//         </button>
//         <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-blue-800 px-4 py-2 rounded-lg border border-blue-800">
//           <Linkedin size={20} /> <span>לינקדאין</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// src/components/DesignShowcaseTest.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Home2, Wallet, Mail, Linkedin } from 'lucide-react';

type StyleId = 'aurora-borealis' | 'aurora-sunset' | 'glass-colorful' | 'claymorphism';

const STYLES: { id: StyleId; name: string }[] = [
  // Prompt names for your AI/image prompts:
  // aurora-borealis -> "Aurora Borealis Gradient"
  // aurora-sunset    -> "Aurora Sunset Gradient"
  // glass-colorful  -> "Colorful Glassmorphism"
  // claymorphism    -> "Soft Claymorphism"
  { id: 'aurora-borealis', name: 'גרדיאנט אורות הצפון' },
  { id: 'aurora-sunset',    name: 'גרדיאנט שקיעה' },
  { id: 'glass-colorful',   name: 'זכוכית צבעונית' },
  { id: 'claymorphism',     name: 'חימר רך' },
];

const STEP_TITLES = ['הנפקת שובר', 'בחירת לוקיישן', 'מימוש השובר'];
const STEP_DESCS  = [
  'תיאור קצר של השלב הזה במימוש השובר.',
  'תיאור קצר של השלב הזה במימוש השובר.',
  'תיאור קצר של השלב הזה במימוש השובר.',
];

export default function DesignShowcaseTest() {
  const [style, setStyle] = useState<StyleId>('aurora-borealis');

  return (
    <section className="py-12 bg-gray-50">
      {/* כפתורי בחירה */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {STYLES.map(s => (
          <button
            key={s.id}
            onClick={() => setStyle(s.id)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              style === s.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* תצוגת הסגנון הנבחר */}
      <AnimatePresence mode="wait">
        <motion.div
          key={style}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4"
        >
          <CardGrid style={style} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function CardGrid({ style }: { style: StyleId }) {
  const containerClasses: Record<StyleId,string> = {
    // וריאציית אורורה בצבעי אורות הצפון (ירוק–כחול–סגול)
    'aurora-borealis': 'bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white rounded-xl shadow-lg',
    // וריאציית אורורה בצבעי שקיעה (כתום–ורוד–סגול)
    'aurora-sunset':    'bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white rounded-xl shadow-lg',
    // זכוכית גלויה בצבעים עזים
    'glass-colorful':   'backdrop-blur-lg bg-white/60 border border-white/30 shadow-xl rounded-2xl',
    // חימר UI רך עם צללים רכים וגווני פסטל
    'claymorphism':     'bg-pink-50 rounded-3xl shadow-[8px_8px_15px_rgba(0,0,0,0.05),-8px_-8px_15px_rgba(255,255,255,0.8)]',
  };

  const btnClasses: Record<StyleId,string> = {
    'aurora-borealis': 'mt-4 px-4 py-2 bg-white/30 hover:bg-white/50 rounded-full',
    'aurora-sunset':    'mt-4 px-4 py-2 bg-white/30 hover:bg-white/50 rounded-full',
    'glass-colorful':   'mt-4 px-4 py-2 bg-white/50 hover:bg-white text-blue-800 rounded-full',
    'claymorphism':     'mt-4 px-4 py-2 bg-white hover:bg-gray-100 rounded-lg',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {[0,1,2].map(i => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className={`${containerClasses[style]} p-6 flex flex-col items-center text-center`}
        >
          {/* מספר במרכז מעל האייקון */}
          <div className="relative -top-8">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">
              {i+1}
            </div>
          </div>

          {/* אייקון */}
          <div className="my-4">
            {i===0 && <CreditCard size={48} />}
            {i===1 && <Wallet       size={48} />}
            {i===2 && <Wallet      size={48} />}
          </div>

          <h3 className="font-semibold text-xl mb-2">{STEP_TITLES[i]}</h3>
          <p className="text-sm mb-4">{STEP_DESCS[i]}</p>
          <button className={btnClasses[style]}>הצג פרטים נוספים</button>
        </motion.div>
      ))}

      {/* כפתורי יצירת קשר */}
      <div className="sm:col-span-3 mt-8 flex justify-center gap-4">
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          <Mail size={20}/> <span>שלח מייל</span>
        </button>
        <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-blue-800 px-4 py-2 rounded-lg border border-blue-800">
          <Linkedin size={20}/> <span>לינקדאין</span>
        </button>
      </div>
    </div>
  );
}

