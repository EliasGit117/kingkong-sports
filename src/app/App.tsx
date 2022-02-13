import React, {FC} from 'react';
import './App.css';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../themed-bootstrap.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from "react-router-dom";
import GlobalRoutes from "./routes/GlobalRoutes";

const App: FC = () => {
	return (
		<BrowserRouter>
			<div className="d-flex flex-column min-vh-100 justify-content-between">
				<header>
					<Header/>
				</header>

				<main className="flex-grow-1" style={{}}>
					<GlobalRoutes />
				</main>

				<footer>
					<Footer/>
				</footer>
			</div>
		</BrowserRouter>
	)
		;
}

export default App;
