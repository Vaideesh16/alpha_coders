import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Contact } from './components/Contact';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './components/About';
import Footer from './components/Footer';
import Panal from './components/Panal';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/panal' element={<Panal/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
