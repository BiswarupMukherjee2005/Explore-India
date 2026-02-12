import { motion } from 'framer-motion';
import { useState } from 'react';

const Karnataka = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const galleryImages = [
    '/images/states/karnataka/karnataka-1.jpeg',
    '/images/states/karnataka/karnataka-2.jpeg',
    '/images/states/karnataka/karnataka-3.jpeg',
    '/images/states/karnataka/karnataka-4.jpeg',
    '/images/states/karnataka/karnataka-5.jpeg',
    '/images/states/karnataka/karnataka-6.jpeg',
    '/images/states/karnataka/karnataka-7.jpeg',
    '/images/states/karnataka/karnataka-8.jpeg',
    '/images/states/karnataka/karnataka-9.jpeg',
    '/images/states/karnataka/karnataka-10.jpeg',
    '/images/states/karnataka/karnataka-11.jpeg',
//    '/images/states/karnataka/karnataka-12.jpg',
  ];

  const highlights = [
    {
      title: 'Wildlife',
      description: '25+ wildlife sanctuaries & national parks',
      color: 'text-blue-700'
    },
    {
      title: 'Cuisines & Flavours',
      description: '50+ traditional regional dishes',
      color: 'text-blue-700'
    },
    {
      title: 'Tourist Spots',
      description: '50+ major heritage, nature & urban attractions',
      color: 'text-blue-700'
    },
    {
      title: 'Local Favourites',
      description: '20-24 folk arts, crafts & cultural practices',
      color: 'text-blue-700'
    },
    {
      title: 'Spiritual',
      description: '40+ important temples, pilgrimage centres & shrines',
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
              South
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
            Karnataka
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-2xl md:text-3xl font-light text-blue-700 text-center italic mb-16"
          >
            Where Heritage Meets Horizon
          </motion.p>

          {/* Description - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mb-20"
          >
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left mb-6">
              Karnataka is a land where time moves gently through ancient temples, coffee covered hills, and 
              coastlines that catch the first light. From the cultural wonders of Hampi and Belur to the green calm of 
              Coorg and the energy of Bengaluru, the state carries both depth and dynamism.
            </p>
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left">
              Here, tradition is not performance; it's lived. Innovation, and in every journey feels like a conversation 
              between the past and the present.
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
                "col-span-6 row-span-2", // big hero left - hillside town
                "col-span-3 row-span-2",
                "col-span-3 row-span-2",

                "col-span-3 row-span-2",
                "col-span-6 row-span-2", // wide middle - coastal road
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
                    alt={`Karnataka ${index + 1}`}
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
                        Karnataka
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

export default Karnataka;