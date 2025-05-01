// // // // src/components/About.tsx

// // // import React from "react";

// // // const About: React.FC = () => (
// // //     <section className="bg-white py-12">
// // //         <div className="container mx-auto px-4 text-center">
// // //             <h2 className="text-2xl font-bold mb-4">About Me</h2>
// // //             <p className="text-gray-700">
// // //                 I’m a full‐stack developer building this guide. Looking for my next role—feel free to reach out!
// // //             </p>
// // //         </div>
// // //     </section>
// // // );

// // // export default About;



// // // src/components/About.tsx
// // import React from "react";
// // import { motion } from "framer-motion";

// // const About: React.FC = () => {
// //     return (
// //         <section className="py-16 bg-gradient-to-b from-white to-blue-50">
// //             <div className="container mx-auto px-4">
// //                 <motion.div 
// //                     initial={{ opacity: 0, y: 20 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.5 }}
// //                     viewport={{ once: true }}
// //                     className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto text-center"
// //                 >
// //                     <h2 className="text-2xl font-bold mb-6 text-blue-800">על עצמי</h2>

// //                     <p className="text-gray-700 mb-6 leading-relaxed">
// //                         Hope this guide helped! I'm [Your Name], a software developer passionate about creating clear and helpful digital solutions. I built this page to assist with the voucher process. If you're looking for a developer with skills in Full Stack or Mobile development, or need a professional landing page for your own project, feel free to connect.
// //                     </p>

// //                     <div className="flex justify-center space-x-4 space-x-reverse">
// //                         <a 
// //                             href="mailto:your-email@example.com" 
// //                             className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
// //                         >
// //                             <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
// //                                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
// //                                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
// //                             </svg>
// //                             שלח מייל
// //                         </a>

// //                         <a 
// //                             href="https://linkedin.com/in/your-profile" 
// //                             target="_blank" 
// //                             rel="noopener noreferrer"
// //                             className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
// //                         >
// //                             <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
// //                                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
// //                             </svg>
// //                             לינקדאין
// //                         </a>
// //                     </div>
// //                 </motion.div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default About;
// import React from 'react';
// import { motion } from 'framer-motion';

// const About: React.FC = () => (
//   <section className="py-16 bg-gradient-to-br from-white to-blue-50">
//     <div className="container mx-auto px-4 text-center">
//       <h2 className="text-2xl font-bold mb-6 text-purple-700">על עצמי</h2>
//       <p className="text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto">
//         מקווה שהמדריך עזר! אני [Your Name], מפתח תוכנה שמתמסר ליצירת פתרונות דיגיטליים ברורים ומועילים...
//       </p>

//       <div className="flex flex-col sm:flex-row justify-center gap-4">
//         <motion.a
//           href="mailto:your-email@example.com"
//           className="flex items-center justify-center gap-2 bg-gradient-to-br from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
//           whileTap={{ scale: 0.95 }}
//         >
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//           </svg>
//           שלח מייל
//         </motion.a>

//         <motion.a
//           href="https://linkedin.com/in/your-profile"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center gap-2 bg-white text-blue-700 border-2 border-blue-500 px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
//           whileTap={{ scale: 0.95 }}
//         >
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//           </svg>
//           לינקדאין
//         </motion.a>
//       </div>
//     </div>
//   </section>
// );

// export default About;
// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Button animation for mobile and desktop
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.15 } }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold font-sans mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          variants={itemVariants}
        >
          אהלן!
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
          variants={itemVariants}
        />

        <motion.p
          className="text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto"
          variants={itemVariants}
        >
          האתר פותח בשביל להקל על אנשי המילואים להשתמש בשובר הנופש. 
          אני אביאל בן-אליהו , מפתח תוכנה ומליאומניק ביחידה לוחמת. מביא איתי ניסיון בתחום ה Fullstack וה- Mobile, ומחפש את האתגר הבא. אשמח לשמור על קשר:
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          {/* <motion.a
            href="mailto:your-email@example.com"
            className="group flex items-center justify-center gap-2 bg-gradient-to-br from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              className="w-5 h-5 relative"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
            >
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </motion.span>
            שלח מייל
          </motion.a> */}

          <motion.a
            href="mailto:avielmbe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-white text-blue-700 border-2 border-blue-500 px-6 py-3 rounded-full shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              className="w-5 h-5 relative"
              initial={{ y: 0 }}
              whileHover={{ y: [0, -3, 0], transition: { duration: 0.5 } }}
            >
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </motion.span>
            אימייל
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/aviel-ben-eliyahu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-white text-blue-700 border-2 border-blue-500 px-6 py-3 rounded-full shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              className="w-5 h-5 relative"
              initial={{ y: 0 }}
              whileHover={{ y: [0, -3, 0], transition: { duration: 0.5 } }}
            >
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.span>
            לינקדאין
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;