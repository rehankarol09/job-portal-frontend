import React, { useEffect, useState } from "react";
import { getJob } from "./util";

const job = () => {
  const [job, setJobs] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJob();
        setJobs(response);
      } catch (err) {
        setError("Something went wrong");
      }
    };

    fetchJobs();
  }, []);

  return <div>Job Page </div>;
};

export default job;
