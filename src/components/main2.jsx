import "../styles/main2.css"

export default function MainBox2() {
    return (
        <div className="main-box2">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="img-box">
                        <div className="ImgBox">
                            <div className="row">
                                <div className="col-4">
                                    <img alt="things" src="images/things.png" />
                                </div>
                                <div className="col-6">
                                    <p>Stranger Things</p>
                                    <span>Downloading...</span>
                                </div>
                                <div className="col-2">
                                    <img alt="gif" src="images/gif.gif"/>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 col-sm-12">
                    <div>
                        <h1>Download your shows</h1>
                        <h1>
                            to watch offline
                        </h1>
                        <h3>Save your favourites easily and always have</h3>
                        <h3>something to watch.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}