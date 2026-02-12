import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote Icon */}
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-gold opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
          </div>

          {/* Quote */}
          <blockquote className="space-y-8">
            <p className="text-3xl lg:text-5xl font-display font-light text-cream leading-relaxed italic">
              "India is the cradle of the human race, the birthplace of human speech, 
              the mother of history, the grandmother of legend, and the great grandmother of tradition."
            </p>
            <footer className="text-lg font-sans text-gold tracking-wide">
              — Mark Twain
            </footer>
          </blockquote>

          <div className="divider mx-auto mt-12"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
