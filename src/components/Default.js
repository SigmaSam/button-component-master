import React,{useEffect, useState}from 'react'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

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

    const toggleState = (e) => {
        const {name} = e.target
        setButton(prevState => ({
            ...prevState,
            [name]: !prevState[name],
        }))
    }

    const toggleIcon = (e) => {
        if (button.disabled) {return}
        const {name} = e.target;
        name ===  "iconLeft" ? setButton(prevState => ({
            ...prevState,
            iconLeft: !prevState[name],
            iconRight: false
        })) :
        setButton(prevState => ({
            ...prevState,
            iconRight: !prevState[name],
            iconLeft: false
        }))
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
               {button.iconLeft ? <FiChevronLeft  className="button-icons"/> :null}
               {data.title}
               {button.iconRight ? <FiChevronRight className="button-icons"/> : null }
            </button>
            <div className="button-variants">
                <button value={"sm"} onClick={buttonPadding}>Small</button>
                <button value={"md"} onClick={buttonPadding}>Medium</button>
                <button value={"lg"} onClick={buttonPadding}>Large</button>
                <button
                    name="disabled"
                    onClick={toggleState}
                >
                    { button.disabled ? "Enable" : "Disable" }
                </button>
                <button name="iconLeft"  onClick={toggleIcon} >Icon Left</button>
                <button name="iconRight"  onClick={toggleIcon} >Icon Right</button>
            </div>
        </div>
    )
}

export default Default