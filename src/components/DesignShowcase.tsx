// // // export default DesignShowcase;

// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { CreditCard, Home2, Wallet, Mail, Linkedin } from 'lucide-react';

// // type StyleId = 'glass' | 'aurora' | 'neo' | 'brutal';

// // const STYLES: { id: StyleId; name: string }[] = [
// //   { id: 'glass', name: 'גלאסמורפיזם' },
// //   { id: 'aurora', name: 'אורורה UI' },
// //   { id: 'neo', name: 'ניומורפיזם' },
// //   { id: 'brutal', name: 'ברוטליזם' },
// // ];

// // const STEP_TITLES = ['הנפקת שובר', 'בחירת מלון או צימר', 'מימוש השובר בחופשה'];
// // const STEP_DESCS = [
// //   'תיאור קצר של השלב הזה במימוש השובר.',
// //   'תיאור קצר של השלב הזה במימוש השובר.',
// //   'תיאור קצר של השלב הזה במימוש השובר.',
// // ];

// // export default function DesignShowcaseTest() {
// //   const [style, setStyle] = useState<StyleId>('glass');

// //   return (
// //     <section className="py-12 bg-gray-50">
// //       {/* כפתורי בחירה */}
// //       <div className="flex flex-wrap justify-center gap-3 mb-8">
// //         {STYLES.map(s => (
// //           <button
// //             key={s.id}
// //             onClick={() => setStyle(s.id)}
// //             className={`px-4 py-2 rounded-full font-medium transition ${style === s.id
// //               ? 'bg-blue-600 text-white shadow-lg'
// //               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
// //               }`}
// //           >
// //             {s.name}
// //           </button>
// //         ))}
// //       </div>

// //       {/* תצוגת הסגנון הנבחר */}
// //       <AnimatePresence mode="wait">
// //         <motion.div
// //           key={style}
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: -20 }}
// //           transition={{ duration: 0.4 }}
// //           className="container mx-auto px-4"
// //         >
// //           <CardGrid style={style} />
// //         </motion.div>
// //       </AnimatePresence>
// //     </section>
// //   );
// // }

// // function CardGrid({ style }: { style: StyleId }) {
// //   const containerClasses = {
// //     glass: 'backdrop-blur-lg bg-white/30 border border-white/50 rounded-xl',
// //     aurora: 'bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-xl text-white',
// //     neo: 'bg-gray-100 shadow-inner rounded-2xl',
// //     brutal: 'border-4 border-black bg-white',
// //   }[style];

// //   const btnClasses = {
// //     glass: 'mt-4 px-4 py-2 bg-white/50 hover:bg-white text-blue-800 rounded-full',
// //     aurora: 'mt-4 px-4 py-2 bg-white/30 hover:bg-white/50 rounded-lg',
// //     neo: 'mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md',
// //     brutal: 'mt-4 w-full py-2 border-4 border-black font-black hover:bg-black hover:text-white',
// //   }[style];

// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
// //       {[0, 1, 2].map(i => (
// //         <motion.div
// //           key={i}
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.3 }}
// //           transition={{ duration: 0.5, delay: i * 0.2 }}
// //           className={`${containerClasses} p-6 flex flex-col items-center text-center`}
// //         >
// //           {/* מספר במרכז מעל האייקון */}
// //           <div className="relative -top-8">
// //             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">
// //               {i + 1}
// //             </div>
// //           </div>

// //           {/* אייקון */}
// //           <div className="my-4">
// //             {i === 0 && <CreditCard size={48} />}
// //             {i === 1 && <Wallet size={48} />}
// //             {i === 2 && <Wallet size={48} />}
// //           </div>

// //           <h3 className="font-semibold text-xl mb-2">{STEP_TITLES[i]}</h3>
// //           <p className="text-sm mb-4">{STEP_DESCS[i]}</p>
// //           <button className={btnClasses}>הצג פרטים נוספים</button>
// //         </motion.div>
// //       ))}

// //       {/* כפתורי יצירת קשר */}
// //       <div className="sm:col-span-3 mt-8 flex justify-center gap-4">
// //         <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
// //           <Mail size={20} /> <span>שלח מייל</span>
// //         </button>
// //         <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-blue-800 px-4 py-2 rounded-lg border border-blue-800">
// //           <Linkedin size={20} /> <span>לינקדאין</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // src/components/DesignShowcaseTest.tsx

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CreditCard, Home2, Wallet, Mail, Linkedin } from 'lucide-react';

