import React from 'react'
import img1 from './img/car01.png'
import img2 from './img/car02.jpg'
import img3 from './img/car03.jpg'
import img4 from './img/car04.jpg'
import img5 from './img/car05.jpg'
const Home = () => {
    return (
        <div id="main">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                
                    <img className="first-slide" src={img2} alt="First slide" width="100%" height="540"></img>
                    <div className="container">
                        <div className="carousel-caption text-left">
                            <h1>Example headline.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id el0it non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="second-slide" src={img3} alt="Second slide" width="100%" height="540"></img>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="third-slide" src={img4} alt="Third slide" width="100%" height="540"></img>
                    <div className="container">
                        <div className="carousel-caption text-right">
                            <h1>One more for good measure.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div className="container marketing">

            <div className="row">
            <div className="tap-app-ride">

<div className="tap-app-ride-inner">

    <h2>Get Your Car Washed When You Want To – Not When There Is A Slot In A Long Queue</h2>

    <p>No one deserves to wait for a grooming treatment, not even your car. That is why we have included that unspoken member of your family to get a wash, wax or any other service that it requires. Your vehicle gets a 5 star treatment wherever it is.</p>
   

</div>

</div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={img2} alt="Generic placeholder " width="140" height="140"></img>
                    <h2>Highly Professional And Economical</h2>
                    <p>Our professional car washers know exactly what your vehicle needs and they will make sure that they deliver the service efficiently.</p>
                    <p>Economical on the pocket, they will leave your car gleaming just like new. Tap on the app and give your car the wash it desperately needs. Do not worry about being present to make the payment – it will be done automatically once the job is complete.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={img5} alt="Generic placeholder " width="140" height="140"></img>
                    <h2>Select Your Service, And Let Your Vehicle Experience The Pampering</h2>
                    <p>Waxing, washing, or vacuum cleaning, tyre cleaning or car polishing we give your vehicle a pampering of its lifetime, this time and every time. When you next get into it, you will sense the happiness emanating from your vehicle, feel its smile and inhale its fragrance.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={img2} alt="Generic placeholder" width="140" height="140"></img>
                    <h2>World class experience that only we can give A special treatment just for your car</h2>
                    <p>Give your vehicle the ultimate clean; leaving it shiny and feeling like it is new. Like any other family member, it too deserves some tender loving care, so that wash you treat it too will go a long way. Get your car waited upon today and see it transformed to one that you cannot recognize as yours.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Giving a glamorous meaning to “mobile” cleaning <span className="text-muted">your 4-wheeled beauty needs washing!</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src={img2} alt="Generic placeholder "></img>
                </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" src={img4} alt="Generic placeholder "></img>
                </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">The Application is the smart way of washing your car, all with your smart phone and three little taps. Tap and look for a car wash, Tap and book your ride and Tap and complete your ride. Your tap brings the driver to you for the best riding experience of your life, each one better than the previous one.No hassles of direction giving as your driver know exactly where you want to go. Payment completed via your credit card. Just sit back and enjoy your ride!</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src={img3} alt="Generic placeholder"></img>
                </div>
            </div>

            <hr className="featurette-divider"></hr>
        </div>
        </div>
    
    )
}
export default Home;