import { motion } from 'framer-motion';
import { useState } from 'react';

const Assam = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const galleryImages = [
    '/images/states/assam/assam-1.jpeg',
    '/images/states/assam/assam-2.jpeg',
    '/images/states/assam/assam-3.jpeg',
    '/images/states/assam/assam-4.jpeg',
    '/images/states/assam/assam-5.jpeg',
    '/images/states/assam/assam-6.jpeg',
    '/images/states/assam/assam-7.jpeg',
    '/images/states/assam/assam-8.jpeg',
    '/images/states/assam/assam-9.jpeg',
    '/images/states/assam/assam-10.jpeg',
    '/images/states/assam/assam-11.jpeg',
 //   '/images/states/assam/assam-12.jpeg',
  ];

  const highlights = [
    {
      title: 'Wildlife',
      description: '18+ wildlife sanctuaries',
      color: 'text-blue-700'
    },
    {
      title: 'Cuisines & Flavours',
      description: '30+ traditional regional dishes',
      color: 'text-blue-700'
    },
    {
      title: 'Tourist Spots',
      description: '35+ major attractions',
      color: 'text-blue-700'
    },
    {
      title: 'Local Favourites',
      description: '15-20 cultural, craft, and lifestyle experiences',
      color: 'text-blue-700'
    },
    {
      title: 'Spiritual',
      description: '15+ significant religious and heritage sites',
      color: 'text-blue-700'
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Region Label */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-charcoal"></div>
            <span className="px-4 font-sans text-sm text-charcoal uppercase tracking-wider">
              North East
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
            Assam
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-2xl md:text-3xl font-light text-blue-700 text-center italic mb-16"
          >
            Where the River Writes Stories
          </motion.p>

          {/* Description - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mb-20"
          >
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left mb-4">
              Discover Assam, a land shaped by the gentle strength of the Brahmaputra and the quiet beauty of 
              the Northeast. Wrapped in lush tea gardens, misty hills, and living traditions, Assam offers a slower, 
              deeper kind of travel. From the wildlife-rich plains of Kaziranga to the rhythm of Bihu festivals, every 
              corner carries a story rooted in nature and community.
            </p>
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left">
              Beyond the well-known landmarks lies a world of river islands, ancient monasteries, handwoven silks, 
              and everyday moments that reflect Assam's calm resilience and cultural pride.
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
              const layoutMap = [
                "col-span-6 row-span-2",
                "col-span-3 row-span-2",
                "col-span-3 row-span-2",

                "col-span-3 row-span-2",
                "col-span-6 row-span-2",
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
                  <img
                    src={image}
                    alt={`Assam ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {hoveredImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4"
                    >
                      <p className="text-white font-sans text-sm tracking-wide">
                        Assam
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

export default Assam;