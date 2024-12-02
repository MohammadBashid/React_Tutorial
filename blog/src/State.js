import React from 'react'

export default class Profile extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:' State Component',
            email:'hellostate@test.com',
            count:0
        }
    }

    updateState()
    {
        this.setState({
            name:'Bruce',
            count:this.state.count+1
        })  
    }

    render()  
    {
        console.warn("render");    // To check the render, just go to Inspect.
        return(
            <div>
                <h1>Count {this.state.count}</h1>
                <h1>Email: {this.state.email}</h1>
                <button onClick={()=>{this.updateState()}} >updateState</button>
            </div>
        )
    }
}



// Update State Button


// import React from 'react'

// export default class profile extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.state={
//             name:' State Component',
//             email:'hellostate@test.com'
//         }
//     }
//     updateState()
//     {
//         this.setState({
//             name:'Bruce'
//         })  
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>Hello{this.state.name}</h1>
//                 <h1>Email: {this.state.email}</h1>
//                 <button onClick={()=>{this.updateState()}} >updateState </button>
//             </div>
//         )
//     }
// }






//   State in Data Add

// import React from 'react'

// export default class profile extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.state={
//             name:' State Component',
//             email:'hellostate@test.com'
//         }
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>Hello{this.state.name}</h1>
//                 <h1>Email: {this.state.email}</h1>
//             </div>
//         )
//     }
// }




// State in this.

// import React from 'react'

// export default class profile extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.state={
//             name:' State Component'
//         }
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>Hello{this.state.name}</h1>
//             </div>
//         )
//     }
// }




// State 

// import React from 'react'

// export default class profile extends React.Component
// {
//     render(
//         {
//             return(
//                 <div>
//                 <h1>Hello State</h1>
//                 </div>
//             )
//         }
//     )
// }