import React from "react";
import { useEffect, useState } from "react";
import { CodeIcon } from "@heroicons/react/solid";

const jobs = () => {
  const [lists, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch("https://api.github.com/users/richardjim/repos");
    const data = await res.json();
    console.log(data);
    setList(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="m-5 ">
        <div className="text-center lg:px-20">
          <div className="flex flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo facilis repellat ab cupiditate alias vero aliquid
              obcaecati quisquam fuga dolore.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ">
            {lists.map((list, _id) => (
              <li  key={_id}>
                <div class="flex justify-center">
                  <div className="block p-6 rounded-lg shadow-lg text-white-400 bg-gray-900 body-font   border-4 border-gray-800">
                    <h5 className="text-gray-500 text-xl leading-tight font-medium mb-2">
                      {list.name}
                    </h5>
                    <p className="text-green text-base mb-4">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      {list.avatar_url}
                    </p>
                    <button
                      type="button"
                      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      See More...
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default jobs;
