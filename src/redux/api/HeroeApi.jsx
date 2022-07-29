import axios from "axios";

export default axios.create({
  baseURL: "https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api",
  method: "get",
  timeout: 4000, // 4 seconds timeout
});
