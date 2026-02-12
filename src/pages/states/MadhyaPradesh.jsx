import { motion } from 'framer-motion';
import { useState } from 'react';

const MadhyaPradesh = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const galleryImages = [
    '/images/states/madhya-pradesh/mp-1.jpeg',
    '/images/states/madhya-pradesh/mp-2.jpeg',
    '/images/states/madhya-pradesh/mp-3.jpeg',
    '/images/states/madhya-pradesh/mp-4.jpeg',
    '/images/states/madhya-pradesh/mp-5.jpeg',
    '/images/states/madhya-pradesh/mp-6.jpeg',
    '/images/states/madhya-pradesh/mp-7.jpeg',
    '/images/states/madhya-pradesh/mp-8.jpeg',
    '/images/states/madhya-pradesh/mp-9.jpeg',
    '/images/states/madhya-pradesh/mp-10.jpeg',
    '/images/states/madhya-pradesh/mp-11.jpeg',
  //  '/images/states/madhya-pradesh/mp-12.jpeg',
  ];

  const highlights = [
    {
      title: 'Wildlife',
      description: '25+ wildlife sanctuaries & national parks',
      color: 'text-blue-700'
    },
    {
      title: 'Cuisines & Flavours',
      description: '25+ traditional regional dishes',
      color: 'text-blue-700'
    },
    {
      title: 'Tourist Spots',
      description: '50+ major cultural & natural attractions',
      color: 'text-blue-700'
    },
    {
      title: 'Local Favourites',
      description: '20+ folk arts, tribal traditions & festivals',
      color: 'text-blue-700'
    },
    {
      title: 'Spiritual',
      description: '30+ significant temples, pilgrimage towns & sacred sites',
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
              Central
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
            Madhya Pradesh
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-2xl md:text-3xl font-light text-blue-700 text-center italic mb-16"
          >
            The Heart That Holds Many Stories
          </motion.p>

          {/* Description - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mb-20"
          >
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left mb-4">
              At the centre of India lies Madhya Pradesh, a land where forests stretch wide, rivers carve history into 
              stone, and time lingers in ancient cities. From the temples of Khajuraho and the stupas of Sanchi to 
              the wild calm of Kanha and Bandhavgarh, the state carries both heritage and wilderness in equal 
              measure.
            </p>
            <p className="font-body text-base text-charcoal/80 leading-relaxed text-left">
              Here, stories aren't rushed. They live in carved pillars, tribal traditions, and the rhythm of village life. 
              Madhya Pradesh invites you not just to see, but to stay, listen, and understand.
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
                    alt={`Madhya Pradesh ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {hoveredImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4"
                    >
                      <p className="text-white font-sans text-sm tracking-wide">
                        Madhya Pradesh
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

export default MadhyaPradesh;