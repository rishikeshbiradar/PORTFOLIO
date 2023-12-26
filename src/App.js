import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Project />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div >

      <Routes>
        <Route path="#home" element={<Home />} />
        <Route path="#about" element={<About />} />
        <Route path="#project" element={<Project />} />
        <Route path="#skills" element={<Skills />} />
        <Route path="#experience" element={<Experience />} />
        <Route path="#contact" element={<Contact />} />
        <Route path="#footer" element={<Footer />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
