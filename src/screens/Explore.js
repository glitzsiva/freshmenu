

import { Input } from "reactstrap"
import { Link } from "react-router-dom";

const Explore = () => {



    return (
        <div>
            <div className='sticky-top'>
                <div className='d-flex py-2 border-bottom'>
                    <Link className='text-decoration-none text-dark' to='/' >
                        <i className="fa fa-angle-left d-flex justify-content-center align-items-center" style={{ width: '50px', height: '100%', fontSize: '1.5rem' }} aria-hidden="true"></i>
                    </Link>
                    <div className='d-flex justify-content-between flex-grow-1'>
                        <div className='flex-grow-1'>
                            <Input
                                className='border-0 shadow-none outline-0'
                                placeholder="search for dishes.."
                                style={{ lineHeight: 1 }}
                            />
                        </div>
                        <button className={`text-muted bg-white border-0 px-3 p-0`}>
                            <small style={{
                                fontSize: ' 0.75em',
                                fontWeight: 600
                            }}>Clear</small>
                        </button>
                    </div>
                </div>
            </div>

            <div className='container py-4'>
                <div className=''>
                    <div className='d-flex align-items-center'>
                        <h6 className='me-3 mb-0 fw-bold'>Top Categories</h6>
                        <hr className='flex-grow-1' style={{ height: '2px' }} />
                    </div>
                    <div className=''>
                        <div className=''>
                            <div className=''>
                            </div>
                            <div className=''>
                            </div>
                            <div className=''>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default Explore;