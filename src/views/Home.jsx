import React from "react";
import Navbar from "../component/navbar";
import Jobs from "../component/jobs";
import About from "./About";
// import Projects from "./project";
import Contact from "./contact";
import Footer from "../component/footer";
import SEO from "../component/seo";

const Home = () => {
  return (
    <>
      <SEO
        title="Github Portfolio"
        description="List of Github Repositories"
        name="AltSchool Africa Test'
        type='article."
      />
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Jobs />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
