import { NavLink } from "react-router-dom";
import { Form, FormGroup, Input, Button } from 'reactstrap';
import TitleHeader from '../components/TitleHeader';


const Login = () => {
    return (
        <>
            <TitleHeader title='SIGN IN' path='/' />
            <div className='container text-center login'>

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
                            placeholder='Registered phone number or email ID'
                            name='LoginId'
                        />
                    </FormGroup>
                    <Button color='primary' className='py-2 rounded-0 mt-4 shadow-none w-100 text-white'>Send OTP</Button>
                </Form>
                <p className='fw-bold mt-3' >Don't have an account ? <NavLink to="/register/" className='text-decoration-none'>Sign up</NavLink></p>
            </div>
        </>
    )
};

export default Login;