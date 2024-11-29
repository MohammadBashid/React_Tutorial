//  import React from 'react'

//  export default function Props()
//  {
//      return(
//          <div>
//              <h1>Hello Props Component</h1>
//          </div>
//      )
//  }




// TO PASS DATA

// import React from 'react'

// export default function Props(Props)
// {
//     return(
//         <div>
//         <h1>{Props.text}</h1>
//         </div>
//     )
// }





// TO ADD DATA IN NAME

// import React from 'react'

// export default function Props(Props)
// {
//     return(
//         <div>
//         <h1>{Props.text.name}</h1>
//         </div>
//     )
// }



// TO ADD MORE DATA


// import React from 'react'

// export default function Props(Props)
// {
//     return(
//         <div>
//         <h1>{Props.text.name}</h1>
//         <h1>{Props.data}</h1>
//         </div>
//     )
// }



import React from 'react'

export default class Props extends React.Component
{   
    render()
    {
        return(
            <div>
                <h1>{this.props.data}</h1>
                <h1>{this.props.text.name}</h1>
            </div>
       )
    }
}