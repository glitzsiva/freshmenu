import { v4 as uuid } from "uuid";


const quickLinksDefaultState = [
    {
        id: uuid(),
        linkName: 'Meals at 99'
    },
    {
        id: uuid(),
        linkName: 'Breakfast'
    }, {
        id: uuid(),
        linkName: 'Continental'
    }, {
        id: uuid(),
        linkName: 'Indian / Thalis'
    }, {
        id: uuid(),
        linkName: 'Fit N Fab'
    }, {
        id: uuid(),
        linkName: 'Sandwiches & More'
    },
];

const quickLinksReducer = (state = quickLinksDefaultState, action) => {
    return state
}

export default quickLinksReducer;