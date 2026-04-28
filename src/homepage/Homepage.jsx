import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import BlogPost from '../components/blog/BlogPost'
import { useAuth } from "../components/authWrapper/AuthContext";
import {Link} from 'react-router';
import './Landing.css'

function Homepage() {

    const { logout } = useAuth();
    logout();

  return (
    <div className='homepage'>
    <h1>Welcome to the Travel Blog</h1>
    <Link to="/login" className='button-style'>Log In</Link>
    <br></br>
    <Link to="/postlist" id='button2'>View Blog Posts</Link>
    <br></br>
    </div>
  )
}

export default Homepage
