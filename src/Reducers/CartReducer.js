const CartReducer = ( state = { cart: [] }, action ) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case 'DELETE_FOOD':
            return {
                ...state,
                cart: state.cart.filter(food => food.id !== action.payload)
            };
        // case 'UPDATE_TODO':
        //     const { id, newLabel } = action.payload;
        //     const newTodo = { id : id, label: newLabel };
        //     const others = state.todos.filter(todo => todo.id !== id);
        //     return {
        //         ...state,
        //         todos: [...others, newTodo]
        //     };
        default:
            return state;
    };
};

export default CartReducer;