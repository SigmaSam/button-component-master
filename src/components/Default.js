import React,{useEffect, useState}from 'react'

function Default({color,data}) {
    console.log(data.description)
    const [defButton, setDefButton] = useState({
        description: data.description,
        style: data.style
    });

    /* Funtions*/
    useEffect(() => {
        setDefButton(prevState => ({
            ...prevState,
            style: {
              ...prevState.style,
              background: color
            }    
        }));
    },[color])
        

    const hoverIn = (e) => {
        setDefButton(prevState => ({
            ...prevState,
            description: "&:hover,&:focus"
        }))
    }

    const hoverOut = (e) => {
        setDefButton(prevState => ({
            ...prevState,
            description: "<Button />"
        }))
    }

    return (
        <div className="button-box">
            <p>{defButton.description}</p>
            <button 
                name='defButton'
                style={defButton.style}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
            >
                Default
            </button>
        </div>
    )
}

export default Default