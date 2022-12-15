
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
