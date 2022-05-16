import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styling from '../assets/styling.json'

function  Buttons() {
  const buttons = styling.map((item) => {
    return (
      <div style={item.buttonSquare} key={item.id}>
        <p style={item.descriptionStyle}>{item.description}</p>
        <button       
          style={item.buttonStyle}
        >
        { item.iconLeft ? <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /> : null }
          Default
        { item.iconRight ? <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /> : null }
        </button>
      </div>
    )      
  });
  
  return (
    <div>
      <p className="button-title">Buttons</p>
      <div className="button-container">
        {buttons}
      </div>
    </div>    
  )
}

export default  Buttons