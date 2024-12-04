import React from 'react'

export default function Functional(prop)
{
   const red=()=> {
     alert("red function called")
   }
   return <div>
        <h1 onClick={red} >{prop.text}</h1>
    </div>
}