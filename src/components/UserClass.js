import React from "react";
import { render } from "react-dom";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props)
       // console.log("Child constructor called")
        this.state={

            userInfo:{
                name:"default",
                location:"asia",
                bio:""
            }
            
        }

    }

    async componentDidMount()
    {
       // console.log("Child componentDidMount called")
       const data=await fetch("https://api.github.com/users/PrashantBhati001")
       const json=await data.json()
       this.setState({userInfo:json})

    //   this.timer= setInterval(()=>{console.log("componentdidmount called")},1000)   
    }

    componentDidUpdate()
    {
        console.log("compoenentDidupdate called")
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount called")
        // clearInterval(this.timer)
    }


    render()
    {

        //const {name,designation}=this.props
        //console.log("Child render called")
        const {name,location,bio}=this.state.userInfo
        return (
            <div className="user-info">
                <p>{name}</p>
                <p>{location}</p>
                <p>{bio}</p>
            </div>
    )
    }
}

export default UserClass;


//Order in which lifecycle methods are called
// 1.Parent constructor
// 2.Parent render
//Once parent render is completed then only parent componentDidMount will be called.
// 3.Child constructor
// 4.Child render
// 5.Child componentDidMount
// 6.Parent componentDidMount


//An API call will be made in componentDidMount

//Componentunmount is called for cleanup purpose.If there are any intervals they need to be cleared before the component 
// unmounts.