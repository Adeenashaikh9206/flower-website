import Image from "next/image";
import Header from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Icons from "./components/icons";
import Flower from "./components/flower";
import Contact from "./components/contact";
import Foter from "./components/footer";

export default function home () {
  return(
    <div>
    
      <Hero/>
       <About/>
      <Icons/>
      <Flower/>
      <Contact/>
      <Foter/> 
    </div>
  )
}