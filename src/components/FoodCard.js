

import { connect } from "react-redux";
import { Button } from "reactstrap";


//// Custom Imports //// 
import { addItem, incrementCount, decrementCount } from "../actions/cart";



const FoodCard = (props) => {
    const foodDetail = props.foodDetail;
    return (
        <div className='product-card'>
            <img className='w-100' alt='product'
                src={foodDetail.foodImgUrl}
            />
            <div className='product-card__info'>
                <div className='product-card__info__title'>
                    <span className='meal-type veg'>
                    </span>
                    <h6>{foodDetail.foodName}</h6>
                </div>
                <div className='product-card__info__actions'>
                    <h6 className='font-weight-bold'>₹{foodDetail.price}</h6>

                    <div>

                        {
                            props.counter === undefined ?
                                <Button color="primary"
                                    onClick={() => {
                                        props.dispatch(addItem(foodDetail.id))
                                    }}
                                    className='product-card__info__actions__addBtn'
                                > Add
                                </Button> :
                                <div className='d-flex product-card__info__actions__counterBtn'>
                                    <span
                                        onClick={(event) => {
                                            props.dispatch(decrementCount(foodDetail.id, props.counter.itemCount))
                                        }}>
                                        -
                                    </span>
                                    <span className='count'>{props.counter.itemCount}</span>
                                    <span
                                        className='add-count'
                                        onClick={() => {
                                            props.dispatch(incrementCount(foodDetail.id, props.counter.itemCount))
                                        }}
                                    >+
                                    </span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state, props) => {
    return {
        counter: state.cartItems.find(cartItem => cartItem.id === props.foodDetail.id)
    }
}

export default connect(mapStateToProps)(FoodCard);