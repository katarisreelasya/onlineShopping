import React from 'react'

const WomenColl = (props) => {
    const{title, image1,image2,image3,image4,image5,image6,image7,image8,image9 }=props.women
    return (
      <div>
        <h2>{title}</h2>
        <div>
        <img src="shop/wom banner2.png" alt="" />
        </div>
        <div className='w-45 h-66 flex gap-10 px-10 py-5'>
          <img src={image1} alt={title} />
          <img src={image2} alt={title} />
          <img src={image3} alt={title} />
          <img src={image4} alt={title} />
          <img src={image5} alt={title} />
          <img src={image6} alt={title} />
          <img src={image7} alt={title} />
          <img src={image8} alt={title} />
          <img src={image9} alt={title} />
        </div>
      </div>
    )
}

export default WomenColl