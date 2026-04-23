import React from "react";
import {Link} from 'react-router';
import { useContext } from 'react';
import { useAuth, useUsername } from "../authWrapper/AuthContext";

function Header(){
    const username = useUsername();
  

    return(
        <div className="headerr">
            <h1 className="bg-white text-3xl p-3">Travel Blog</h1>
            
            {/*<h3><Link to='/login'>Log In</Link></h3>*/}
            {username ? <h3><Link to="/">Log Out</Link></h3> : <h3><Link to='/login'>Log In</Link></h3>}
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
