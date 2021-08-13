import { Link, NavLink } from "react-router-dom";



const CartInfo = () => {



    return (
        <div className='fixed-bottom'>
            <div className=' cart-info'>
                <p><strong>3 Item</strong> in Cart</p>
                <p>VIEW CART</p>
                <NavLink tag={Link} to='/cart'>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </NavLink>
            </div>
        </div>
    )
}


export default CartInfo;