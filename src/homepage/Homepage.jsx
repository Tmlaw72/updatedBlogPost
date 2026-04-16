import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import BlogPost from '../components/blog/BlogPost'
import {Link} from 'react-router';
import './Landing.css'

function Homepage() {
  return (
    <div className='homepage'>
    <h1>Welcome to the Travel Blog</h1>
    <Link to="/postlist" className='button-style'>Log In</Link>
    <br></br>
    <Link to="/postlist" id='button2'>View Blog Posts</Link>
    <br></br>
    </div>
  )
}

export default Homepage
