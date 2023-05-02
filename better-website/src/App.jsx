import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div
        id="page-container"
        className="w-auto h-screen relative overflow-x-hidden scroll-smooth"
      >
        <NavBar />
        <Hero />
        <div className="bg-gradient-to-b from-gray-600 to-slate-600">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
