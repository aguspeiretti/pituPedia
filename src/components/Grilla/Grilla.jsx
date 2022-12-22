import React, { useState } from 'react'
import "./grilla.css"
import vaca from "../../assets/sonidos/animales/vaca.mp3"

const Grilla = ({img}) => {
    
  const [audio, setAudio] = useState()

  let sound = new Audio(audio);

  sound.play()

  const rep =(e)=>{

    const sonido = img.filter(el => el.id === e.target.id)

    setAudio(sonido[0].sonido)
   
  }

  return (
    <div className='grilla-container'>

        <div className="img-container">
           <>
            {
                img.map(image =>(
                    <div className="img-container">
                        <button onClick={rep}><img id={image.id} src={image.img} alt="" /></button>
                    </div>
                ))
            }
           </>
        </div>

    </div>
  )
}

export default Grilla