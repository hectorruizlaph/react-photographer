import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Work from "../Components/Work/Work";
import Albums from "../Components/Albums/Albums"

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Work />
      <Albums />
    </div>
  );
}

export default Home;
