import React from "react";
import ReactDOM from 'react-dom/client';

// React Element

const heading =(
    <h1>Namaste React</h1>
);

// Function comp

const FunctionComp=()=>{
    return(
        <>
        <h1 className="heading"> Function component</h1>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<FunctionComp />)