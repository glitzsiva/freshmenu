
import { useState } from "react";
import TitleHeader from "../components/TitleHeader"

const ApplyCuppon = () => {
    const [cupponValue, setCupponValue] = useState('');
    return (
        <div>
            <TitleHeader title='APPLY CUPPONS' path='/cart' />
            <div className='container  bg-light'>
                <div className=' py-3'>
                    <div className='d-flex px-2 py-1 bg-white border'>
                        <div className='flex-grow-1 pe-2 bg-white'>
                            <input
                                value={cupponValue}
                                className='p-0 ps-2 w-100 border-0'
                                style={{ outline: 'none', fontWeight: 500, fontSize: '.9rem', lineHeight: 1, }}
                                placeholder='Enter Cuppon Code'
                                onChange={(e) => {
                                    setCupponValue(e.target.value)
                                }}
                            />
                        </div>
                        <button className={`text-primary bg-white border-0 p-0 ${!cupponValue && 'd-none'}`}>
                            <small style={{
                                fontSize: ' 0.75em',
                                fontWeight: 600
                            }}>APPLY</small>
                        </button>
                    </div>
                </div>
                <div className='apply-cuppon pt-3'>
                    <h6>APPLY CUPPON</h6>
                    <div className=''>
                        <div className='apply-cuppon__card mb-3'>
                            <div className='apply-cuppon__card__info'>
                                <h6>BLUEBERRY</h6>
                                <p>Get Free Blueberry Cake worth Rs 89 on orders above 249</p>
                            </div>
                            <div className='ms-3'>

                                <button className='btn-apply primary'>
                                    Apply
                                </button>
                            </div>
                        </div>

                        <div className='apply-cuppon__card mb-3'>
                            <div className='apply-cuppon__card__info'>
                                <h6>BLUEBERRY</h6>
                                <p>Get Free Blueberry Cake worth Rs 89 on orders above 249</p>
                            </div>
                            <div className='ms-3'>

                                <button className='btn-apply primary'>
                                    Apply
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <h6 className='px-3 pb-3 bg-light'
                style={{
                    fontSize: '.8rem',
                    fontWeight: 'bold'
                }}
            >BANK OFFERS</h6>
            <div className='container'>
                <div className='bank-offers'>

                    <div className='bank-offers__card'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://s3-ap-southeast-1.amazonaws.com/foodvista.1/ac84c0c5-380d-4012-a210-b28e1e7acb54.png'
                                alt='Bank Offers'
                            />
                        </div>

                        <div className='bank-offers__card__info'>
                            <p>Pay via Freecharge and get 15% cashback upto Rs.50 once per user</p>
                            <small className='text-primary fw-bold'>View Details</small>
                        </div>
                    </div>
                    <div className='bank-offers__card'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://s3-ap-southeast-1.amazonaws.com/foodvista.1/ac84c0c5-380d-4012-a210-b28e1e7acb54.png'
                                alt='Bank Offers'
                            />
                        </div>

                        <div className='bank-offers__card__info'>
                            <p>Pay via Freecharge and get 15% cashback upto Rs.50 once per user</p>
                            <small className='text-primary fw-bold'>View Details</small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};


export default ApplyCuppon;