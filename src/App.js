import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      {/* <About />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
