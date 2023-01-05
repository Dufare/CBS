import axios from "axios";
import { userConstant } from "../Constants/UserConst";
import { store } from "../Store";
export const registerUser = async(payload) => {
    const register = await axios.post('http://localhost:5000/Users',payload)
    store.dispatch({type:userConstant.REGISTER_USER,payload:register.data})
    //  true
}
export const loginUser = (payload) => {
    store.dispatch({type:userConstant.LOGIN_USER,payload})
}