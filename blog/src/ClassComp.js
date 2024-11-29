import React from 'react'

class Profile extends React.Component{
   constructor()
   {
    super()
   }
   componentDidMount()
   {
       console.warn("called life cycle")
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
