import "../styles/main1.css"

export default function MainBox() {
    return (
        <div className="main-box">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div>
                        <h1>Enjoy on your TV</h1>
                        <h3>Watch on smart TVs, PlayStation, Xbox,</h3>
                        <h3>Chromecast, Apple TV, Blu-ray players and more.</h3>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="imgbox">
                        <video  autoPlay muted loop>
                            <source src="images/vdo.m4v" ></source>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}