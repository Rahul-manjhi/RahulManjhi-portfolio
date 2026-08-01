import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
