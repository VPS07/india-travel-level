import React from 'react'
import { Link } from 'react-router-dom'

function HowtoUse() {
    return (
        <div>
            <Link to={"/map"} className='link'><b>Back to map page</b></Link>
            <br />
            <h2>How To Use</h2>
            <p>This maps contains all 28 states and 8 union territories of India. If You want to select any states and union territory just click on it then a popup menu will appear and choose the appropriate level of travel. </p>
            <br />
            <p>Here's what each level represents:</p>
            <li className="bullet"><b>Lived there</b> - you spent a significant portion of your life in that area.</li>
            <li className="bullet"><b>Stayed there</b> - you slept at least a night in that area.</li>
            <li className="bullet"><b>Visited there</b> - you spent some hours exploring the area.</li>
            <li className="bullet"><b>Alighted there</b> - you just dropped off for a short stopover, layover, or transfer.</li>
            <li className="bullet"><b>Passed there</b> - you passed by that area but did not set foot.</li>
            <li className="bullet"><b>Never been there</b> - you need to travel there soon.</li>
        </div>
    )
}

export default HowtoUse