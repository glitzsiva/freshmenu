import { NavLink } from "react-router-dom";
import { Form, FormGroup, Input, Button } from 'reactstrap';
import TitleHeader from '../components/TitleHeader';




const Register = () => {
    return (
        <>
            <TitleHeader title='REGISTER' path='/login' />
            <div className='container text-center login register'>
                <div>
                    <NavLink to="/login/" className='login__social mx-auto'>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </NavLink>
                </div>
                <div className='login__divider'>
                    <span>OR</span>
                </div>
                <Form className='px-3 '>
                    <FormGroup className='mb-3'>
                        <Input
                            placeholder='First Name'
                            name=''
                        />
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <Input
                            placeholder='Last Name'
                            name=''
                        />
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <Input
                            placeholder='10 digit Mobile Number'
                            name=''
                        />
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <Input
                            placeholder='Email'
                            name=''
                        />
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <Input
                            placeholder='Password'
                            name=''
                        />
                    </FormGroup>
                    <Button color='primary' className='py-2 rounded-0 shadow-none w-100 text-white'>Sign up</Button>
                </Form>
            </div>
        </>
    )
};

export default Register;