import { 
    EPISODES_GET_SUCCESS, 
    EPISODES_FAIL
} from "../actions";

const episodes = (state = {}, action) => {
    switch(action.type) {
        case(EPISODES_GET_SUCCESS):
            console.log("Success")
            return { ...state,
                data: action.data
            }
        case(EPISODES_FAIL):
        console.log("Fail")
            return { ...state,
                data: null
            }
        default:
            return state;
    }
}
export default episodes