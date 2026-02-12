import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RegionCard = ({ region, index, states }) => {
  const regionStates = states.filter(state => state.region === region.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white border border-charcoal/10 p-8 transition-all duration-500 hover:shadow-elegant hover:border-saffron/30">
        <div className="flex items-start justify-between mb-6">
          <h3 className="heading-sm text-charcoal group-hover:text-saffron transition-colors">
            {region.name}
          </h3>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron/20 to-green/20 flex items-center justify-center">
            <span className="text-2xl">🗺️</span>
          </div>
        </div>

        <p className="body-md text-charcoal/70 mb-6 italic">
          {region.description}
        </p>

        <div className="mb-6">
          <p className="text-sm font-sans uppercase tracking-wide text-charcoal/50 mb-3">
            Highlights
          </p>
          <p className="text-base font-body text-charcoal/80">
            {region.highlights}
          </p>
        </div>

        <div className="border-t border-charcoal/10 pt-6">
          <p className="text-sm font-sans uppercase tracking-wide text-charcoal/50 mb-4">
            States ({regionStates.length})
          </p>
          <div className="grid grid-cols-2 gap-3">
            {regionStates.map((state) => (
              <Link
                key={state.id}
                to={`/state/${state.id}`}
                className="text-sm font-sans text-charcoal/70 hover:text-saffron transition-colors flex items-center group/link"
              >
                <span className="w-1.5 h-1.5 bg-saffron rounded-full mr-2 transform scale-0 group-hover/link:scale-100 transition-transform"></span>
                {state.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RegionCard;
