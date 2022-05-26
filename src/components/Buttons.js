/* eslint-disable default-case */
import React, { useState } from 'react'
import { GithubPicker } from 'react-color'
import styling from '../assets/styling.json'
import Default from './Default';
import Outline from './Outline'
import Text from './Text'

function  Buttons() {
/* State Definition*/    
  const [data, setData] = useState({ 
    color: "",
    default: styling[0].default,
    outline: styling[1].outline,
    text: styling[2].text  
  })
  
  /*Function Definitions*/
  const handleChangeComplete  = (color) => {
        setData(prevData => ({
          ...prevData,
          color:color.hex  
        }));         
  }

   return (
    <div>
      <div className="header">
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
      </div>
      
      <div className="buttons-container">  
        <Default
          color={data.color}
          data={data.default}
        />
        <Outline
          color={data.color}
          data={data.outline}
        />
        <Text
          color={data.color}
          data={data.text}
        />
      </div>
    </div>    
  )
}

export default  Buttons