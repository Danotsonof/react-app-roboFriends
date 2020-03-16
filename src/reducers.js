import {
    CHANGE_SEARCH_FIELD,
    REQUEST_INFO_PENDING,
    REQUEST_INFO_SUCCESS,
    REQUEST_INFO_FAILED
} from "./constants";

const initialStateSearch = {
    searchField: ''
}

export const searchInfo = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state
    }
}

const initialStateInfo = {
    isPending: false,
    info: [],
    error: ''
}

export const requestInfo = (state = initialStateInfo, action = {}) => {
    switch (action.type) {
        case REQUEST_INFO_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_INFO_SUCCESS:
            return Object.assign({}, state, { info: action.payload, isPending: false })
        case REQUEST_INFO_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state
    }
}