// import { useState } from "react";
import "../styles/header.css";

export default function Header() {

//     const [style, setStyle] = useState("none")

//     function handleDisplay(){
//     if(style === "none"){
//         setStyle("block");
//     }else{
//         setStyle("none");
//     }
//     }

    return (
        <div className="headerBox">
            <div className="img-box">
              
            </div>
            <div className="dropdownBox">
                <div className="dropbox">
                    <select className="form-select">
                        <option>English</option>
                        <option> हिन्दी</option>
                    </select>
               <button type="button" className="btn "> Sign In</button>
                </div>
            </div>
        </div>
    )
}