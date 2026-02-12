// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section 
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{
//         backgroundImage: 'url(/images/hero/hawa-mahal2.jpeg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-charcoal/10"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-cream mb-8 tracking-tight leading-tight"
//         >
//           Explore India
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="font-display text-xl md:text-2xl lg:text-3xl font-light text-cream/90 mb-16 italic tracking-wide"
//         >
//           "Every state tells a story. India tells them all."
//         </motion.p>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.9 }}
//         >
//           <a 
//             href="/destinations" 
//             className="inline-block px-12 py-4 border border-cream text-cream font-sans text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-cream hover:text-charcoal"
//           >
//             Explore India
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// VIDEO WALA PAGEE  

// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       {/* Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/images/about/intro.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-charcoal/30"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-cream mb-8 tracking-tight leading-tight"
//         >
//           Explore India
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="font-display text-xl md:text-2xl lg:text-3xl font-light text-cream/90 mb-16 italic tracking-wide"
//         >
//           "Every state tells a story. India tells them all."
//         </motion.p>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.9 }}
//         >
//           <a
//             href="/destinations"
//             className="inline-block px-12 py-4 border border-cream text-cream font-sans text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-cream hover:text-charcoal"
//           >
//             Explore India
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// VIDEO UPDATED VERSION 

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center ">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/about/intro.mp4"
        poster="/images/hero/hawa-mahal.png"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/40 to-charcoal/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-8 tracking-tight leading-tight drop-shadow-lg"
        >
          Explore India
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-xl md:text-2xl lg:text-3xl font-light text-cream/90 mb-16 italic tracking-wide drop-shadow-md"
        >
          "Every state tells a story. India tells them all."
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a
            href="/destinations"
            className="inline-block px-12 py-4 border border-cream text-cream font-sans text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-cream hover:text-charcoal backdrop-blur-sm"
          >
            Explore India
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;




// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       {/* Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/images/about/intro.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-charcoal/30"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
//         {/* Main Heading with Left Shadow */}
//         <div className="relative inline-block mb-8">
          
//           {/* Left bold shadow */}
//           <h1
//             className="absolute -left-2 top-0 font-display text-6xl md:text-7xl lg:text-8xl 
//                        font-extrabold text-cream/30 tracking-tight leading-tight select-none"
//             aria-hidden="true"
//           >
//             Explore India
//           </h1>

//           {/* Main animated text */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="relative font-display text-6xl md:text-7xl lg:text-8xl 
//                        font-semibold text-cream tracking-tight leading-tight"
//           >
//             Explore India
//           </motion.h1>
//         </div>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="font-display text-xl md:text-2xl lg:text-3xl font-light text-cream/90 mb-16 italic tracking-wide"
//         >
//           "Every state tells a story. India tells them all."
//         </motion.p>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.9 }}
//         >
//           <a
//             href="/destinations"
//             className="inline-block px-12 py-4 border border-cream text-cream font-sans text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-cream hover:text-charcoal"
//           >
//             Explore India
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
