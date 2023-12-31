import axios from "axios";
const api_url = "https://youtube-v31.p.rapidapi.com";

console.log(4,process.env, process.env.REACT_APP_RAPID_API_KEY);

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// try {
// const response = await axios.request(options);
// console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const FetchFromApi = async (url) => {
  try {
    const response = await axios.get(`${api_url}/${url}`,options);
    console.log(26,response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
