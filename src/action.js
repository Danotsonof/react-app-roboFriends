import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_INFO_PENDING,
    REQUEST_INFO_SUCCESS,
    REQUEST_INFO_FAILED
 } from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestInfo = () => (dispatch) => {
    dispatch({ type: REQUEST_INFO_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch({ type: REQUEST_INFO_SUCCESS, payload: data }))
            .catch(error => dispatch({type: REQUEST_INFO_FAILED, payload: error}))    
}