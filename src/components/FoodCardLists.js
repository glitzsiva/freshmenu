import FoodCard from "./FoodCard"
import { useSelector } from "react-redux";

const FoodCardLists = () => {

    const foodDetails = useSelector(state => state.foodDetails);
    return (
        <div className='container'>
            <div className='d-flex flex-wrap'>
                {
                    foodDetails.map(foodDetail => <FoodCard key={foodDetail.id} foodDetail={foodDetail} />)
                }
            </div>
        </div>
    )
}




export default FoodCardLists;