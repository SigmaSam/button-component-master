import React, { useState,useEffect }from 'react'

function Outline({color,data}) {
    /* State Definition*/   
    const [button, setButton] = useState({
        description: data.description,
        style: {
            "background": "none",           
        }
    });

    /* Funtions*/
    useEffect(() => {
        setButton(prevState => ({
            ...prevState,
            style: {
            ...prevState.style,
            outline:`solid 2px ${color}`,
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
            description: "<Button variant=”outline” />"
        }))
    }

  return (
    <div className="button-box">
          <p>{button.description}</p>
          <button
            style={button.style}
            name='outButton'
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            {data.title}
          </button>
        </div>
  )
}

export default Outline