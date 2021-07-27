
/* eslint-disable jsx-a11y/anchor-is-valid */





const Footer = () => {


    return (
        <div className='footer-menu fixed-bottom'>
            <a className='footer-menu__link active'>
                <i class="fa fa-ravelry footer-menu__link__icon" aria-hidden="true"></i>
                <span>swiggy</span>
            </a>
            <a className='footer-menu__link'>
                <i class="fa fa-search footer-menu__link__icon" aria-hidden="true"></i>
                <span>Explore</span>
            </a>
            <a className='footer-menu__link'>
                <i class="fa fa-cart-arrow-down footer-menu__link__icon" aria-hidden="true"></i>
                <span>Cart</span>
            </a>
            <a className='footer-menu__link'>
                <i class="fa fa-user-circle-o footer-menu__link__icon" aria-hidden="true"></i>
                <span>Account</span>
            </a>
        </div>
    )
};

export default Footer;