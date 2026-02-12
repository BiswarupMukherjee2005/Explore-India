import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <PageWrapper>

      {/* FIXED BACKGROUND MAP */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/images/about/india-map.webp"
          alt="Vintage map of India"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Cream overlay */}
        <div className="absolute inset-0 bg-cream/30" />
      </div>

      {/* MAIN CONTENT */}
      <section className="pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* PAGE HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl md:text-8xl lg:text-9xl font-light text-grey mb-24 tracking-tight"
          >
            About Explore India
          </motion.h1>

          {/* SECTION 1 - About Explore India */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            {/* Title */}
            {/* <h2 className="font-display text-4xl md:text-5xl font-dark text-grey mb-12">
              About Explore India
            </h2> */}

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* TEXT */}
              <div className="bg-cream/90 backdrop-blur-md rounded-2xl p-12 shadow-xl space-y-6">
                <p className="font-display text-2xl md:text-3xl font-light text-charcoal leading-relaxed">
                  India isn't just a place you visit. It's a feeling you carry.
                </p>

                <p className="font-body text-lg text-charcoal/80 leading-relaxed">
                  Explore India brings together the stories, traditions, landscapes, and cultures that make 
                  every state unique. From the Himalayas to coastal villages, from ancient temples to bustling 
                  markets—each corner has something to say.
                </p>

                <p className="font-body text-lg text-charcoal/80 leading-relaxed">
                  This isn't about ticking places off a list. It's about understanding where stories come from 
                  and why they matter. About the quiet moments between destinations, the conversations that change 
                  perspectives, and the experiences that stay with you.
                </p>

                <p className="font-display text-xl font-light italic text-blue-700">
                  Explore India is an invitation to look deeper.
                </p>
              </div>

              {/* IMAGES GRID WITH EFFECTS */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl h-64 group">
                  <img
                    src="/images/about/img-1.jpeg"
                    // alt="Himalayan monastery"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-48 group">
                  <img
                    src="/images/about/img-2.jpeg"
                   // alt="Ancient temple"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-48 group">
                  <img
                    src="/images/about/img-3.jpeg"
                   // alt="Evening bazaar"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTION 2 - Culture Not Just Tourism */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* IMAGES GRID - Left Side WITH EFFECTS */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-xl h-56 group">
                  <img
                    src="/images/about/img-4.jpeg"
                    //alt="Traditional craft"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-56 group">
                  <img
                    src="/images/about/img-5.jpeg"
                    //alt="Festival celebration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl h-64 group">
                  <img
                    src="/images/about/img-6.jpeg"
                    //alt="Local lifestyle"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* TEXT - Right Side */}
              <div className="bg-cream/90 backdrop-blur-md rounded-2xl p-12 shadow-xl space-y-6">
                <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-8">
                  Beyond the Tourist Trail
                </h2>

                <p className="font-body text-lg text-charcoal/80 leading-relaxed">
                  Every state is more than its famous landmarks. Here's what we focus on:
                </p>

                <ul className="space-y-4 font-body text-lg text-charcoal/80 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-3 mt-1">•</span>
                    <span>Traditions that live in everyday rituals and crafts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-3 mt-1">•</span>
                    <span>Festivals that bring communities together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-3 mt-1">•</span>
                    <span>Local life shaped by geography and history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-3 mt-1">•</span>
                    <span>Stories passed down through art and music</span>
                  </li>
                </ul>

                <p className="font-body text-lg text-charcoal/80 leading-relaxed">
                  India lives in morning prayers and street food. In folk songs and handwritten letters. 
                  In the way people talk about home.
                </p>
              </div>
            </div>
          </motion.div>

          {/* SECTION 3 - A Country of Many Worlds */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* TEXT - Left Side */}
              <div className="bg-cream/90 backdrop-blur-md rounded-2xl p-12 shadow-xl space-y-6">
                <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-8">
                  A Country of Many Worlds
                </h2>

                <p className="font-body text-lg text-charcoal/80 leading-relaxed">
                  India holds extraordinary diversity within a single nation.
                </p>

                <p className="font-body text-lg text-charcoal/80 leading-relaxed">
                  Every state feels like stepping into a different universe — with its own language, cuisine, 
                  architecture, clothing, rhythm of life, and worldview.
                </p>

                <p className="font-display text-xl font-light italic text-blue-700">
                  Diversity here is not contrast. It is coexistence.
                </p>

                <p className="font-body text-lg text-charcoal/80 leading-relaxed">
                  Hundreds of communities, beliefs, and traditions live side-by-side, creating a cultural landscape 
                  that is constantly evolving while remaining deeply rooted in the past.
                </p>

                <p className="font-body text-lg text-charcoal/80 leading-relaxed">
                  To explore India is to witness unity without sameness.
                </p>
              </div>

              {/* IMAGES GRID - Right Side */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl h-64">
                  <img
                    src="/images/about/img-7.jpeg"
                    //alt="Cultural diversity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                  <img
                    src="/images/about/img-8.jpeg"
                    //alt="Traditional clothing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-48">
                  <img
                    src="/images/about/img-9.jpeg"
                    //alt="Architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl h-48">
                  <img
                    src="/images/about/img-10.jpeg"
                  //  alt="Cultural practices"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          



          {/* SECTION 6 - The Heart of This Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-blue-700/10 to-cream/90 backdrop-blur-md rounded-2xl p-16 shadow-xl text-center max-w-4xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-8">
                The Heart of This Project
              </h2>

              <p className="font-body text-xl text-charcoal/80 leading-relaxed mb-6">
                Explore India is not just a website. It is a quiet archive of belonging.
              </p>

              <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
                Built with patience, curiosity, and respect for cultural depth, this space hopes to let 
                people experience India thoughtfully rather than quickly.
              </p>

              <p className="font-display text-2xl font-light italic text-blue-700 mb-4">
                Because some journeys are not meant to be rushed.
              </p>

              <p className="font-display text-3xl font-light italic text-charcoal">
                They are meant to be felt.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
