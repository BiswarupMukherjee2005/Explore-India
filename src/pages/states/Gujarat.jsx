import { motion } from 'framer-motion';
import { useState } from 'react';

const Gujarat = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const galleryImages = [
    '/images/states/gujarat/gujarat-1.jpeg',
    '/images/states/gujarat/gujarat-2.jpeg',
    '/images/states/gujarat/gujarat-3.jpeg',
    '/images/states/gujarat/gujarat-4.jpeg',
    '/images/states/gujarat/gujarat-5.jpeg',
    '/images/states/gujarat/gujarat-6.jpeg',
    '/images/states/gujarat/gujarat-7.jpeg',
    '/images/states/gujarat/gujarat-8.jpeg',
    '/images/states/gujarat/gujarat-9.jpeg',
    '/images/states/gujarat/gujarat-10.jpeg',
    '/images/states/gujarat/gujarat-11.jpeg',
//    '/images/states/gujarat/gujarat-12.jpg',
  ];

  const highlights = [
    {
      title: 'Wildlife',
      description: '10 wildlife sanctuaries',
      color: 'text-blue-700'
    },
    {
      title: 'Cuisines & Flavours',
      description: '40+ traditional regional dishes',
      color: 'text-blue-700'
    },
    {
      title: 'Tourist Spots',
      description: '45+ major attractions',
      color: 'text-blue-700'
    },
    {
      title: 'Local Favourites',
      description: '14+ locally celebrated cultural & craft traditions',
      color: 'text-blue-700'
    },
    {
      title: 'Spiritual',
      description: '20+ significant religious sites',
      color: 'text-blue-700'
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section with Description */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Region Label */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-charcoal"></div>
            <span className="px-4 font-sans text-sm text-charcoal uppercase tracking-wider">
              West
            </span>
            <div className="h-px w-16 bg-charcoal"></div>
          </div>

          {/* State Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-charcoal text-center mb-4 tracking-tight"
          >
            Gujarat
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-2xl md:text-3xl font-light text-blue-700 text-center italic mb-16"
          >
            The Land of the Legends
          </motion.p>

          {/* Description - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mb-20"
          >
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left mb-6">
              Experience the vibrant spirit of Gujarat, where ancient history, colourful culture, and resilient 
              landscapes come together. From the white salt deserts of the Rann of Kutch to the sacred banks of the 
              Sabarmati, Gujarat tells stories shaped by trade, faith, and fearless creativity.
            </p>
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left">
              While iconic places like the Statue of Unity, Somnath, and Gir Forest draw the world's attention, the true soul 
              of Gujarat lives in its bustling bazaars, quiet stepwells, folk music, and timeless crafts. Every journey here is a 
              blend of devotion, enterprise, and celebration.
            </p>
          </motion.div>

          {/* Highlights Grid - 5 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-8 mb-20"
          >
            {highlights.map((item, index) => (
              <div key={index} className="text-left">
                <h3 className={`font-display text-lg font-semibold ${item.color} mb-2`}>
                  {item.title}
                </h3>
                <p className="font-body text-xs text-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section – Editorial Collage */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-12 auto-rows-[120px] gap-3"
          >
            {galleryImages.map((image, index) => {
              /**
               * Manual layout pattern
               * Matches collage style from screenshot
               */
              const layoutMap = [
                "col-span-6 row-span-2", // big hero left
                "col-span-3 row-span-2",
                "col-span-3 row-span-2",

                "col-span-3 row-span-2",
                "col-span-6 row-span-2", // wide middle
                "col-span-3 row-span-2",

                "col-span-4 row-span-2",
                "col-span-4 row-span-2",
                "col-span-4 row-span-2",

                "col-span-6 row-span-2",
                "col-span-6 row-span-2",
              ];

              const layout = layoutMap[index] || "col-span-4 row-span-2";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.04 }}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${layout} ${
                    hoveredImage === index ? "scale-[1.03] z-20" : "z-10"
                  }`}
                >
                  {/* REAL IMAGE */}
                  <img
                    src={image}
                    alt={`Gujarat ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay */}
                  {hoveredImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4"
                    >
                      <p className="text-white font-sans text-sm tracking-wide">
                        Gujarat
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gujarat;