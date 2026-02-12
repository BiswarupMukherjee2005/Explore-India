import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="space-y-12">
      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-md mb-6 text-charcoal">Our Mission</h2>
        <p className="body-lg text-charcoal/80 leading-relaxed">
          Explore India is dedicated to presenting the rich tapestry of India's cultural heritage through 
          thoughtful digital storytelling. We believe that every state, every tradition, and every story 
          deserves to be told with depth, respect, and authenticity. Our platform serves as a digital 
          gateway to understanding the incredible diversity that defines India.
        </p>
      </motion.div>

      <div className="divider"></div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="heading-md mb-6 text-charcoal">Why Explore India?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-saffron/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-saffron">✦</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Cultural Depth</h3>
                <p className="body-md text-charcoal/70">
                  Each state is presented as a unique cultural entity with its own traditions, festivals, and heritage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green">✦</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Interactive Experience</h3>
                <p className="body-md text-charcoal/70">
                  Navigate through an interactive map or browse by regions to discover India's diversity.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-terracotta">✦</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Visual Storytelling</h3>
                <p className="body-md text-charcoal/70">
                  Elegant design meets cultural narratives to create an immersive exploration experience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gold">✦</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Educational Resource</h3>
                <p className="body-md text-charcoal/70">
                  Learn about India's festivals, cuisine, languages, and traditions in an accessible format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="divider"></div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-br from-saffron/5 to-green/5 p-12 border border-charcoal/10"
      >
        <h2 className="heading-md mb-6 text-charcoal text-center">Unity in Diversity</h2>
        <p className="body-lg text-charcoal/80 text-center max-w-3xl mx-auto leading-relaxed">
          India's strength lies in its diversity - from the snow-capped Himalayas to tropical beaches, 
          from ancient temples to modern cities, from countless languages to myriad traditions. 
          Explore India celebrates this beautiful mosaic, helping you discover the stories, 
          cultures, and heritage that make each region unique while appreciating the threads that bind us together.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSection;
