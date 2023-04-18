
export const reducerTask = (state = [], action) => {

    switch (action.type) {
        case '[TASK] add task':
            return [...state, action.payload];

        case '[TASK] delete task':
            console.log('estamos en delete')
            return state.filter(task => task.id !== action.payload);

        case '[TASK] toggle task': //cambiará la propiedad 'done' de true a false o de false a true
            console.log('Toggle task');
            return
        
        default:
            return state;
    
    };

};