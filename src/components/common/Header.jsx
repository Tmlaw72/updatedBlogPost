import React from "react";
import {Link} from 'react-router';

function Header(){
    return(
        <div className="headerr">
            <h1 className="bg-white text-3xl p-3">Travel Blog</h1>
            <nav className="headerr">
                <ul className="headerr">
                    <li className="headerr">
                        <Link to="/postlist">
                        Posts
                        </Link>    
                    </li>
                    <li className="headerr">
                        <Link to="/postList/1">
                        Home
                        </Link>
                    </li>
                    <li className="headerr">
                        <Link to="/contact">
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>

    );

}

export default Header;