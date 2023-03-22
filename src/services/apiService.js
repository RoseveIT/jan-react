import axios from "axios";

import {baseURL} from "../config/urls";

const apiService = axios.create({baseURL});

export {apiService}