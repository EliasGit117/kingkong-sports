import React, {FC} from 'react';
import './App.css';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../themed-bootstrap.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from "react-router-dom";
import GlobalRoutes from "./routes/GlobalRoutes";
import {I18nextProvider} from "react-i18next";
import i18 from "../translations/i18";

const App: FC = () => {
	return (
		<I18nextProvider i18n={i18}>
			<BrowserRouter>
				<div className="d-flex flex-column min-vh-100 justify-content-between">
					<header>
						<Header/>
					</header>

					<main className="flex-grow-1" style={{}}>
						<GlobalRoutes/>
					</main>

					<footer>
						<Footer/>
					</footer>
				</div>
			</BrowserRouter>
		</I18nextProvider>
	)
		;
}

export default App;
