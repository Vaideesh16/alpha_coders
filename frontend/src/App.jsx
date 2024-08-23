import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import Home  from './components/Home';
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element = {<Login/>}></Route>
          <Route path='/login' element = {<SignUp/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
