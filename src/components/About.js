import { render } from "react-dom";
import User from "./User"
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component{
  constructor(props)
  {
    super(props)
    //console.log("Parent constructor called")
  }

  componentDidMount(){
    //console.log("Parent componentDidMount called")
  }


  render()
  {
    //console.log("Parent render called")
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"Ankit"} designation={"SDE2"}/>
      </div>
  )
  }
}

export default About;

//Suppose there were two UserClass component in the above div,so how the lifecycle methods will be called,
//The lifecycle methods will be called in the below order
// 1.Parent constructor
// 2.Parent render
// 3.UserClass1 constructor
// 4.UserClass1 render
// 5.UserClass2 constructor
// 6.UserClass2 render
// 7.UserClass1 componentDidMount
// 8.UserClass2 componentDidMount
// 9.Parent componentDidMount
//From step 1 to 6 react is performing batch rendering which will indirectly optimize the performance.



