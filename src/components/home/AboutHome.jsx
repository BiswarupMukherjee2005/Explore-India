import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AboutHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // horizontal moving strip images
  const slides = [
    '/images/slideshow/slide1.jpeg',
    '/images/slideshow/slide2.jpeg',
    '/images/slideshow/slide3.jpeg',
    '/images/slideshow/slide4.jpeg',
    '/images/slideshow/slide5.jpeg',
    '/images/slideshow/slide6.jpeg',
  ];

  // optional slow content fade timing sync (not the strip)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="bg-cream overflow-hidden">
      {/* ───────────── Top Horizontal Moving Gallery ───────────── */}
      <div className="relative w-full mb-20">
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
        >
          {[...slides, ...slides].map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[420px] h-[180px] md:h-[220px] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt="India travel"
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = 'none')}
              />
            </div>
          ))}
        </motion.div>

        {/* soft gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>

      {/* ───────────── ABOUT CONTENT ───────────── */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-6xl md:text-7xl font-bold text-charcoal tracking-tight">
                About
              </h2>

              <p className="font-body text-lg text-charcoal leading-relaxed">
                India isn't just a place you visit. It's a feeling you carry.
              </p>

              <p className="font-body text-lg text-charcoal leading-relaxed">
                Explore India brings together the stories, traditions, landscapes,
                and cultures that make every state beautifully unique.
              </p>

              <p className="font-body text-lg text-charcoal leading-relaxed">
                From quiet villages to living monuments, from forgotten customs to
                everyday beauty — this is a window into a very large soul.
              </p>

              <p className="font-body text-lg text-charcoal leading-relaxed">
                Because exploration is not about ticking places off a list,
                but understanding where stories come from and why they matter.
              </p>
            </motion.div>

            {/* RIGHT IMAGE CARD */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/slideshow/slide1.jpeg"
                  //alt="India culture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* QUOTE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-20"
          >
            <p className="font-display text-2xl md:text-3xl font-light text-charcoal italic">
              This is our way of celebrating India — slowly, thoughtfully, and with heart.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;