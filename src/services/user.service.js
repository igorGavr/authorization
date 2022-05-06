import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

// Тут ми будемо створювати нашого user
const userService = {
    create: (user) => axiosService.post(urls.users, user)
}

export {
    userService
}