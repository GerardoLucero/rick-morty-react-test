import { combineReducers } from "redux"
import characters from "./characters"
import episodes from "./episodes"


export default combineReducers({
    characters,
    episodes
})