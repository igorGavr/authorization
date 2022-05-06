import axios from "axios";

import {baseURL} from "../constants/urls";

let axiosService = axios.create({baseURL});

export {
    axiosService
}