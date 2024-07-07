import React from "react";
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
        {/* <User location={"meerut"} /> */}
        <UserClass name={"Utsav Goel"} />
      </div>
    );
  }
}

export default About;
