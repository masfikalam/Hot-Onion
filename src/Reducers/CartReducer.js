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
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    };
};

export default CartReducer;