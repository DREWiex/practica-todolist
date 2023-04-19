
export const reducerTask = (state = [], action) => {

    switch (action.type) {
        case '[TASK] add task':
            return [...state, action.payload];

        case '[TASK] delete task':
            console.log('estamos en delete y este es el id', action.payload)
            const comparison = state.filter(task => task.id !== action.payload);
            return comparison

        case '[TASK] toggle task': //cambiará la propiedad 'done' de true a false o de false a true
            console.log('Toggle task');
            return
        
        default:
            return state;
    
    };

};