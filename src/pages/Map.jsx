import PageWrapper from '../components/layout/PageWrapper';
import IndiaMap from '../components/map/IndiaMap';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-gold/10 to-cream grain"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-6 py-2 bg-terracotta/10 border border-terracotta/30 rounded-full text-terracotta font-sans text-sm uppercase tracking-widest font-medium mb-6">
              Interactive Experience
            </span>
            <h1 className="heading-xl mb-6 text-charcoal">
              Explore India
              <br />
              <span className="text-gradient">Through the Map</span>
            </h1>
            <p className="body-lg text-charcoal/70">
              Click on any state to discover its unique culture, heritage, and traditions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <IndiaMap />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-saffron/10 flex items-center justify-center">
                  <span className="text-3xl">👆</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  Click to Explore
                </h3>
                <p className="body-md text-charcoal/70">
                  Select any state marker to view detailed information
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green/10 flex items-center justify-center">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  Discover Culture
                </h3>
                <p className="body-md text-charcoal/70">
                  Learn about traditions, festivals, and cuisine
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  Plan Your Journey
                </h3>
                <p className="body-md text-charcoal/70">
                  Find attractions and best times to visit
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Map;
