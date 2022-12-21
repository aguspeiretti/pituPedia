import React from 'react'
import "./grilla.css"

const Grilla = ({img , sounds}) => {
    console.log(img)
  return (
    <div className='grilla-container'>

        <div className="img-container">
           <>
            {
                img.map(image =>(
                    <div className="img-container">
                        <img src={image} alt="" />
                    </div>
                ))
            }
           </>
        </div>

    </div>
  )
}

export default Grilla