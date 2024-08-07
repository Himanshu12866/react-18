import "../styles/header.css";

export default function Header() {
    return (
        <div className="headerBox">
            <div className="img-box">
              
            </div>
            <div>
                <div className="dropbox">
                    <select className="form-select">
                        <option><i className="bi bi-list bg-dark"></i>English</option>
                        <option>Hindi</option>
                    </select>
                </div>
                <div></div>
            </div>
        </div>
    )
}