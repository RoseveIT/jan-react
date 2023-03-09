import {axiosService} from "./axiosService";
import {urls} from "../configs";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    getByID:(id)=>axiosService.get(`${urls.users}/${id}`)
}

export {
    userService
}