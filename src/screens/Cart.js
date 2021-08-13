import TitleHeader from "../components/TitleHeader";
import { Tooltip } from "reactstrap";
import React, { useState } from "react";
import CartList from "../components/CartLists";
import { Link, useRouteMatch } from "react-router-dom";
import Footer from "../components/Footer";





const Cart = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    let { url } = useRouteMatch();


    return (
        <div className='cart ' style={{ paddingBottom: '100px' }}>
            <TitleHeader title='Cart' path='/' />
            <CartList />
            <div className='bg-light py-2'></div>
            <div className='container'>

                <Link className='text-decoration-none text-dark' to={`${url}/apply-cuppon`}>
                    <div className='cuppon d-flex align-items-center py-3'>
                        <i className="fa fa-ticket me-3" aria-hidden="true"></i>
                        <div className='d-flex flex-grow-1 justify-content-between align-items-center'>
                            <h6 className='m-0'>APPLY COUPON</h6>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </Link>



            </div>

            <div className='bg-light py-2'></div>



            <div className='container'>
                <div className='bill-details py-3'>
                    <h6 className='fs-6'> BILL DETAILS</h6>
                    <div className='d-flex justify-content-between bill-details__price'>
                        <h6 className=''>Total Price</h6>
                        <h6 className=' '>
                            ₹2600
                        </h6>
                    </div>
                    <div className='d-flex justify-content-between bill-details__price'>
                        <h6 className='' onClick={() => {
                            setDropdown(!dropdown)
                        }}>Tax & Charges <i className="fa fa-angle-down fs-6 text-primary" aria-hidden="true"></i></h6>
                        <h6 className=' '>
                            +58.70
                        </h6>
                    </div>
                    <div className={`ms-3 tax-charges ${dropdown && 'active'} `}>
                        <div className='d-flex justify-content-between bill-details__charges'>
                            <h6 className=''>Packaging Charges</h6>
                            <h6 className=' '>
                                +20.0
                            </h6>
                        </div>
                        <div className='d-flex justify-content-between bill-details__charges'>
                            <h6 className=''>Shipping Charges</h6>
                            <h6 className=' '>
                                +25.00
                            </h6>
                        </div>
                        <div className='d-flex justify-content-between bill-details__charges'>
                            <h6 className=''>
                                GST (5%)
                                <img
                                    className='mx-2'
                                    href="#"
                                    id="TooltipExample"
                                    src='https://www.freshmenu.com/pages/common/images/info.svg'
                                    alt='info'
                                />

                                <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>

                                    <p className='m-0'>CGST (2.5%) - Rs. 6.85</p>
                                    <p className='m-0'>SGST (2.5%) - Rs. 6.85</p>

                                </Tooltip>

                            </h6>
                            <h6 className=' '>
                                +13.70
                            </h6>
                        </div>
                    </div>
                </div>
            </div>




            <div className='cart__address bg-white fixed-bottom border-top' style={{ bottom: '47px', zIndex: '1090' }}>
                <div className=" d-flex p-3">
                    <div className="cart__address__details">
                        <div className="cart__address__details__icon">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <div className="cart__address__details__icon__tick">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className='ms-3 position-relative flex-grow-1'>
                            <h6 >Deliver to Sangavi</h6>
                            <span >Gajalakshmi Colony</span>
                            <small ><strong>51 MINS</strong></small>

                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <button className='mb-2'>Change</button>
                        <button className='mt-1'>Schedule</button>
                    </div>
                </div>

                <div className="cart__address__price">
                    <button className="ps-3">
                        <h6> ₹704</h6>
                        <div className="d-flex ">View Detailed Bill
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </button>
                    <button>
                        Make Payment
                    </button>
                </div>
            </div>
            <Footer />
        </div >
    )
}



export default Cart;