// type StyleId = 'aurora-borealis' | 'aurora-sunset' | 'glass-colorful' | 'claymorphism';

// const STYLES: { id: StyleId; name: string }[] = [
//   // Prompt names for your AI/image prompts:
//   // aurora-borealis -> "Aurora Borealis Gradient"
//   // aurora-sunset    -> "Aurora Sunset Gradient"
//   // glass-colorful  -> "Colorful Glassmorphism"
//   // claymorphism    -> "Soft Claymorphism"
//   { id: 'aurora-borealis', name: 'גרדיאנט אורות הצפון' },
//   { id: 'aurora-sunset',    name: 'גרדיאנט שקיעה' },
//   { id: 'glass-colorful',   name: 'זכוכית צבעונית' },
//   { id: 'claymorphism',     name: 'חימר רך' },
// ];

// const STEP_TITLES = ['הנפקת שובר', 'בחירת לוקיישן', 'מימוש השובר'];
// const STEP_DESCS  = [
//   'תיאור קצר של השלב הזה במימוש השובר.',
//   'תיאור קצר של השלב הזה במימוש השובר.',
//   'תיאור קצר של השלב הזה במימוש השובר.',
// ];

// export default function DesignShowcaseTest() {
//   const [style, setStyle] = useState<StyleId>('aurora-borealis');

//   return (
//     <section className="py-12 bg-gray-50">
//       {/* כפתורי בחירה */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {STYLES.map(s => (
//           <button
//             key={s.id}
//             onClick={() => setStyle(s.id)}
//             className={`px-4 py-2 rounded-full font-medium transition ${
//               style === s.id
//                 ? 'bg-blue-600 text-white shadow-lg'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
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
//   const containerClasses: Record<StyleId,string> = {
//     // וריאציית אורורה בצבעי אורות הצפון (ירוק–כחול–סגול)
//     'aurora-borealis': 'bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white rounded-xl shadow-lg',
//     // וריאציית אורורה בצבעי שקיעה (כתום–ורוד–סגול)
//     'aurora-sunset':    'bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white rounded-xl shadow-lg',
//     // זכוכית גלויה בצבעים עזים
//     'glass-colorful':   'backdrop-blur-lg bg-white/60 border border-white/30 shadow-xl rounded-2xl',
//     // חימר UI רך עם צללים רכים וגווני פסטל
//     'claymorphism':     'bg-pink-50 rounded-3xl shadow-[8px_8px_15px_rgba(0,0,0,0.05),-8px_-8px_15px_rgba(255,255,255,0.8)]',
//   };

//   const btnClasses: Record<StyleId,string> = {
//     'aurora-borealis': 'mt-4 px-4 py-2 bg-white/30 hover:bg-white/50 rounded-full',
//     'aurora-sunset':    'mt-4 px-4 py-2 bg-white/30 hover:bg-white/50 rounded-full',
//     'glass-colorful':   'mt-4 px-4 py-2 bg-white/50 hover:bg-white text-blue-800 rounded-full',
//     'claymorphism':     'mt-4 px-4 py-2 bg-white hover:bg-gray-100 rounded-lg',
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//       {[0,1,2].map(i => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5, delay: i * 0.2 }}
//           className={`${containerClasses[style]} p-6 flex flex-col items-center text-center`}
//         >
//           {/* מספר במרכז מעל האייקון */}
//           <div className="relative -top-8">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">
//               {i+1}
//             </div>
//           </div>

//           {/* אייקון */}
//           <div className="my-4">
//             {i===0 && <CreditCard size={48} />}
//             {i===1 && <Wallet       size={48} />}
//             {i===2 && <Wallet      size={48} />}
//           </div>

//           <h3 className="font-semibold text-xl mb-2">{STEP_TITLES[i]}</h3>
//           <p className="text-sm mb-4">{STEP_DESCS[i]}</p>
//           <button className={btnClasses[style]}>הצג פרטים נוספים</button>
//         </motion.div>
//       ))}

