import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import WorkLinks from "./components/WorkLinks";

function App() {
  return (
    <>
      <div
        id="page-container"
        className="w-auto h-screen relative overflow-x-hidden scroll-smooth"
      >
        <NavBar />
        <Hero />
        <WorkLinks />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
