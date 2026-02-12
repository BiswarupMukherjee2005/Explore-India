import { motion } from 'framer-motion';
import { useState } from 'react';

const JammuKashmir = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Gallery images - replace with your actual images
  const galleryImages = [
    '/images/states/jk/jk-1.jpg',
    '/images/states/jk/jk-2.jpg',
    '/images/states/jk/jk-3.jpg',
    '/images/states/jk/jk-4.jpg',
    '/images/states/jk/jk-5.jpg',
    '/images/states/jk/jk-6.jpg',
    '/images/states/jk/jk-7.jpg',
    '/images/states/jk/jk-8.jpg',
    '/images/states/jk/jk-9.jpg',
    '/images/states/jk/jk-10.jpg',
    '/images/states/jk/jk-11.jpg',
//    '/images/states/jk/jk-12.jpg',
  ];

  const highlights = [
    {
      title: 'Wildlife',
      description: 'Wildlife sanctuaries',
      color: 'text-blue-700'
    },
    {
      title: 'Cuisines & Flavours',
      description: 'One popular regional foods',
      color: 'text-blue-700'
    },
    {
      title: 'Tourist Spots',
      description: 'Major attractions',
      color: 'text-blue-700'
    },
    {
      title: 'Local Favourites',
      description: 'Rich valley. Recognised cultural / lifestyle experiences',
      color: 'text-blue-700'
    },
    {
      title: 'Spiritual',
      description: 'Religious shades',
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
            Jammu And Kashmir
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-2xl md:text-3xl font-light text-charcoal/70 text-center italic mb-12"
          >
            Switzerland of India
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="font-body text-lg text-charcoal/80 leading-relaxed text-center">
              Experience the enchanting allure of Jammu and Kashmir, where each season unfurls its own 
              magnificent spectacle. While the famed destinations of Gulmarg, Pahalgam, and Srinagar boast 
              their charm, the true essence of Kashmir resides in the tranquil embrace of its lesser-known treasures. 
              Beyond the clamour of tourist hotspots, lie the untamed landscapes that can make a special place in any 
              traveller's heart. Explore the north of the capital to discover the breathtaking Gurez Valley, the serene 
              Bangus Valley, and the pristine river Kishanganga.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-20"
          >
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className={`font-display text-xl font-semibold ${item.color} mb-2`}>
                  {item.title}
                </h3>
                <p className="font-body text-sm text-charcoal/70">
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
                    alt={`Jammu Kashmir ${index + 1}`}
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
                        Jammu & Kashmir
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

export default JammuKashmir;


