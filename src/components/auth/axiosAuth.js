import axios from "axios";

export const axiosAuth = () => {
    const token = sessionStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token,
        }
    })
}
