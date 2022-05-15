import React from 'react'
import styling from '../assets/styling.json'

function  Buttons() {
  const buttons = styling.map((item) => {
    return (
      <div className="button-square" key={item.id}>
        <p style={item.descriptionStyle}>{item.description}</p>
        <button       
          style={item.buttonStyle}
        >
          Default
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