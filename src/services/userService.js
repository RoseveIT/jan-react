import {axiosService, axiosSpace} from "./axiosService";

const userService = {
    getPosts:()=> axiosService.get('/posts'),
    getUsers:()=> axiosService.get('/users'),
    getComments:()=> axiosService.get('/comments'),
    getPostIdUser:(id)=> axiosService.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
}

const shipService ={
    getShips:()=> axiosSpace.get('/launches')
}

export {userService, shipService}