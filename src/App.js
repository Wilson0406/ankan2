import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './Components/wiliam/Header';
import Navbar from './Components/Navbar';
import India from './pages/India';
import Sports from './pages/Sports';
import ScienceAndTech from './pages/ScienceAndTech';
import Economy from './pages/Economy';
import Politics from './pages/Politics';
import International from './pages/International';
import Governance from './pages/Governance';
import Footer from './Components/paros/components/Footer'
import Error from './pages/Error';
import MobileNavbar from './Components/MobileNavbar';

function App() {


  return (
    <>
      {window.screen.width>=450&&<Header></Header>}
      <Router>
      {window.screen.width >= 450 ?<Navbar></Navbar>:<MobileNavbar></MobileNavbar>}
      
        <Routes>
          <Route exact path='/' element={<India />} />
          <Route exact path='/international' element={<International />} />
          <Route exact path='/political' element={<Politics />} />
          <Route exact path='/science' element={<ScienceAndTech />} />
          <Route exact path='/economy' element={<Economy />} />
          <Route exact path='/governance' element={<Governance />} />
          <Route exact path='/sports' element={<Sports />} />
          <Route exact path='/videos'  />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      <Footer></Footer>







    </>


  );
}

export default App;
