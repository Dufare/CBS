import { userConstant } from "../Constants/UserConst";
import { cr_ride_ReqCons } from "../Constants/UserConst";
import { driverConst } from "../Constants/UserConst"; 

const initialState = {
  user: "",
  ride_req:"",
  get_all_rides:"",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstant.REGISTER_USER:
      return { ...initialState, user: action.payload };
      break;
    case cr_ride_ReqCons.CREATE_RIDE_REQ:
      return { ...initialState, ride_req: action.payload };
      break;
      case driverConst.GET_ALL_RIDES_REQ:
        return { ...initialState, get_all_rides: action.payload };
        break;
    default:
      return initialState;
      break;
  }
};
