
// src/components/Footer.tsx
import React from 'react';
// import DesignShowcaseTest from './DesignShowcase'; 

const Footer: React.FC = () => (
  <footer className="bg-blue-800 py-12 text-white">
    <div className="container mx-auto px-4 text-center">
      {/* כאן מציגים זמנית את רכיב העיצוב החדש */}
      {/* <DesignShowcaseTest /> */}

      <p className="mt-8">© {new Date().getFullYear()} Aviel Ben-Eliyahu. כל הזכויות שמורות.</p>
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
