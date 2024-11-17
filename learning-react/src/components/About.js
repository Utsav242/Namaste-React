import React from "react";
import UserContext from '../utils/UserContext';
import UserClass from "./UserClass";


class About extends React.Component {
  constructor(props) {
    //First call
    super(props);

    console.log("constructor");
  }
  componentDidMount() {
    // third call
    console.log("component method");
  }
  render() {
    // second call

    console.log("render");
    return (
      <div>
        <p>this is a class based us page</p>

        {/* user context use in class base comp */}
        <div>
          <UserContext.Consumer>
        {({loggedInUser}) => {
          <h1 className="text-xl font-bold">{loggedInUser}</h1>
        }}
          </UserContext.Consumer>

        </div>
        {/* <User location={"meerut"} /> */}
        <UserClass name={"Utsav Goel"} />
      </div>
    );
  }
}

export default About;
