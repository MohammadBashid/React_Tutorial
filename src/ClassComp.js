import React from 'react'

class ClassComp extends React.Component{
   constructor()
   {
    super()
   }
   componentDidMount()
   {
       console.warn("called lifecycle")
   }
   render()
   {
      return(
        <div>
            <h1>Start from Class component</h1>
        </div>
      )
   }
}

export default ClassComp;
