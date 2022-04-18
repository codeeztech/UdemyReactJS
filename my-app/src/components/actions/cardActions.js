import axios from 'axios'
export const deleteCard = (id) =>{
    return{
        type: 'DELETE_CARD',
        id
    }
}

export const fetchUser =(id) =>{
    return (dispatch) =>{
        console.log('user id: '+ id)
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(({data}) => dispatch({type:'FETCH_USER',payload:data}))
        .then(({data}) => console.log(data))
    }
}

