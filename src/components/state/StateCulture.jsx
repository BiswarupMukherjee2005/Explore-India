import { motion } from 'framer-motion';

const StateCulture = ({ state }) => {
  if (!state) return null;

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Culture & Heritage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-md mb-6 text-charcoal">Culture & Heritage</h2>
            <p className="body-lg text-charcoal/80 leading-relaxed">
              {state.culture}
            </p>
          </motion.div>

          <div className="divider mx-auto"></div>

          {/* Cuisine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white p-8 lg:p-12 border border-charcoal/10 shadow-elegant"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl">🍽️</span>
              <h2 className="heading-sm text-charcoal">Traditional Cuisine</h2>
            </div>
            <p className="body-md text-charcoal/70 mb-6">
              Experience the authentic flavors that define {state.name}'s culinary heritage:
            </p>
            <div className="flex flex-wrap gap-3">
              {state.cuisine.split(', ').map((dish, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-saffron/10 to-terracotta/10 border border-saffron/20 rounded-full text-charcoal font-sans text-sm"
                >
                  {dish}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Festivals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 lg:p-12 border border-charcoal/10 shadow-elegant"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl">🎉</span>
              <h2 className="heading-sm text-charcoal">Festivals & Celebrations</h2>
            </div>
            <p className="body-md text-charcoal/70 mb-6">
              Join in the vibrant celebrations that bring {state.name} to life:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {state.festivals.map((festival, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gradient-to-br from-green/5 to-gold/5 border border-green/20 rounded-lg"
                >
                  <p className="font-display text-lg font-semibold text-charcoal">
                    {festival}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Must-Visit Places */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-4xl">📍</span>
              <h2 className="heading-sm text-charcoal">Must-Visit Attractions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {state.attractions.map((attraction, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white border border-charcoal/10 hover:border-saffron/30 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron/20 to-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-saffron font-display font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-1">
                      {attraction}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Travel Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-saffron/5 via-cream to-green/5 p-8 lg:p-12 border border-charcoal/10"
          >
            <h3 className="heading-sm text-charcoal mb-6 text-center">Plan Your Visit</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-sm font-sans text-charcoal/50 uppercase tracking-wide mb-2">
                  Best Time to Visit
                </div>
                <div className="text-2xl font-display font-semibold text-saffron">
                  {state.bestTime}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-sans text-charcoal/50 uppercase tracking-wide mb-2">
                  Languages Spoken
                </div>
                <div className="text-2xl font-display font-semibold text-green">
                  {state.languages.join(', ')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StateCulture;
