
import "../styles/header.css";

export default function Header() {

    return (
        <div className="headerBox">
            <div className="rowi">
                <div className="divi">
                    <img alt="anem" className="None" src="images/netflixlogo.png"></img>
                </div>
                <div className="divi">
                <span className="bi bi-translate text-light"></span>
                    <select>
                        <option>English</option>
                        <option> हिन्दी</option>
                    </select>
                    <button className="btnn">Signin</button>
                </div>
            </div>
        </div>
    )
}