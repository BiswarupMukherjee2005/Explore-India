// import PageWrapper from '../components/layout/PageWrapper';
// import Hero from '../components/home/Hero';

// const Home = () => {
//   return (
//     <PageWrapper>
//       <Hero />
//     </PageWrapper>
//   );
// };

// export default Home;

import PageWrapper from '../components/layout/PageWrapper';
import Hero from '../components/home/Hero';
import AboutHome from '../components/home/AboutHome';
import TravelJournal from '../components/home/TravelJournal';
import DestinationsPreview from '../components/home/DestinationsPreview';

const Home = () => {
  return (
    <PageWrapper>
      {/* Hero Section with Video Background */}
      <Hero />

      <div className="mt-16 lg:mt-24">
        <AboutHome />
      </div>
      
      {/* Travel Journal Section with Badges */}
      <TravelJournal />
      
      {/* Destinations Preview */}
      <DestinationsPreview />
    </PageWrapper>
  );
};

export default Home;