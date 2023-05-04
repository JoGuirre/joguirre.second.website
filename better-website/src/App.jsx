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
        className="flex flex-col w-auto h-screen relative overflow-x-hidden scroll-smooth bg-bgcolor text-textcolor"
      >
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
