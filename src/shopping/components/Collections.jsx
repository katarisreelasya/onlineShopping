import React from 'react'

const Collections = (props) => {
  const{title, image1,image2,image3,image4,image5,image6,image7,image8,price1,price2,price3,price4,price5,price6,price7,price8 }=props.men
  
  return (
    <div>
      <h2>{title}</h2>
      <div className='flex'>
        <img src={image1} alt={title} className='  px-10 gap-10 w-65 h-60'/>
        <img src={image3} alt={title} className='  px-10 gap-10 w-65 h-60' />
        <img src={image4} alt={title} className='  px-10 gap-10 w-65 h-60'/>
        <img src={image5} alt={title} className='  px-10 gap-10 w-65 h-60' />
        <img src={image6} alt={title} className='  px-10 gap-10 w-65 h-60'/>
        <img src={image7} alt={title} className='  px-10 gap-10 w-65 h-60'/>
        <img src={image2} alt={title} className='  px-10 gap-10 w-65 h-60'/>
        <img src={image8} alt={title} className='  px-10 gap-10 w-65 h-60'/>
      </div>
      <div className='flex px-16 py-4 gap-20'>
          <h1>{price1}</h1>
          <h1>{price2}</h1>
          <h1>{price3}</h1>
          <h1>{price4}</h1>
          <h1>{price5}</h1>
          <h1>{price6}</h1>
          <h1>{price7}</h1>
          <h1>{price8}</h1>
      </div>

    </div>
  )
}

export default Collections