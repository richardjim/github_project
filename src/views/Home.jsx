import React from "react";
import Navbar from "../component/navbar";
import Jobs from "../component/jobs";
import About from "./About";
// import Projects from "./project";
import Contact from "./contact";

const Home = () => {
  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Jobs />
        {/* <Projects /> */}
        <Contact />
      </main>
    </>
  );
};

export default Home;
