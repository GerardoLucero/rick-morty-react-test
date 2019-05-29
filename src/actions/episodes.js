
import {
    EPISODES_GET_SUCCESS,
    EPISODES_FAIL,
} from "./index"
//URL API
import url from "../constants/urlsAPI"

// Get Episodes filter
export const getEpisodesFilter = (page, filters) => dispatch => {
    var queryFilter = null
    if(filters){
        filters = filters.toLowerCase()
        filters = filters.replace(/:/g, '=')
        filters = filters.replace(/-/g, '&')
        queryFilter = filters.includes("=")? filters: "name="+filters
    }
    console.log(queryFilter)
    var querypage = page?"page="+page:""
    var query = url.episodes +'/?'+ querypage +'&' +queryFilter
    console.log(query)
    fetch(query).then(response => response.json())
    .then(data => {
      dispatch(getEpisodesSuccess(data))
    })
    .catch(error => {
        console.log('Hubo un problema con la petición Fetch:' + error.message)
        dispatch(episodesFail())
    })
}


/* ======================= Acciones ======================= */

export const getEpisodesSuccess = (data) => {
    return {
        type: EPISODES_GET_SUCCESS,
        data: data
    }
}

export const episodesFail = () => {
    return {
        type: EPISODES_FAIL
    }
}
    
