import axios from "axios";
const baseUrl = "http://localhost:8000/api";

export const getJob = async () => {
  try {
    const response = await axios.get(`${baseUrl}/job/`);
    if (response.status === 200) {
      return response.data;
    } else {
      return {
        error: "Something went wrong",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      error: "Something went wrong",
    };
  }
};
