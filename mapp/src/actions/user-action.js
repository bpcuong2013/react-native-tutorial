import axios from 'axios';
import { API_BASE_URL, LIST_USERS, LIST_USERS_SUCCESS, LIST_USERS_FAILED } from "./../utils"

function getUsers() {
    return dispatch => {
        dispatch({ type: LIST_USERS })
        return axios.get("https://react-native-tutorial.herokuapp.com/api/1.0/users")
            .then(res => {
                if (res.data.success){
                    return dispatch({ type: LIST_USERS_SUCCESS, payload: res.data.data });                
                } else {
                    console.log(res.data.details);
                    return dispatch({ type: LIST_USERS_FAILED, payload: res.data.data });
                }
            })
            .catch(err => {
                console.log(err);
                return dispatch({ type: LIST_USERS_FAILED, payload: { error_code: "REQUEST_FAILED", message: "Network connection issue" } });
            });
    }
}

export { getUsers }