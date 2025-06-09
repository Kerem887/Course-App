import React from 'react'

function Course( {course}) {
   const {id,title,description,price,link,image} = course;
  return (
    <div className='course'>
        <div>
              <img src={image} width={385} height={200} />
      <h4>{title}</h4>
      <h5 className='description'>{description}</h5>
      <h3>{price} TL</h3>
        <a href={link}> Satın Almak İçin</a>
        </div>
    </div>
  )
}

export default Course