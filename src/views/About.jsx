import React from "react";
import Collaboration from "../assets/Code-collaboration.svg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="container m-12 flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-white mt-5">
            Hi, I'm Richard.
            <br />
            Software Engineer at AltSchool.
          </h1>
          <p className="mb-8 sm:text-2xl  mb-4 font-medium  leading-relaxed font-medium">
            I love to build amazing apps.
          </p>
          <div className="flex justify-center mt-10">
            {/* <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Hire Me
            </a> */}
         
              <Link className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" to="/Jobs">See My Past Work</Link>
         
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Code-collaboration"
            src={Collaboration}
          />
        </div>
      </div>
    </section>
  );
}
