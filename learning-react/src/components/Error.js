import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <>
<h1>OOPs </h1>
<p>Something went wrong !</p>
<h6>{err.status}</h6>
        </>
    )
}

export default Error;