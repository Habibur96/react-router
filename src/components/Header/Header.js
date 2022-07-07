import React from 'react';

import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy routing !!!</h1>
            <nav>
                <ul>
                    <li>
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/Friends">Friend</CustomLink>
                        <CustomLink to="/About">About</CustomLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;