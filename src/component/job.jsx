import React from "react";

const Job = ({ name, id, button, description, title, email }) => {
  return (
    <li>
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg text-white-400 bg-gray-900 body-font   border-4 border-gray-800">
       <span className="flex justify-center"> {description} </span>
          <h5 className="text-gray-500 text-xl leading-tight font-medium mb-2">
            {name} <br/>
        <strong>{email}</strong>
          </h5>
         
          <p className="text-green text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            {id} 
           {title} 
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            // onClick={() => getProject()}
          >
            {button}
          </button>
        </div>
      </div>
    </li>
  );
};

export default Job;
