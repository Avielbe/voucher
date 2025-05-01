// // src/components/Footer.tsx

// import React from "react";

// const Footer: React.FC = () => (
//     <footer className="bg-gray-100 py-6 mt-12">
//         <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
//             <p>© {new Date().getFullYear()} Aviel BE. All rights reserved.</p>
//             <p className="mt-2">
//                 Landing page live at:{" "}
//                 <a
//                     href="https://your-app.web.app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                 >
//                     your-app.web.app
//                 </a>
//             </p>
//         </div>
//     </footer>
// );

// export default Footer;

// // src/components/Footer.tsx
// const Footer: React.FC = () => (
//     <footer className="bg-blue-800 py-6 text-white">
//         <div className="container mx-auto px-4 text-center">
//             <p>© {new Date().getFullYear()} Aviel BE. כל הזכויות שמורות.</p>
//         </div>
//     </footer>
// );

// export default Footer;
// src/components/Footer.tsx
import React from 'react';
import DesignShowcaseTest from './DesignShowcase'; // Assuming this is the new design showcase component';

const Footer: React.FC = () => (
  <footer className="bg-blue-800 py-12 text-white">
    <div className="container mx-auto px-4 text-center">
      {/* כאן מציגים זמנית את רכיב העיצוב החדש */}
      <DesignShowcaseTest />

      <p className="mt-8">© {new Date().getFullYear()} Aviel BE. כל הזכויות שמורות.</p>
    </div>
  </footer>
);

export default Footer;



// // src/components/Footer.tsx
// import React from 'react';
// import DesignShowcase from './DesignShowcase';
// import { ErrorBoundary } from './ErrorBoundary';

// const Footer: React.FC = () => (
//   <footer className="bg-blue-800 py-6 text-white">
//     <div className="container mx-auto px-4 text-center">
//         <ErrorBoundary>

//       {/* Temporary design showcase for testing styles */}
//       <DesignShowcase />
//         </ErrorBoundary>

//       <p>© {new Date().getFullYear()} Aviel BE. כל הזכויות שמורות.</p>
//     </div>
//   </footer>
// );

// export default Footer;
