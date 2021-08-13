


export const incrementCount = ({ id, price }, prevItemCount) => (
    {
        type: 'UPDATE_COUNT',
        id,
        cartItem: {
            itemCount: prevItemCount + 1,
            totalPrice: price * (prevItemCount + 1)
        }
    }
);
export const decrementCount = ({ id, price, }, prevItemCount) => {
    if (prevItemCount !== 1) {
        return {
            type: 'UPDATE_COUNT',
            id,
            cartItem: {
                itemCount: prevItemCount - 1,
                totalPrice: price * (prevItemCount - 1)
            }
        }
    }
    else {
        return {
            type: 'REMOVE_ITEM',
            id
        }

    }
};


export const addItem = ({ id, price, foodName }) => (
    {
        type: 'ADD_ITEM',
        cartItem: {
            id,
            price,
            foodName,
            itemCount: 1,
            totalPrice: price
        }
    }
);