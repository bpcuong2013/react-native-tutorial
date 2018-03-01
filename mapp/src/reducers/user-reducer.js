import { API_BASE_URL, LIST_USERS, LIST_USERS_SUCCESS, LIST_USERS_FAILED } from "./../utils";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
};

export default function userReducer (state = initialState, action) {
    switch(action.type) {
        case LIST_USERS:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            });
        case LIST_USERS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });
        case LIST_USERS_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.payload.message
            });
        default:
            return state;
    }
}
