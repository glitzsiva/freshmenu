import { Button } from 'reactstrap';
import Footer from "../components/Footer";






const User = () => {

    return (
        <>
            <div className='container pb-4'>
                <div className='py-3 border-bottom border-dark border-2'>
                    <h6 className='fw-bold'>User Name</h6>
                    <p className='text-muted mb-0' style={{ fontSize: '.9rem' }}>8110869152 . siva@gmail.com</p>
                </div>
                <ul className='list-unstyled user-menu'>
                    <li className='d-flex justify-content-between'>
                        <span> Fresh Money</span>
                        <h6 className='text-success fw-bold me-3'> ₹0</h6>
                    </li>
                    <li>
                        GiftCard
                    </li>
                    <li>
                        Today’s Menu
                    </li>
                    <li>
                        Order History
                    </li>
                    <li>Party/Bulk Order</li>
                    <li>
                        Payments
                    </li>
                    <li>
                        Favourites
                    </li>
                    <li>Address Book</li>
                    <li>
                        Contact us
                    </li>
                    <li>
                        About Us
                    </li>
                </ul>
                <div className='text-end'>
                    <Button size='sm' outline color="primary">Logout</Button>
                </div>

            </div>
            <Footer />
        </>
    )
}


export default User;