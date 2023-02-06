import {useContext} from "react";
import {AuthContext} from "../hoc/useAuthProvider";

const useAuthContext =()=> useContext(AuthContext);

export {useAuthContext}