import { useSelector } from "react-redux";

import CartCard from "./CartCard";



const CartList = () => {

    const cartItems = useSelector(state => state.cartItems)


    return (
        <div className='container'>
            <div className='pb-3 border-bottom '>
                {
                    cartItems.map(cartItem => <CartCard key={cartItem.id} cartItem={cartItem} />)
                }
            </div>
            <div className='rounded bg-primary text-white my-2 text-center'>
                <small>Safety Assured meals and contactless delivery</small>
            </div>
        </div>
    )
}
export default CartList;