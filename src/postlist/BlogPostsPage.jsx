import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import { Link } from 'react-router';

function BlogPostsPage() {
  return (
    <div>
      <Header />
      <Link to="/postList/1" className='posting2'>Post #1</Link>
      <div></div>
      <Link to="/postList/2" className='posting2'>Post #2</Link>
      <div></div>
      <Link to="/postList/3" className='posting2'>Post #3</Link>
      <div></div>
      <Link to="/postList/4" className='posting2'>Post #4</Link>
      <div></div>
      <Link to="/postList/5" className='posting2'>Post #5</Link>
      <Footer />
    </div>
  )
}

export default BlogPostsPage