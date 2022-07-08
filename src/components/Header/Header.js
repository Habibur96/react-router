import React from 'react';
import { Link } from 'react-router-dom';


// import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy routing !!!</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/Friends'>Friends</Link>
                        <Link to='/Posts'>Posts</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Countries'>Countries</Link>


                        {/* <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/Friends">Friend</CustomLink>
                        <CustomLink to="/About">About</CustomLink> */}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;