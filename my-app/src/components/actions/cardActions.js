import axios from 'axios'

export const deleteCard = (id) => {
    return {
        type: 'DELETE_CARD',
        id
    }
}

export const fetchUser = (id) => {
    return (dispatch) => {
        console.log('user id: ' + id)
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(({ data }) => dispatch({ type: 'FETCH_USER', payload: data }))
            .then(({ data }) => console.log(data))
    }
}

export const addUser = (UserViewModel) => {
    return (dispatch) => {
        console.log('user view model (Action): ' + JSON.stringify(UserViewModel))
        dispatch({ "type": "ADD_USER", "payload": UserViewModel })
    }
}

export const updateUser = (UserViewModel) => {
    console.log("Update Card(Action): " + JSON.stringify(UserViewModel))
    return (dispatch) => {
        dispatch({ type: 'UPDATE_USER', Payload: UserViewModel })
    }
}

