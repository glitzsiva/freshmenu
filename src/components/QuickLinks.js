
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useSelector } from "react-redux";

const QuickLinks = () => {
    const QuickLinks = useSelector(state => state.quickLinks);


    return (
        <div style={{ top: '77px' }} className='sticky-top bg-white shadow'>
            <div className='header-category scrollbar'>
                {QuickLinks.map(({ id, linkName }, index) => (<a key={id} className={index === 0 ? 'active' : ''}>{linkName}</a>))}


            </div>
        </div>)
}


export default QuickLinks;