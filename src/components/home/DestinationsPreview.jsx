import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DestinationsPreview = () => {
  const regions = [
    {
      id: 'north-india',
      name: 'North India',
      image: '/images/regions/north-india.jpeg',
      states: [
        { name: 'Jammu And Kashmir', slug: 'jammu-kashmir' },
        { name: 'Himachal Pradesh', slug: 'himachal-pradesh' },
        { name: 'Punjab', slug: 'punjab' },
        { name: 'Uttarakhand', slug: 'uttarakhand' },
        { name: 'Haryana', slug: 'haryana' },
        { name: 'Uttar Pradesh', slug: 'uttar-pradesh' },
        { name: 'Rajasthan', slug: 'rajasthan' },
      ],
    },
    {
      id: 'northeast-india',
      name: 'North East India',
      image: '/images/regions/northeast-india.jpeg',
      states: [
        { name: 'Sikkim', slug: 'sikkim' },
        { name: 'Assam', slug: 'assam' },
        { name: 'Meghalaya', slug: 'meghalaya' },
        { name: 'Arunachal Pradesh', slug: 'arunachal-pradesh' },
        { name: 'Nagaland', slug: 'nagaland' },
        { name: 'Manipur', slug: 'manipur' },
        { name: 'Mizoram', slug: 'mizoram' },
        { name: 'Tripura', slug: 'tripura' },
      ],
    },
    {
      id: 'east-india',
      name: 'East India',
      image: '/images/regions/east-india.jpeg',
      states: [
        { name: 'Jharkhand', slug: 'jharkhand' },
        { name: 'West Bengal', slug: 'west-bengal' },
        { name: 'Odisha', slug: 'odisha' },
        { name: 'Bihar', slug: 'bihar' },
        { name: 'Andaman And Nicobar Islands', slug: 'andaman-nicobar' },
      ],
    },
    {
      id: 'central-india',
      name: 'Central India',
      image: '/images/regions/central-india.jpeg',
      states: [
        { name: 'Madhya Pradesh', slug: 'madhya-pradesh' },
        { name: 'Chhattisgarh', slug: 'chhattisgarh' },
      ],
    },
    {
      id: 'west-india',
      name: 'West India',
      image: '/images/regions/west-india.jpeg',
      states: [
        { name: 'Gujarat', slug: 'gujarat' },
        { name: 'Maharashtra', slug: 'maharashtra' },
        { name: 'Goa', slug: 'goa' },
        { name: 'Lakshadweep', slug: 'lakshadweep' },
      ],
    },
    {
      id: 'south-india',
      name: 'South India',
      image: '/images/regions/south-india.jpeg',
      states: [
        { name: 'Telangana', slug: 'telangana' },
        { name: 'Karnataka', slug: 'karnataka' },
        { name: 'Andhra Pradesh', slug: 'andhra-pradesh' },
        { name: 'Kerala', slug: 'kerala' },
        { name: 'Tamil Nadu', slug: 'tamil-nadu' },
        { name: 'Puducherry', slug: 'puducherry' },
      ],
    },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-[1600px] mx-auto px-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-16 tracking-tight"
        >
          Destinations
        </motion.h2>

        {/* Regions Grid - ONE ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 mb-12">
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex flex-col items-start space-y-4"
            >
              {/* Map */}
              <img
                src={region.image}
                alt={region.name}
                className="w-32 h-auto object-contain"
              />

              {/* Region Name */}
              <h3 className="font-display text-xl font-normal text-blue-700">
                {region.name}
              </h3>

              {/* States - Show first 4 only - Now Clickable */}
              <ul className="space-y-1">
                {region.states.slice(0, 4).map((state, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/state/${state.slug}`}
                      className="font-body text-xs text-charcoal/70 leading-relaxed hover:text-blue-700 hover:underline transition-colors duration-200"
                    >
                      {state.name}
                    </Link>
                  </li>
                ))}
                {region.states.length > 4 && (
                  <li className="font-body text-xs text-charcoal/50 italic">
                    +{region.states.length - 4} more
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/destinations"
            className="inline-block px-10 py-3 border border-charcoal text-charcoal font-sans text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-charcoal hover:text-cream"
          >
            View All Destinations
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsPreview;