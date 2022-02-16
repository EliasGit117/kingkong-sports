import React from "react";
import help from "../../assets/help.jpeg"
import help2 from "../../assets/help-2.jpeg"
import diet from "../../assets/diet.jpg"
import "./Home.css";
import {useTranslation} from "react-i18next";

const video = require("../../assets/gym.mp4");

const Home = () => {
	const {t, i18n} = useTranslation(['common', 'header']);

	return (
		<>
			<div className="container mt-4">
				<div className="row">
					<div className="col-md-4">

						<div className="vid-container">
							<video autoPlay muted loop id="myVideo" className="rounded" style={{width: "100%", zIndex: -100}}>
								<source src={video} type="video/mp4"/>
							</video>

							<div className="overlay d-block d-sm-block d-md-none">
								<div className="p-5 text-center">
									<h1 className="display-1">
										ION RIPA
									</h1>
									<h3 className="mt-4">
										Personal trainer with more than 15 years of experience.
										A great expert in many categories. Can help you to build your body and make you strong,
										lose weight or make you more tough.
									</h3>
									<button className="red-btn mt-5">ENROLL</button>
								</div>
							</div>
						</div>

					</div>
					<div className="col-md-8 d-none d-sm-none d-md-block">
						<h1 className="display-1">
							ION RIPA
						</h1>
						<h3>
							Personal trainer with more than 15 years of experience.
							A great expert in many categories. Can help you to build your body and make you strong,
							lose weight or make you more tough.
						</h3>
						<button className="red-btn mt-2">ENROLL</button>
					</div>
				</div>
			</div>

			<div className="bg-black pt-4 pb-4 mt-4 text-white">
				<div className="container text-uppercase text-center">
					<h2>A professional help from a one of the strongest trainers in the town</h2>
				</div>
			</div>

			<div id="carouselTwo" className="carousel container slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="5000">
						<img src={diet} className="d-block w-100 img-fluid"/>
						<div className="carousel-caption dark-blur-bg text-uppercase">
							<h5>You can now order a special diet for you</h5>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="5000">
						<img src={help} className="d-block w-100 img-fluid"/>
						<div className="carousel-caption dark-blur-bg text-uppercase">
							<h5>A unique approach for every client</h5>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="5000">
						<img src={help2} className="d-block w-100 img-fluid"/>
						<div className="carousel-caption dark-blur-bg text-uppercase">
							<h5>Effective trainings for getting stronger physically and visually</h5>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselTwo"
									data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselTwo"
									data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>

			<div className="container mt-4 mb-5">

				<div className="row">
					<div className="col-md-6 mt-4">

						<div className="card w-100 bg-black border-white text-center shadow-sm"
								 style={{borderRadius: 0, minHeight: 200}}>
							<div className="card-body">
								<h3 className="card-title">Enroll on personal training</h3>
								<p className="card-text">
									A personal training with me in gym
								</p>
								<button className="red-btn">ENROLL</button>
							</div>
						</div>

					</div>

					<div className="col-md-6 mt-4">

						<div className="card w-100 bg-black border-white text-center shadow-sm"
								 style={{borderRadius: 0, minHeight: 200}}>
							<div className="card-body">
								<h3 className="card-title">Special title treatment</h3>
								<p className="card-text">
									A diet based on your request and on your body features
								</p>
								<button className="red-btn">ORDER</button>
							</div>
						</div>

					</div>
				</div>

			</div>
		</>
	);
}

export default Home;