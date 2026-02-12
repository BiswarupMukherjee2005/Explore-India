import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Destinations from '../pages/Destinations';
import Contact from '../pages/Contact';
import JammuKashmir from '../pages/states/JammuKashmir';
import HimachalPradesh from '../pages/states/HimachalPradesh';
import Odisha from '../pages/states/Odisha';
import WestBengal from '../pages/states/WestBengal';
import Gujarat from '../pages/states/Gujarat';
import Maharashtra from '../pages/states/Maharashtra';
import Karnataka from '../pages/states/Karnataka';
import TamilNadu from '../pages/states/TamilNadu';
import Assam from '../pages/states/Assam';
import Mizoram from '../pages/states/Mizoram';
import MadhyaPradesh from '../pages/states/MadhyaPradesh';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* State Pages - */}
      <Route path="/state/jammu-kashmir" element={<JammuKashmir />} />
      <Route path="/state/himachal-pradesh" element={<HimachalPradesh />} />
      <Route path="/state/odisha" element={<Odisha />} />
      <Route path="/state/west-bengal" element={<WestBengal />} />
      <Route path="/state/gujarat" element={<Gujarat />} />
      <Route path="/state/maharashtra" element={<Maharashtra />} />
      <Route path="/state/karnataka" element={<Karnataka />} />
      <Route path="/state/tamil-nadu" element={<TamilNadu />} />
      <Route path="/state/assam" element={<Assam />} />
      <Route path="/state/mizoram" element={<Mizoram />} />
      <Route path="/state/madhya-pradesh" element={<MadhyaPradesh />} />
    </Routes>
  );
};

export default AppRoutes;