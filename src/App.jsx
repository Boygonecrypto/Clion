import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Efficient from "./components/Efficient";
import WhyChooseUs from "./components/WhyChooseUs";
import OurPricing from "./components/OurPricing";
import Frequently from "./components/Frequently";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="hero w-full h-screen max-h-[728px] bg-no-repeat bg-cover bg-center">
        <Nav />
        <Hero />
      </div>
      <Efficient />
      <WhyChooseUs />
      <OurPricing />
      <Frequently />
      <Footer />
    </>
  );
}

export default App;
