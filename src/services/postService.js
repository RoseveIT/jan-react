import {axiosInstance} from "./axiosService";
import {urls} from "../config";

const postService = {
    getAll:()=>axiosInstance.get(urls.posts)
}

export {postService}