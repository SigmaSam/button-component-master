import React,{useEffect, useState}from 'react'
import Left from '../assets/left.svg'
import Right from '../assets/right.svg'

function Default({color,data}) {
   
    /* State Definition*/   
    const [button, setButton] = useState({
        description: data.description,
        style: data.style,
        disabled: data.disabled,
        disStyle: data.disStyle,
        iconLeft: data.iconLeft,
        iconRight: data.iconRight,
    });
    console.log(data.iconLeft)
    console.log(data.iconRight)
    /* Funtions*/
    useEffect(() => {
        setButton(prevState => ({
            ...prevState,
            style: {
              ...prevState.style,
              background: color
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
            description: data.description
        }))
    }

    const toggleDisable = (e) => {
        setButton(prevState => ({
            ...prevState,
            disabled: !prevState.disabled
        }))
    }

    const toggleIcons = (e) => {
   
        switch (e.target.value) {
            case "right":
             
                setButton(prevState => ({
                    ...prevState,
                    iconLeft: false,
                    iconRight: true
                }))
            break
            case "left":
                setButton(prevState => ({
                    ...prevState,
                    iconLeft: true,
                    iconRight: false
                }))
            break
            default:
                setButton(prevState => ({
                    ...prevState,
                    iconLeft: false,
                    iconRight: false
                }))
        }
    }

    const buttonPadding = (e) => {
        switch (e.target.value) {
            case "sm":
                setButton(prevState => ({
                    ...prevState,
                    style:{
                        ...prevState.style,
                        padding: "0.3rem 0.8rem"
                        }
                }))
                break

            case "md":
                setButton(prevState => ({
                    ...prevState,
                    style:{
                        ...prevState.style,
                        padding: "0.5rem 1rem"
                        }
                }))
                break

            case "lg":
                setButton(prevState => ({
                    ...prevState,
                    style:{
                        ...prevState.style,
                        padding: "0.7rem 1rem"
                        }
                }))
                break

            default: 
                setButton(prevState => ({
                    ...prevState,
                    style:{
                        ...prevState.style,
                        padding: "0.5rem 1rem"
                    }
                }))
        }
    }


    return (
        <div className="button-box">
            <p>{button.description}</p>
            <button                
                style={ button.disabled ? button.disStyle : button.style}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
            >
               {data.iconLeft ? <img src={Left} alt="Left"/> : null}
               {data.title}
               {data.iconRight ? <img src={Right} alt="Right"/> : null}
            </button>
            <div className="button-variants">
                <button value={"sm"} onClick={buttonPadding}>Small</button>
                <button value={"md"} onClick={buttonPadding}>Medium</button>
                <button value={"lg"} onClick={buttonPadding}>Large</button>
                <button onClick={toggleDisable}>{ button.disabled ? "Enable" : "Disable" }</button>
                <button value={"left"} onClick={toggleIcons} >Icon Right</button>
                <button value={"right"} onClick={toggleIcons} >Icon Left</button>
            </div>
        </div>
    )
}

export default Default