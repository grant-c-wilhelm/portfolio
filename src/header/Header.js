import React from 'react'
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'

const Header = () => {
    return (
        <header className="header">
            <div className='logo-box'>
                <img alt="Logo" className='logo' src={require('../assets/img/myfavicon.png')} />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main"> Grant Wilhelm
                    </span>
                    <span className="heading-primary-sub"> A passion for code. <br></br>a passion for outdoors.
                    </span>
                </h1>
                
                <a href='#section1'  className="btn btn-white btn-animated ">Who is Grant Wilhelm
                
                    </a>
               
                {/* we add 3 class names here be cause we will have many btn but this particular btn needs to perform specific funtions that other btn will not */}
            </div>

        </header>
    )
}

export default Header