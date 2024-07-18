import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestroMenu=(resId)=>{

    const [menuCard, setMenuCard] = useState(null)
// fetch data

useEffect(()=>{
fetchData();
}, []);

const fetchData= async () =>{
    const data = await fetch(MENU_API +  resId);
    const json= await data.json();
    setMenuCard(json?.data);
    console.log(json)
}

    return menuCard;
}
export default useRestroMenu;