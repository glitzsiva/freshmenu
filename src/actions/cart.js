


export const incrementCount = (id, prevItemCount) => (
    {
        type: 'UPDATE_COUNT',
        id,
        itemCount: prevItemCount + 1
    }
);
export const decrementCount = (id, prevItemCount) => {
    if (prevItemCount !== 1) {
        return {
            type: 'UPDATE_COUNT',
            id,
            itemCount: prevItemCount - 1
        }
    }
    else {
        return {
            type: 'REMOVE_ITEM',
            id
        }

    }
};


export const addItem = (id) => (
    {
        type: 'ADD_ITEM',
        cartItem: {
            id,
            itemCount: 1
        }
    }
);