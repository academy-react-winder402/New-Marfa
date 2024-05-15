import axios from "axios";

const baseURL = 'https://classapi.sepehracademy.ir/api'


const instance = axios.create({
    baseURL: baseURL,
});

instance.interceptors.request.use(opt => {
    return opt
})

const onSuccess = (response) => {
    return response.data
}

const onError = (err) => {
    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);


export default instance;
