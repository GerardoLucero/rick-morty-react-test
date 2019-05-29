import { 
    CHARACTER_GET_SUCCESS,  
    CHARACTER_FAIL
} from "../actions"

const characters = (state = {}, action) => {
    switch(action.type) {
        case(CHARACTER_GET_SUCCESS):
            console.log("Success")
            return { ...state, 
                data: action.data
            }
        case(CHARACTER_FAIL):
            console.log("Fail character")
            return { ...state, 
                data: null
            }
        default:
            return state;
    }
}
export default characters