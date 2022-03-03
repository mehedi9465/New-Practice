import React, { useReducer } from 'react';
const countState = {
    clicks: 0,
    active: true,
    count : 0
}

const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return{
                ...state,
                count: state.count + 1
            };
        
        case 'DECREMENT':
            return{
                ...state, 
                count: state.count - 1
            };
        
          case 'RESET':
            return{
                ...state,
                count: 0
            };
    
        default:
            return state;
    }
}

const Count = () => {
    
    const [state, dispatch] = useReducer(countReducer, countState);

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type : 'INCREMENT' })}>Increase +</button>
            <button onClick={() => dispatch({ type : 'DECREMENT' })}>Decrease -</button>
            <button onClick={() => dispatch({ type : 'RESET' })}>Reset 0</button>
        </div>
    );
};

export default Count;