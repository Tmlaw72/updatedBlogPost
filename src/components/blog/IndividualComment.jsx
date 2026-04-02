import React from 'react'

function IndividualComment({name, content}) {
  //console.log(value);
return (
    <div className='comment'>
        <p className='comment'>Name: {name}</p>
        <p className='comment'>Comment: "{content}"</p>
    </div>
  )
}

export default IndividualComment