import "../styles/main3.css"
export default function MainBox3() {
    return (
        <div className="main-box-3">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <h1>Watch everywhere</h1>
                    <h4>
                        Stream unlimited movies and TV shows on your
                    </h4>
                    <h4>
                        phone, tablet, laptop, and TV.
                    </h4>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="ImgBox">
                        <video autoPlay muted loop>
                            <source src="images/vdo2.m4v" ></source>
                        </video>
                        <div className="overlay-image">
                            <img alt="name" src="images/tv2.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}