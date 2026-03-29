
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import Cities from './pages/Cities/Cities';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Explore from './pages/Explore/Explore'; 
import Booking from './pages/Booking/Booking';
import ExploreDetails from './pages/Explore/Explore';
import Planning from './pages/Planning/Planning';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about-us' element={<About />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='cities' element={<Cities />} />
      <Route path='booking' element={<Booking />} />
      <Route path='explore' element={<Explore />} />
      <Route path='explore-details' element={<ExploreDetails />} />
      <Route path='planning' element={<Planning />} />
    </Routes> 
    <Footer /> 
    </>
  );
}

export default App;
