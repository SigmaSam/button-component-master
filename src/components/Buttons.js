/* eslint-disable default-case */
import React, { useState } from 'react'
import { GithubPicker } from 'react-color'
import Default from './Default';
import styling from '../assets/styling.json'

function  Buttons() {
/* States Definitions*/  
  

  const [outButton, setOutButton] = useState({
    description: "<Button variant=”outline” />",
    style: {
      padding:"0.5rem 1rem",
      background: "none",   
      borderRadius: "5px",   
      outline: "solid 3px #3D5AFE",
      color: "#3D5AFE"
    }
  })

  const [textButton, setTextButton] = useState({
    description: "<Button variant=”text” />",
     style: {
      padding:"0.5rem 1rem",
      background: "none",  
      borderRadius: "5px",
      color: "#3D5AFE"
     }
   })

   console.log(styling[0].default)
  const [data, setData] = useState({ 
    color: "#E0E0E0",
    default: styling[0].default
  
  })

  
  /*Function Definitions*/
  const handleChangeComplete  = (color) => {
        setData(prevData => ({
          ...prevData,
          color:color.hex  
        }));

        setOutButton(prevState => ({
          ...prevState,
          style: {
            ...prevState.style,
            outline:`solid 3px ${color.hex}`,
            color: color.hex
          }    
        }));
        setTextButton(prevState => ({
          ...prevState,
          style: {
            ...prevState.style,
            color: color.hex
          }    
        }));          
  }

  const handleHover = (e) => {    
    switch (e.target.name) {

      case 'outButton':
        if (outButton.description === "<Button variant=”outline” />")  {
          setOutButton(prevState => ({
            ...prevState,
            description: "&:hover,&:focus"
          }))
        } else if (outButton.description !== "<Button variant=”outline” />") {
          setOutButton(prevState => ({
            ...prevState,
            description: "<Button variant=”outline” />"
        }))}
        break;

      case 'textButton':
        if (textButton.description === "<Button variant=”text” />")  {
          setTextButton(prevState => ({
            ...prevState,
            description: "&:hover,&:focus"
          }))
        } else if (textButton.description !== "<Button variant=”text” />") {
          setTextButton(prevState => ({
            ...prevState,
            description: "<Button variant=”text” />"
        }))}
        break;
    }
}

   return (
    <div>
      <p className="button-title">Buttons</p>
      <div className="button-options">
        <div className="button-colors">
          <label htmlFor="color">Pick a Color</label>
          <GithubPicker
            color={data.color}
            onChangeComplete={ handleChangeComplete }
          />
        </div>
      </div>
      
      <div className="buttons-container">  
        <Default
          color={data.color}
          data={data.default}
        />

        <div className="button-box">
          <p>{outButton.description}</p>
          <button
            style={outButton.style}
            name='outButton'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            Outline
          </button>
        </div>
      
        <div className="button-box">
          <p>{textButton.description}</p>
          <button 
            style={textButton.style}
            name='textButton'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            Text
          </button>
        </div>
      </div>
    </div>    
  )
}

export default  Buttons