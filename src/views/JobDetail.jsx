import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/navbar";

const JobDetail = () => {
  const params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const res = await fetch(
      "https://api.github.com/repos/richardjim/repo/`${params.name}"
    );
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <>
      <Navbar />
      <main className="text-gray-400 bg-gray-900 body-font">JobDetail</main>
    </>
  );
};

export default JobDetail;
