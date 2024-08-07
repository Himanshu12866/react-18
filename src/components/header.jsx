import "../styles/header.css";

export default function Header() {
    return (
        <div className="headerBox">
            <div className="img-box">
              
            </div>
            <div className="dropdownBox">
                <div className="dropbox">
                    <select className="form-select">
                        <option><i className="fa fa-facebook"></i>English</option>
                        <option>Hindi</option>
                    </select>
               <button type="button" className="btn ">Sign In</button>
                </div>
            </div>
        </div>
    )
}