import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes></Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
