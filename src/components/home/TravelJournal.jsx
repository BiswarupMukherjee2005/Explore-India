import { motion } from 'framer-motion';

const TravelJournal = () => {
  const badges = [
    { id: 1, name: 'Jammu & Kashmir', unlocked: true },
    { id: 2, name: 'Odisha', unlocked: false },
    { id: 3, name: 'Gujarat', unlocked: false },
    { id: 4, name: 'West Bengal', unlocked: false },
    { id: 5, name: 'Assam', unlocked: false },
    { id: 6, name: 'Karnataka', unlocked: false },
    { id: 7, name: 'Haryana', unlocked: false },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-4 tracking-tight">
            Travel Journal
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-24 bg-blue-700"></div>
            <span className="font-sans text-sm text-charcoal uppercase tracking-wider">
              For Every Bucket List
            </span>
            <div className="h-px w-24 bg-blue-700"></div>
          </div>
        </motion.div>

        {/* Journal Image and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Journal Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-150 h-100">
              {/* Placeholder for journal image */}
              <img
                    src="/images/journal/journal-book.png"
                    alt="Travel Journal"
                    className="w-full h-full object-cover rounded-lg shadow-elegant"
                />
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="font-body text-lg text-charcoal/80 leading-relaxed text-center lg:text-left">
              When you plan and complete a trip through Explore India, you earn a state badge, 
              a small reminder of the places you've walked, the stories you've lived, and the 
              memories you've carried back.
            </p>
          </div>
        </motion.div>

        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px flex-1 max-w-xs bg-blue-700"></div>
              <span className="font-sans text-sm text-charcoal uppercase tracking-wider">
                Unlock Your Badges For Your Journal
              </span>
              <div className="h-px flex-1 max-w-xs bg-blue-700"></div>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Badge Circle */}
                <div className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                  badge.unlocked 
                    ? 'bg-gradient-to-br from-gold to-ochre shadow-lg' 
                    : 'bg-gray-200 opacity-60'
                }`}>
                  {/* Laurel wreath decoration */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Left laurel */}
                      <path
                        d="M 20 50 Q 15 40, 20 30 Q 18 35, 20 40 Q 18 45, 20 50"
                        fill={badge.unlocked ? '#C9A961' : '#9CA3AF'}
                        opacity="0.6"
                      />
                      {/* Right laurel */}
                      <path
                        d="M 80 50 Q 85 40, 80 30 Q 82 35, 80 40 Q 82 45, 80 50"
                        fill={badge.unlocked ? '#C9A961' : '#9CA3AF'}
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                  
                  {/* Badge content */}
                  {badge.unlocked ? (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                </div>

                {/* Badge Name */}
                <p className={`font-sans text-sm text-center ${
                  badge.unlocked ? 'text-charcoal font-medium' : 'text-charcoal/50'
                }`}>
                  {badge.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelJournal;