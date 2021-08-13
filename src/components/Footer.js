
import { NavLink } from "react-router-dom";





const Footer = () => {


    return (
        <div className='footer-menu border-top fixed-bottom'>
            <NavLink activeClassName="active" to='/' exact className='footer-menu__link'>
                <i className="fa fa-ravelry footer-menu__link__icon" aria-hidden="true"></i>
                <span>Home</span>
            </NavLink >
            <NavLink activeClassName="active" to='/explore' exact className='footer-menu__link'>
                <i className="fa fa-search footer-menu__link__icon" aria-hidden="true"></i>
                <span>Explore</span>
            </NavLink >
            <NavLink activeClassName="active" to='/cart' exact className='footer-menu__link'>
                <i className="fa fa-cart-arrow-down footer-menu__link__icon" aria-hidden="true"></i>
                <span>Cart</span>
            </NavLink >
            <NavLink activeClassName="active" to='/user' exact className='footer-menu__link'>
                <i className="fa fa-user-circle-o footer-menu__link__icon" aria-hidden="true"></i>
                <span>Account</span>
            </NavLink >
        </div>
    )
};

export default Footer;