import "../styles/homepage.css";
import Header from "../components/header";
import Login from "./login";


export default function HomePage() {
    return (
        <div className="homepage">
            <Header />

            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <Login />
            

        </div>

    )
}