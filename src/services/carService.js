import {axiosService} from "./axiosService";
import {urls} from "../config";

const carService = {
    getAll:()=>{axiosService.get(urls.cars.cars)},
    create:(data)=>{axiosService.post(urls.cars.cars, data)},
    updateById:(id, data)=>{axiosService.put(urls.cars.getById(id), data)},
    deleteByid:(id)=>{axiosService.delete(urls.cars.getById(id))}
}

