export const todosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    id : Math.random()
                }
            ];
        case 'REMOVE_TODO':
            console.log('REMOVE_TODO State',state)
           return state.filter((todo) => todo.id !== Number(action.id));
           
        default:
            return state;
    }

}