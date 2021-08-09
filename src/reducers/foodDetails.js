import { v4 as uuid } from "uuid";


const foodDetailsDefaultState = [
    {
        id: uuid(),
        foodName: 'Palak-Paneer Bhurji Wrap',
        price: 249,
        mealType: 'veg',
        foodImgUrl: 'https://s3-ap-southeast-1.amazonaws.com/foodvista.1/cc0bff3d-309a-471f-a8be-65a3c28ef18d.jpg'
    },
    {
        id: uuid(),
        foodName: 'Palak-Paneer',
        price: 249,
        mealType: 'veg',
        foodImgUrl: 'https://s3-ap-southeast-1.amazonaws.com/foodvista.1/cc0bff3d-309a-471f-a8be-65a3c28ef18d.jpg'
    },
    {
        id: uuid(),
        foodName: 'Palak-Paneer Bhurji Wrap',
        price: 249,
        mealType: 'veg',
        foodImgUrl: 'https://s3-ap-southeast-1.amazonaws.com/foodvista.1/cc0bff3d-309a-471f-a8be-65a3c28ef18d.jpg'
    },
    {
        id: uuid(),
        foodName: 'Palak-Paneer Bhurji Wrap',
        price: 249,
        mealType: 'veg',
        foodImgUrl: 'https://s3-ap-southeast-1.amazonaws.com/foodvista.1/cc0bff3d-309a-471f-a8be-65a3c28ef18d.jpg'
    },

]


const foodDetailsReducer = (state = foodDetailsDefaultState, action) => {
    return state
}

export default foodDetailsReducer;