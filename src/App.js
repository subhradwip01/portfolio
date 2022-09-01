import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import {useState,useEffect} from "react"
function App() {
  const [mobileView,setMobileView] = useState(false);

  useEffect(() => {
    if(window.innerWidth<=768){
      setMobileView(true)
    }
  }, [])

  window.addEventListener("resize", ()=>{
    if(window.innerWidth<=768){
      setMobileView(true)
    }
  });
  


  return (
    <div className="App">
      {mobileView && <MobileMenu/>}
      <Navbar mobileView={mobileView}/>
      <Header mobileView={mobileView}/>
      <About/>
      <TechStack/>
      <Skills/>
      <Work/>
      <Projects/>
      <Footer mobileView={mobileView}/>
    </div>
  );
}

export default App;
