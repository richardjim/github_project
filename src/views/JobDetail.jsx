import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/navbar";

const JobDetail = () => {
  const {id} = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const res = await fetch(
      `https://api.github.com/repos/richardjim/repo/${id}`
    );
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <Navbar />
      {name}
      <main className="text-gray-400 bg-gray-900 body-font">Job {id}Detail {name}</main>
    </>
  );
};

export default JobDetail;
