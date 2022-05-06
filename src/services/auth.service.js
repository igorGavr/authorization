
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


// В цьому сервісі ми будемо логінитися
const authService = {
    // Для отримання пари тоненів , ми передаємо в API user
    getTokens: (user) => axiosService.post(urls.auth, user),
    // Для отримання нової пари токенів, передаємо ключ і значення - refresh
    refresh: (refresh) => axiosService.post(`${urls.auth}/refresh`, {refresh})
}

export {
    authService
}