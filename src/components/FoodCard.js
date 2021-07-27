


import { Button } from "reactstrap";


const FoodCard = () => {


    return (
        <div className=' product-card'>
            <img className='w-100' alt='product'
                src='https://s3-ap-southeast-1.amazonaws.com/foodvista.1/cc0bff3d-309a-471f-a8be-65a3c28ef18d.jpg'
            />
            <div className='product-card__info'>
                <div className='product-card__info__title'>
                    <span className='meal-type veg'>
                    </span>
                    <h6>Palak-Paneer Bhurji Wrap</h6>
                </div>
                <div className='product-card__info__actions'>
                    <h6 className='font-weight-bold'>₹99</h6>
                    <Button color="primary" className='px-3 text-white fw-bold shadow-none' size="sm">Add</Button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;