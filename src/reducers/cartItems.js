


const defaultCartItems = [];



const cartItemsReducer = (state = defaultCartItems, action) => {

    switch (action.type) {

        case 'ADD_ITEM':
            return [
                ...state,
                action.cartItem
            ];
        case 'UPDATE_COUNT':
            return state.map(cartItem => {
                if (cartItem.id === action.id) {
                    return {
                        ...cartItem,
                        itemCount: action.itemCount
                    }
                }
                else {
                    return cartItem
                }
            });
        case 'REMOVE_ITEM':
            return state.filter(({ id }) => id !== action.id)
        default:
            return state;
    };


};

export default cartItemsReducer;