import {axiosInstance} from "./axiosService";
import {urls} from "../config";

const userService = {
    getAll:()=>axiosInstance.get(urls.users)
}

export {userService}