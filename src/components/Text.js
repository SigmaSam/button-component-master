import React, { useState,useEffect } from 'react'

function Text({color,data}) {
    /* State Definition*/   
    const [button, setButton] = useState({
        description: data.description,
        style: data.style
    });

    /* Funtions*/
    useEffect(() => {
        setButton(prevState => ({
            ...prevState,
          style: {
            ...prevState.style,
            color: color
          }     
        }));
    },[color])

    const hoverIn = (e) => {
        setButton(prevState => ({
            ...prevState,
            description: "&:hover,&:focus"
        }))
    }

    const hoverOut = (e) => {
        setButton(prevState => ({
            ...prevState,
            description: "<Button variant=”text” />"
        }))
    }

  return (
    <div className="button-box">
            <p>{button.description}</p>
            <button 
                name='defButton'
                style={button.style}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
            >
                {data.title}
            </button>
        </div>
  )
}

export default Text