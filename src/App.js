
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Cities from './pages/Cities/Cities';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Explore from './pages/Explore/Explore'; 
import Airport from './pages/infopages/Airport';
import Apps from './pages/infopages/Apps';
import Currency from './pages/infopages/Currency';
import GettoCity from './pages/infopages/GettoCity';
import Online from './pages/infopages/Online';
import Language from './pages/infopages/Language';
import Entry from './pages/infopages/Entry';
import Website from './pages/infopages/Website';
import Activity from './pages/Explore/Activity';
import Planning from './pages/Planning/Planning';
import Account from './pages/Account/Account';
import Gallery from './pages/Gallery/Gallery';
import TripDetails from './pages/Trips/TripDetails';
import ScrollToTop from './components/ScrolltoTop/ScrolltoTop';


// Trip Pages
import NewTrip from './pages/Trips/NewTrip';

// Account Pages
import Login from './components/auth/login';
import Register from './components/auth/register';
import { AuthProvider } from './contexts/authContext';

import Layout from "./Layout"
import BlankLayout from './BlankLayout';

function App() {
  return (
    <AuthProvider>

    <ScrollToTop />

    <Routes>

    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about-us' element={<About />} />
      <Route path='airport' element={<Airport />} />
      <Route path='apps' element={<Apps />} />
      <Route path='currency' element={<Currency />} />
      <Route path='get-to-city' element={<GettoCity />} />
      <Route path='online' element={<Online />} />
      <Route path='language' element={<Language />} />
      <Route path='entry' element={<Entry />} />
      <Route path='website' element={<Website />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='cities' element={<Cities />} />
      <Route path='explore' element={<Explore />} />
      <Route path='/activity/:slug' element={<Activity />} />
      <Route path='planning' element={<Planning />} />
      <Route path='account' element={<Account />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      
      
    </Route>
    
    <Route element={<BlankLayout />}>
      <Route path='new-trip' element={<NewTrip />} />
      <Route path='trip-details/:tripId' element={<TripDetails/>} />
    </Route>
    
    </Routes>
    </AuthProvider>
  );
}

export default App;
