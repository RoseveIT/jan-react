import {axiosService, axiosSpace} from "./axiosService";

const userService = {
    getPosts:()=> axiosService.get('/posts'),
    getUsers:()=> axiosService.get('/users'),
    getComments:()=> axiosService.get('/comments'),
    getById:(id)=> axiosService.get(`/users/${id}`),
}

const shipService ={
    getShips:()=> axiosSpace.get('/launches')
}

export {userService, shipService}