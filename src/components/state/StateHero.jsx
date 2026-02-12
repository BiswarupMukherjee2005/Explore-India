import { motion } from 'framer-motion';

const StateHero = ({ state }) => {
  if (!state) return null;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-ochre/30 to-saffron/20 grain"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-saffron/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-green/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-white/50 backdrop-blur-sm border border-charcoal/10 rounded-full text-saffron font-sans text-sm uppercase tracking-widest font-medium mb-6"
          >
            {state.tagline}
          </motion.span>

          {/* State Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-xl mb-8 text-charcoal"
          >
            {state.name}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="body-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed"
          >
            {state.description}
          </motion.p>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-sm font-sans text-charcoal/50 uppercase tracking-wide mb-2">Capital</div>
              <div className="text-xl font-display font-semibold text-charcoal">{state.capital}</div>
            </div>
            <div className="w-px h-12 bg-charcoal/20"></div>
            <div className="text-center">
              <div className="text-sm font-sans text-charcoal/50 uppercase tracking-wide mb-2">Best Time</div>
              <div className="text-xl font-display font-semibold text-charcoal">{state.bestTime}</div>
            </div>
            <div className="w-px h-12 bg-charcoal/20"></div>
            <div className="text-center">
              <div className="text-sm font-sans text-charcoal/50 uppercase tracking-wide mb-2">Languages</div>
              <div className="text-xl font-display font-semibold text-charcoal">
                {state.languages.join(', ')}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StateHero;
