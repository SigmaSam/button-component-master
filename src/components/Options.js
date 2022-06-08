import React from 'react'

function Options({data}) { 
  const buttons = data.map(item => {
    return(
      <div id={item.id} className="option-box" key={item.id}>
        <p>{item.description}</p>
        <button
          style={item.style}
        >
          {item.title}
        </button>
      </div>
    )
  });

  return (
    <div className="options-container">{buttons}</div>
  )
}

export default Options
