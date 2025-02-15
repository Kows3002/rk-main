import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Listing from './components/Listing';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
