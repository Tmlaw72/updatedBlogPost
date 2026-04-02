import React, { useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function ContactPage() {
  const [formInput, setFormInput] = useState(
  {
    name: "",
    email: "",
    message: "",
  });



  
  const submitForm = (e) => {
   // e.preventDefault();
    console.log(formInput)
  };

  return (
    <div className='p-4'>
        <Header />
        <form className="comment" onSubmit={submitForm}>
            <input minLength={2} placeholder="Name" className="comment" value={formInput.name} onChange={e => setFormInput({...formInput, name: e.target.value})}/>
            <div></div>
            <input placeholder='Email' className="comment" value={formInput.email} onChange={e => setFormInput({...formInput, email: e.target.value})}/>
            <div></div>
            <textarea placeholder='Message' className="comment" value={formInput.message} onChange={e => setFormInput({...formInput, message: e.target.value})}/>
            <button type='submit'>Submit</button>
        </form> 
        <Footer />
    </div> 
  )
}

export default ContactPage