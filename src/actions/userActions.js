import axios from "axios"

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_USERS'})

        fetch('http://localhost:3000/users').then(response => 
    {
        return response.json()
    }).then(responseJSON => {
        dispatch({type: 'SHOW_USERS', users: responseJSON})
    })
    }
}


// export const addUser = (data) => {
//     return (dispatch) => {
//         fetch("http://localhost:3000/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",

//             },
//             body: JSON.stringify({
//                 email: data.email,
//                 name: data.name,
//                 imageUrl: data.imageUrl
//             })
//         })
//         .then(result => result.json())
//         .then(responseJSON => {
//             dispatch({type: 'ADD_USER', res: responseJSON})
//             dispatch({type: 'LOGIN_USER', res: responseJSON})
//         })
//     }
// }

// export const addUser = (data) => {
//     return (dispatch) => {
//             let user = {
//                 name: data.name,
//                 email: data.email,
//             }
//             axios.post('/login', {user}, {
//                 withCredentials: true
//             })
//             .then(responseJSON => {
//                     dispatch({type: 'ADD_USER', res: responseJSON})
//                     dispatch({type: 'LOGIN_USER', res: responseJSON})
//                 })
//         }
//     }



   