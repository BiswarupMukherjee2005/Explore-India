import { motion } from 'framer-motion';
import { useState } from 'react';

const HimachalPradesh = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const galleryImages = [
    '/images/states/himachal-pradesh/hp-1.jpeg',
    '/images/states/himachal-pradesh/hp-2.jpeg',
    '/images/states/himachal-pradesh/hp-3.jpeg',
    '/images/states/himachal-pradesh/hp-4.jpeg',
    '/images/states/himachal-pradesh/hp-5.jpeg',
    '/images/states/himachal-pradesh/hp-6.jpeg',
    '/images/states/himachal-pradesh/hp-7.jpeg',
    '/images/states/himachal-pradesh/hp-8.jpeg',
    '/images/states/himachal-pradesh/hp-9.jpeg',
    '/images/states/himachal-pradesh/hp-10.jpeg',
    '/images/states/himachal-pradesh/hp-11.jpeg',
//'/images/states/himachal-pradesh/hp-12.jpeg',
  ];

  const highlights = [
    {
      title: 'Wildlife',
      description: '30+ wildlife sanctuaries & national parks',
      color: 'text-blue-700'
    },
    {
      title: 'Cuisines & Flavours',
      description: '20+ traditional Himachali dishes',
      color: 'text-blue-700'
    },
    {
      title: 'Tourist Spots',
      description: '50+ scenic and cultural attractions',
      color: 'text-blue-700'
    },
    {
      title: 'Local Favourites',
      description: 'Hi-So tea traditions, crafts & festivals',
      color: 'text-blue-700'
    },
    {
      title: 'Spiritual',
      description: '25+ revered temples, monasteries & sacred sites',
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
              North
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
            Himachal Pradesh
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-2xl md:text-3xl font-light text-blue-700 text-center italic mb-16"
          >
            Where the Mountains Whisper
          </motion.p>

          {/* Description - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mb-20"
          >
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left mb-6">
              Discover Himachal Pradesh, a land where snow-capped peaks, pine forests, and winding rivers shape a 
              life lived close to nature. From the calm monasteries of Spiti to the lively streets of Shimla and Manali, 
              Himachal moves at its own gentle pace.
            </p>
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left">
              Beyond the popular hill stations lie villages wrapped in mist, trails that lead to quiet reflections, and 
              traditions preserved through centuries. Here, travel isn't rushed; it's felt, one mountain breeze at a time.
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
                    alt={`Himachal Pradesh ${index + 1}`}
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
                        Himachal Pradesh
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

export default HimachalPradesh;