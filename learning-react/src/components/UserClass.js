import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // we can  access props
    super(props); // this keyword use to call the constructor of parent class.
    this.state = {
      // this method used for update state variable and local.
      count: 1,
      count1 : 2,  
      userInfo : {
        name : "Dummy",
        location : "default",
      },
    };
  }
async  componentDidMount(){
   const data = await fetch("https://api.github.com/users/Utsav242");
   const jsonData = await data.json();

   this.setState({
    userInfo: jsonData,
   });
   console.log(jsonData)
}

componentDidUpdate(){
    console.log("component did update")
}
componentWillUnmount(){
    console.log("will unamount")  // whenever change page that fun are called.
}
  render() {
    const { name } = this.props; // Destructuring in class comp
    const {location} = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h2>{this.props.name}</h2> */}
        <h1>count : {this.state.count}</h1>
        <button onClick={()=>{
           this.setState({
            count : this.state.count + 1,
            // count1 : this.state.count1 + 1
           })
        }}>click</button>
        <h1>count : {this.state.count1}</h1>
        <h2>{name}</h2>
        <h3>CLASS BASED Component</h3>

        {/* for api call */}

        <h2>{this.state.userInfo.login}</h2>
        <img></img>
      </div>
    );
  }
}

export default UserClass;
