import { Route, Routes } from 'react-router';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IndividualPostPage from './components/blog/IndividualPostPage'; 
import ContactPage from './contact/ContactPage';
import BlogPostsPage from './postlist/BlogPostsPage';
import Homepage from './homepage/homepage';

function App() {
  return (
  
   <Routes>
      <Route path="/postlist" element={<BlogPostsPage />} />
      <Route path="/" element={<BlogPostsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/postList/:post_id" element={<IndividualPostPage />} />
   </Routes>  

   /*
     <div>
      <IndividualPostPage />

      HEREERE
      <li className="comment">{comment}</li>
    </div>
    
    
    <div>
      <Header className="header"/>
      <BlogPost className="posting"/>
      <Footer className="footing"/> 
    </div>  */
  );
}

export default App
