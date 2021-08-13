

import { connect } from "react-redux";


//// Custom Imports //// 
import { incrementCount, decrementCount } from "../actions/cart";


const CartCard = (props) => {

    const { totalPrice, foodName, itemCount } = props.cartItem;

    return (
        <div className='cart__items mt-3'>
            <span className='meal-type veg mt-1'></span>
            <div className='cart__items__info'>
                <div>
                    {foodName}
                </div>
            </div>
            <div className='cart__items__quantity'>
                <div style={{ cursor: 'pointer' }}
                    onClick={() => {
                        props.dispatch(decrementCount(props.cartItem, props.counter.itemCount))
                    }}
                >-
                </div>
                <div>
                    {itemCount}
                </div>
                <div style={{ cursor: 'pointer' }}
                    onClick={() => {
                        props.dispatch(incrementCount(props.cartItem, props.counter.itemCount))
                    }}
                >
                    +
                </div>
            </div>
            <div className='cart__items__price'>
                <div>
                    ₹{totalPrice}
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        counter: state.cartItems.find(cartItem => cartItem.id === props.cartItem.id)
    }
}

export default connect(mapStateToProps)(CartCard);