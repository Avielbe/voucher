

// // App.tsx
// import { useState } from 'react';
// import './App.css';
// import StepCard from './components/StepCard';
// import { steps } from './data/steps';
// import About from './components/About';
// import Footer from './components/Footer';
// import FAQ from './components/FAQ';
// import { motion } from 'framer-motion';

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-right" dir="rtl">
//       <header className="relative py-10 overflow-hidden">
//         <div className="absolute inset-0 bg-blue-600 opacity-10 z-0"></div>
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="container mx-auto px-4 relative z-10 text-center"
//         >
//           <h1 className="text-3xl md:text-4xl font-bold text-blue-800">מדריך למימוש שובר חופשה למילואים</h1>
//           <p className="text-gray-600 mt-3 text-lg">שלושה שלבים פשוטים לניצול ההטבה</p>
//         </motion.div>
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <StepCard step={step} />
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <FAQ />
//         </motion.div>
//       </main>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 1 }}
//       >
//         <About />
//       </motion.div>

//       <Footer />
//     </div>
//   );
// }

// export default App;
// src/App.tsx
import { useState } from 'react';
import './App.css';
import StepCard from './components/StepCard';
import { steps } from './data/steps';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-right" dir="rtl">
      <header className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-400 opacity-20"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700">
            מדריך למימוש שובר חופשה למילואים
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            שלושה שלבים פשוטים לניצול ההטבה
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-16">
        {/* Steps Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <StepCard step={step} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FAQ />
          </motion.div>
        </section>

        {/* About & Contact */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <About />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
