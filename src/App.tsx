

// // // App.tsx
// // import { useState } from 'react';
// // import './App.css';
// // import StepCard from './components/StepCard';
// // import { steps } from './data/steps';
// // import About from './components/About';
// // import Footer from './components/Footer';
// // import FAQ from './components/FAQ';
// // import { motion } from 'framer-motion';

// // function App() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-right" dir="rtl">
// //       <header className="relative py-10 overflow-hidden">
// //         <div className="absolute inset-0 bg-blue-600 opacity-10 z-0"></div>
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="container mx-auto px-4 relative z-10 text-center"
// //         >
// //           <h1 className="text-3xl md:text-4xl font-bold text-blue-800">מדריך למימוש שובר חופשה למילואים</h1>
// //           <p className="text-gray-600 mt-3 text-lg">שלושה שלבים פשוטים לניצול ההטבה</p>
// //         </motion.div>
// //       </header>

// //       <main className="container mx-auto px-4 py-8">
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {steps.map((step, index) => (
// //             <motion.div
// //               key={step.id}
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.2 }}
// //             >
// //               <StepCard step={step} />
// //             </motion.div>
// //           ))}
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.5, delay: 0.8 }}
// //         >
// //           <FAQ />
// //         </motion.div>
// //       </main>

// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.5, delay: 1 }}
// //       >
// //         <About />
// //       </motion.div>

// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;
// // src/App.tsx
// import { useState } from 'react';
// import './App.css';
// import StepCard from './components/StepCard';
// import { steps } from './data/steps';
// import FAQ from './components/FAQ';
// import About from './components/About';
// import Footer from './components/Footer';
// import { motion } from 'framer-motion';

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-right" dir="rtl">
//       <header className="relative py-12 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-400 opacity-20"></div>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative container mx-auto px-4 text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700">
//             מדריך למימוש שובר חופשה למילואים
//           </h1>
//           <p className="mt-4 text-lg text-gray-800">
//             שלושה שלבים פשוטים לניצול ההטבה
//           </p>
//         </motion.div>
//       </header>

//       <main className="container mx-auto px-4 py-10 space-y-16">
//         {/* Steps Grid */}
//         <section>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {steps.map((step, idx) => (
//               <motion.div
//                 key={step.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//               >
//                 <StepCard step={step} />
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* FAQ */}
//         <section>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <FAQ />
//           </motion.div>
//         </section>

//         {/* About & Contact */}
//         <section>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <About />
//           </motion.div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;
// App.tsx
// import { useState, useEffect } from 'react';
import './App.css';
import StepCard from './components/StepCard';
import { steps } from './data/steps';
import About from './components/About';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Animation sequence for mobile scroll effects
  // const [animateSteps, setAnimateSteps] = useState(false);
  // const [animateFAQ, setAnimateFAQ] = useState(false);
  // const [animateAbout, setAnimateAbout] = useState(false);

  // useEffect(() => {
  //   // Initial animation on page load
  //   const timer = setTimeout(() => setAnimateSteps(true), 400);

  //   // Setup scroll detection for mobile animations
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const windowHeight = window.innerHeight;

  //     // Trigger animations based on scroll position
  //     if (scrollPosition > windowHeight * 0.3) {
  //       setAnimateFAQ(true);
  //     }

  //     if (scrollPosition > windowHeight * 0.6) {
  //       setAnimateAbout(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     clearTimeout(timer);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-white text-right" dir="rtl">
      {/* Hero Section with Aurora effect */}
      <header className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-90 z-0"></div>

        {/* Animated light streaks for Aurora effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute h-[200px] w-[40%] bg-white/20 blur-3xl rounded-full"
            initial={{ x: '-100%', y: '20%', rotate: -15 }}
            animate={{
              x: '200%',
              y: '10%',
              rotate: 15,
              transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'linear'
              }
            }}
          />
          <motion.div
            className="absolute h-[100px] w-[20%] bg-blue-100/30 blur-2xl rounded-full"
            initial={{ x: '100%', y: '70%', rotate: 20 }}
            animate={{
              x: '-100%',
              y: '60%',
              rotate: -20,
              transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'linear',
                delay: 1
              }
            }}
          />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-sans text-white"
          >
            מדריך למימוש שובר חופשה למילואים
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white/90 mt-4 text-xl"
          >
            שלושה שלבים פשוטים לניצול ההטבה המגיעה לך
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            {/* <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              התחל עכשיו
            </button> */}
          </motion.div>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-16 relative">
        {/* Steps Section with improved animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold text-center text-blue-800 mb-12"
          >
            שלושה שלבים למימוש השובר
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                // key={step.id}
                // initial={{ opacity: 0, y: 50 }}
                // animate={animateSteps ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                // transition={{ 
                //   duration: 0.8, 
                //   delay: 0.2 + index * 0.2,
                //   type: "spring",
                //   stiffness: 100
                // }}
                // whileHover={{ 
                //   y: -10,
                //   transition: { duration: 0.3 }
                // }}
                key={step.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.25, once: false }}   // ↔ מופעל שוב בכל כניסה/יציאה
                transition={{ duration: 0.6, type: "spring", stiffness: 120, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <StepCard step={step} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section with animated entrance */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <FAQ />
        </motion.div>
      </main>

      {/* About Section with animated entrance */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: false }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <About />
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;