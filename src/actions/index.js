import axios from 'axios';

//action creator
export function fetchUsers() {
    const request = axios.get('http://jsonplaceholder.typicode.com/users');

    //Vanilla redux expects returning an action as a plain javascript object

    //redux-thunk enables returnig plain javascript function
    return ( dispatch ) => {
        request.then(( {data} ) => {
            dispatch({type: 'FETCH_PROFILES', payload: data})
        })
    }
}