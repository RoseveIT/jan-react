import axios from "axios";
import {baseJSON, baseURL} from "../configs";

const axiosService = axios.create({baseURL});
const jsonAxiosService = axios.create({baseURL:baseJSON})

export {
    axiosService,
    jsonAxiosService
}
