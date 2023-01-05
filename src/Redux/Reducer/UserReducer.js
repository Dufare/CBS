import { userConstant } from "../Constants/UserConst"

const initialState = {
    user:""
}
export const userReducer = (state = initialState,action) =>{
    switch(action.type){
        case userConstant.REGISTER_USER:
            return {...initialState,user:action.payload};
            break;
        default:
            return initialState
            break;
    }

}