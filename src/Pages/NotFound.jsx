import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div class="mainbox">
            <div class="err">404</div>
            <div class="msg">Page Not Found <p>Let's go to <Link to={"/map"} className='link'>Map Page</Link></p></div>
        </div>
    )
}

export default NotFound