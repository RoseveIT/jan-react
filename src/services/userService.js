import {axiosService, axiosSpace} from "./axiosService";

const userService = {
    getPosts:()=> axiosService.get('/posts'),
    getUsers:()=> axiosService.get('/users'),
    getComments:()=> axiosService.get('/comments'),
    // getPostIdUser:(userId)=> axiosService.get(`/posts/?userId=${userId}`),
    getByUserId:(userId)=> axiosService.get(`/posts`, {params:{userId:userId}}),
}

const shipService ={
    getShips:()=> axiosSpace.get('/launches')
}

export {userService, shipService}