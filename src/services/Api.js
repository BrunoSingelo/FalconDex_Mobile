//axios
import axios from "axios";

const FalconDex = axios.create({
  baseURL: "http://192.168.1.109:3000/api/",
  timeout: 10000,
});

export default FalconDex;
