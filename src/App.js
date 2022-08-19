import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <TechStack/>
      <Skills/>
      <Work/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
