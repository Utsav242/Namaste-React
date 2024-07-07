import { useState } from "react";

const User=({location})=>{
const [count] = useState(0);
const [count1] = useState(1);

    return(
        <div className="user-card">
            <h1>count:{count}</h1>
            <h1>count:{count1}</h1>
        <h2>Utsav Goel</h2>
        <h3>Location : {location}</h3>
        </div>
    )
}

export default User;