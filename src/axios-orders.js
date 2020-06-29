import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-8dff8.firebaseio.com/",
});

export default instance;
