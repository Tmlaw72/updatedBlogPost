import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import BlogPost from '../components/blog/BlogPost'
import {Link} from 'react-router';

function Homepage() {
  return (
    <div className='homepage'>
    <h1>Welcome to the Travel Blog</h1>
    <button>Log In</button>
    <Link to="/postlist">
      <button>Blog Posts</button>
    </Link>
    </div>
  )
}

export default Homepage