//       {/* כפתורי יצירת קשר */}
//       <div className="sm:col-span-3 mt-8 flex justify-center gap-4">
//         <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
//           <Mail size={20}/> <span>שלח מייל</span>
//         </button>
//         <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-blue-800 px-4 py-2 rounded-lg border border-blue-800">
//           <Linkedin size={20}/> <span>לינקדאין</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// src/components/DesignShowcase.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Design style types
type DesignStyle = 'aurora' | 'glass' | 'neobrutal' | 'neumorphic';

const DesignShowcase: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState<DesignStyle>('aurora');

  // Style selector component
  const StyleSelector = () => (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {(['aurora', 'glass', 'neobrutal', 'neumorphic'] as DesignStyle[]).map((style) => (
        <motion.button
          key={style}
          onClick={() => setActiveStyle(style)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeStyle === style
              ? 'bg-white text-blue-800 shadow-lg'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {style.charAt(0).toUpperCase() + style.slice(1)}
        </motion.button>
      ))}
    </div>
  );

  // Aurora style card
  const AuroraCard = () => (
    <motion.div
      className="relative p-6 rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background aurora effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-90"></div>
      
      {/* Animated light effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute h-16 w-[30%] bg-white/30 blur-2xl rounded-full"
          initial={{ x: '-100%', y: '20%', rotate: -15 }}
          animate={{ 
            x: '200%', 
            y: '10%',
            rotate: 15,
            transition: { 
              duration: 6,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'linear'
            }
          }}
        />
        <motion.div 
          className="absolute h-10 w-[15%] bg-blue-100/30 blur-xl rounded-full"
          initial={{ x: '100%', y: '70%', rotate: 20 }}
          animate={{ 
            x: '-100%',
            y: '60%',
            rotate: -20,
            transition: { 
              duration: 8,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'linear',
              delay: 0.5
            }
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative text-white text-center">
        <h3 className="text-xl font-bold mb-2">Aurora Style</h3>
        <p className="text-white/80">
          Flowing gradients with ethereal light effects, creating a dreamy, vibrant atmosphere.
        </p>
      </div>
    </motion.div>
  );

  // Glass style card
  const GlassCard = () => (
    <motion.div
      className="relative p-6 rounded-2xl overflow-hidden border border-white/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Enhanced visibility elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      
      <div className="relative text-white text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-xl">✨</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Glass Style</h3>
        <p className="text-white/90">
          Translucent surfaces with subtle highlights and borders, creating a modern, airy feel.
        </p>
      </div>
    </motion.div>
  );

  // Neobrutalism style card
  const NeoBrutalCard = () => (
    <motion.div
      className="p-6 bg-yellow-400 text-black rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        x: -5, 
        y: -5,
        boxShadow: '11px 11px 0px 0px rgba(0,0,0,1)',
        transition: { duration: 0.2 }
      }}
    >
      <div className="text-center">
        <div className="w-14 h-14 mx-auto mb-4 bg-white border-4 border-black rounded-full flex items-center justify-center rotate-3">
          <span className="text-2xl">🔥</span>
        </div>
        <h3 className="text-2xl font-black mb-2 transform -rotate-1">Neobrutalism</h3>
        <p className="font-bold">
          Bold colors, thick borders, and playful shadows for a striking, unapologetic look.
        </p>
      </div>
    </motion.div>
  );

  // Neumorphism style card
  const NeumorphicCard = () => (
    <motion.div
      className="p-6 bg-gray-100 rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7)'
      }}
    >
      <div className="text-center">
        <div 
          className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{
            background: '#E0E5EC',
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.8), inset 1px 1px 2px rgba(255, 255, 255, 0.3)'
          }}
        >
          <span className="text-blue-500 text-2xl">↗️</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-700">Neumorphic</h3>
        <p className="text-gray-600">
          Soft, embossed UI with subtle shadows creating an elegant, tactile appearance.
        </p>
      </div>
    </motion.div>
  );

  // Render the currently active design style
  const renderActiveStyle = () => {
    switch (activeStyle) {
      case 'aurora':
        return <AuroraCard />;
      case 'glass':
        return <GlassCard />;
      case 'neobrutal':
        return <NeoBrutalCard />;
      case 'neumorphic':
        return <NeumorphicCard />;
      default:
        return <AuroraCard />;
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center">Design Showcase</h3>
      <StyleSelector />
      {renderActiveStyle()}
    </div>
  );
};

export default DesignShowcase;