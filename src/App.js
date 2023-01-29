import {Cars, CarsForm, Comments, CommentsForm, Users, UsersForm} from "./components";
import {useEffect, useState} from "react";
import {carService, jsonService} from "./services";


const App = () => {

    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    const [users, setUsers] = useState([]);

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars([...data]))
    },[])


    useEffect(()=>{
        jsonService.getUsers().then(({data})=>setUsers([...data]))
    },[])

    useEffect(()=>{
       jsonService.getComments().then(({data})=>setComments([...data]))
    },[])


    return (
        <div>
            {/*<CarsForm setCars={setCars} updateCar={updateCar}/>*/}
            {/*<hr/>*/}
            {/*<Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>*/}

            {/*<UsersForm setUsers={setUsers}/>*/}
            {/*<hr/>*/}
            {/*<Users users={users}/>*/}

            {/*<CommentsForm setComments={setComments}/>*/}
            {/*<hr/>*/}
            {/*<Comments comments={comments}/>*/}
        </div>
    );
};


export {App};