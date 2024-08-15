import "../styles/login.css"
export default function Login() {
    function ClickMe(e) {
      alert(`
        
        BUtton Id : ${e.target.id} 
        Button className : ${e.target.className} 
        X Position : ${e.clientX} 
        Y Position : ${e.clientY} 

        `)
    }
    return (
        <div className="login-box">
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className="input-box">
                <input required type="email" placeholder="Email Address" />
                <button id="BtnId" className="BtnClassName" onClick={ClickMe}>Get Started <span className="bi bi-chevron-right"></span></button>
            </div>
        </div>
    )
}