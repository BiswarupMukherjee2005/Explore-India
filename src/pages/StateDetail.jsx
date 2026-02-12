import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import StateHero from '../components/state/StateHero';
import StateCulture from '../components/state/StateCulture';
import statesData from '../data/states.json';
import { motion } from 'framer-motion';

const StateDetail = () => {
  const { stateId } = useParams();
  const state = statesData.states.find(s => s.id === stateId);

  if (!state) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="heading-lg mb-6 text-charcoal">State Not Found</h1>
            <p className="body-lg text-charcoal/70 mb-8">
              The state you're looking for doesn't exist in our database.
            </p>
            <Link to="/destinations" className="btn-primary">
              Back to Destinations
            </Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <StateHero state={state} />
      <StateCulture state={state} />
      
      {/* Navigation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-saffron/5 via-green/5 to-terracotta/5 p-12 border border-charcoal/10 text-center">
              <h3 className="heading-sm mb-6 text-charcoal">
                Continue Exploring
              </h3>
              <p className="body-md text-charcoal/70 mb-8">
                Discover more states and regions across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/destinations" className="btn-secondary">
                  All Destinations
                </Link>
                <Link to="/map" className="btn-primary">
                  Interactive Map
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default StateDetail;
