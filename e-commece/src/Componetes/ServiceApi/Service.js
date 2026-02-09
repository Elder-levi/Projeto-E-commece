import axios from "axios";

const url = axios.create({
baseURL:"http://localhost:9090",

})
export default url;