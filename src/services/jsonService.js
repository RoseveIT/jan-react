import {jsonAxiosService} from "./axiosService";
import {urls} from "../configs";

const jsonService = {
    getUsers:()=>jsonAxiosService.get(urls.users),
    createUser:(newUser)=>jsonAxiosService.post(urls.users, newUser),
    getComments:()=>jsonAxiosService.get(urls.comments),
    createComment:(newComment)=>jsonAxiosService.post(urls.comments, newComment)
}

export {
    jsonService
}