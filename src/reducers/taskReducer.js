
export const reducerTask = (state = [], action) => {

    switch (action.type) {
        case '[TASK] add task':
            return [...state, action.payload];

        case '[TASK] delete task':
            const comparison = state.filter(task => task.id !== action.payload);
            return comparison;

        case '[TASK] toggle task':
            let task = state.find(item => item.id == action.payload);
            !task.done ? task.done = true : task.done = false;
            return [...state];
        
        default:
            return state;
    
    };

};