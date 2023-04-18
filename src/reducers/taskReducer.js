
export const reducerTask = (state = [], action) => {

    switch (action.type) {
        case '[TASK] add task':
            return [...state, action.payload];

        case '[TASK] delete task':
            return console.log('Delete task');

        case '[TASK] toggle task': //cambiará la propiedad 'done' de true a false o de false a true
            return console.log('Toggle task');
        
        default:
            return state;
    
    };

};