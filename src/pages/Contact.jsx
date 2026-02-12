import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';

const slides = [
  '/images/contact/slide-1.jpeg',
  '/images/contact/slide-2.jpeg',
  '/images/contact/slide-3.jpeg',
  '/images/contact/slide-4.jpeg',
  '/images/contact/slide-5.jpeg',
];

export default function Contact() {
  return (
    <PageWrapper>
      <section className="min-h-screen bg-cream pt-28 pb-20 overflow-hidden">
        {/* ───────────── Top Horizontal Slideshow ───────────── */}
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
                />
              </div>
            ))}
          </motion.div>

          {/* soft gradient edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-cream to-transparent" />
        </div>

        {/* ───────────── Heading ───────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h1 className="font-display text-6xl md:text-7xl font-light text-charcoal mb-6">
            Let’s Stay Connected
          </h1>

          <p className="font-body text-lg md:text-xl text-charcoal/70 leading-relaxed">
            Explore India is more than a website — it is a journey of stories,
            landscapes, memories, and emotions. If you wish to collaborate,
            share an experience, suggest a hidden destination, or simply say
            hello, we would love to hear from you.
          </p>
        </motion.div>

        {/* ───────────── Contact Grid ───────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12 px-6"
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-charcoal mb-2">
                Email
              </h2>
              <p className="text-charcoal/70">hello@exploreindia.in</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-charcoal mb-2">
                Collaboration
              </h2>
              <p className="text-charcoal/70">
                Tourism boards, photographers, storytellers, and culture
                enthusiasts are always welcome to collaborate with us in
                celebrating India’s heritage.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-charcoal mb-2">
                Location
              </h2>
              <p className="text-charcoal/70">India · Built with passion</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-charcoal/20 rounded-xl px-4 py-3 bg-white/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-charcoal/40"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-charcoal/20 rounded-xl px-4 py-3 bg-white/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-charcoal/40"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-charcoal/20 rounded-xl px-4 py-3 bg-white/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-charcoal/40"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-charcoal text-white py-3 font-medium tracking-wide hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* ───────────── Closing Thought ───────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-24 text-charcoal/60 italic px-6"
        >
          Every journey begins with a conversation. Let this be ours.
        </motion.p>
      </section>
    </PageWrapper>
  );
}
