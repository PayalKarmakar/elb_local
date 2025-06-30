import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api",
});

//SERVER
// const customFetch = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL + "/api",
//   // withCredentials: true, // Add this if your backend uses cookies
// });

export default customFetch;
