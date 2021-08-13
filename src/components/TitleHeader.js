
import { Link } from "react-router-dom";

const TitleHeader = (props) => {

    const style = {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: ' 0 0.5px 0 0 #e7e9e9',
        color: ' #4a4a4a'
    }

    return (
        <div className='title-header sticky-top' style={style}>
            <Link className='text-decoration-none text-dark' to={props.path} >
                <i className="fa fa-angle-left d-flex justify-content-center align-items-center" style={{ width: '50px', height: '100%', fontSize: '1.5rem' }} aria-hidden="true"></i>
            </Link>
            <h6 className='flex-grow-1 m-0'>{props.title}</h6>
        </div>
    )
}
export default TitleHeader;