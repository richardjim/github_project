import React from "react";
import About from "./About";
import Contact from "./contact";
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
        <About />
        <Contact />
      </main>
    </>
  );
};

export default Home;
