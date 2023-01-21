import axios from "axios";

const axiosService = axios.create({baseURL:'https://jsonplaceholder.typicode.com'})
const axiosSpace = axios.create({baseURL:'https://api.spacexdata.com/v4'})

export {axiosService, axiosSpace}