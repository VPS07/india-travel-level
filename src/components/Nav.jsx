import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <div className='nav-link'>
            <Link to={"/howtouse"} className='link'>How to use this?</Link>
        </div>
    )
}

export default Nav