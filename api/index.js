import axios from "axios";

export const getTweets = async () => {
  try {
    const response = await axios.get("localhost:3000/tweets");
    return response.data;
  } catch (error) {
    return error;
  }
};
