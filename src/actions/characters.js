
import {
    CHARACTER_GET_SUCCESS,
    CHARACTER_FAIL,
} from "./index"

//URL API
import url from '../constants/urlsAPI'

//Get character filter
export const getCharactersFilter = (page, filters) => dispatch => {
    var queryFilter = null
    if(filters){
        filters = filters.toLowerCase()
        filters = filters.replace(/:/g, '=')
        filters = filters.replace(/-/g, '&')
        queryFilter = filters.includes("=")? filters: "name="+filters
    }
    console.log(queryFilter)
    var querypage = page?"page="+page:""
    var query = url.characters +'/?'+ querypage +'&' +queryFilter
    console.log(query)
    fetch(query).then(response => response.json())
    .then(data => {
      dispatch(getCharactersSuccess(data))
    })
    .catch(error => {
        console.log('Hubo un problema con la petición Fetch:' + error.message)
        dispatch(characterFail())
    })
}

/* ======================= Acciones ======================= */

export const getCharactersSuccess = (data) => {
    return {
        type: CHARACTER_GET_SUCCESS,
        data: data
    }
}

export const characterFail = () => {
    return {
        type: CHARACTER_FAIL
    }
}
    
