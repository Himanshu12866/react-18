import "../styles/login.css"
export default function Login(){
    return (
        <div className="login-box">
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className="input-box">
                <input type="email" placeholder="Email Address" />
                <button>Get Started <span className="bi bi-chevron-right"></span></button>
            </div>
        </div>
    )
}