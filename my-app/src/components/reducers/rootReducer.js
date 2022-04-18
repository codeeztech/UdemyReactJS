import card from "../card";

const initialState = {
    cards: [
        { id: 1, title: 'Bret', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 2, title: 'Antonette', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 3, title: 'Samantha', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    users: {},
    addedUserList: []
}


function rootreducer(state = initialState, action) {
    switch (action.type) {
        case 'DELETE_CARD':
            let cards = state.cards.filter(card => card.id !== action.id);
            return {
                ...state,
                cards: cards
            }
        case 'FETCH_USER':
            // return  console.log(action.payload)
            return {
                ...state,
                users: action.payload
            }
        case 'ADD_USER':

            console.log('user payload (root Reducer): ' + JSON.stringify(action.payload))
            console.log('addedUserList (root Reducer): ' + JSON.stringify(state.addedUserList))
            return {
                ...state,
                addedUserList: [...state.addedUserList, action.payload]
            }
        case 'UPDATE_USER':

            console.log("Update Card(rootRecducer): " + JSON.stringify(action.Payload));

            return {
                ...state,
                addedUserList: [...state.addedUserList, action.Payload]

            }
        default:
            return state;

    }
}

export default rootreducer;