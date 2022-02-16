import React, {FC} from "react";
import "./Header.css";
import kingLongWhiteText from "../../assets/king-kong-white-text.png";
import whiteHighlight from "../../assets/king-kong-white-highlight.png";
import {useTranslation} from "react-i18next";
import i18 from "../../translations/i18";

interface IProps {
}

const Header: FC<IProps> = () => {
	const {t, i18n} = useTranslation(['common']);

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark hdr" style={{ fontSize: 20 }}>
				<div className="container">
					<a className="navbar-brand" href="/">
						<img src={whiteHighlight} height="60" alt="logo"/>
						<img src={kingLongWhiteText} height="60" className="ps-2" alt="text"/>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
									aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">

						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link text-uppercase text-white"
									 href="contacts">
									{t("header:contacts")}
								</a>
							</li>
							<li className="nav-item me-5">
								<a className="nav-link text-uppercase text-white" href="#">{t("header:pricing")}</a>
							</li>

							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle text-white"
									 role="button"
									 data-bs-toggle="dropdown" aria-expanded="false">
									{i18n.language?.toLocaleUpperCase()}
								</a>
								<ul className="dropdown-menu dropdown-menu-dark drpdwn-black drpdwn-sm-menu" style={{minWidth: 28}}>
									<li>
										<a className="dropdown-item" href="#"
											 onClick={() => i18n.changeLanguage('en')}>
											English
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#"
											 onClick={() => i18n.changeLanguage('ru')}>
											Русский
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#"
											 onClick={() => i18n.changeLanguage('ro')}>
											Romana
										</a>
									</li>
								</ul>
							</li>
						</ul>

					</div>
				</div>
			</nav>

			{/*<div className="hdr">*/}
			{/*	<div className="container hdr-cont d-flex justify-content-between align-content-center">*/}

			{/*		<div className="d-flex align-items-center responsive-content">*/}
			{/*			<a className="logo-link me-4" href={"/home"}>*/}
			{/*				<img src={whiteHighlight} height="60" alt="logo"/>*/}
			{/*				<img src={kingLongWhiteText} height="60" className="ps-2" alt="text"/>*/}
			{/*			</a>*/}

			{/*			<div className="hdr-right-content">*/}
			{/*				Hello*/}
			{/*			</div>*/}
			{/*		</div>*/}

			{/*		<div className="d-flex align-items-center">*/}
			{/*			<div className="dropdown">*/}
			{/*				<button className="btn btn-secondary dropdown-toggle bg-transparent dropdown-toggle "*/}
			{/*								style={{width: 60}}*/}
			{/*								type="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
			{/*					{i18.language.toLocaleUpperCase()}*/}
			{/*				</button>*/}

			{/*				<ul className="dropdown-menu dropdown-menu-dark drpdwn">*/}
			{/*					<li>*/}
			{/*						<a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage('en')}>*/}
			{/*							EN*/}
			{/*						</a>*/}
			{/*					</li>*/}
			{/*					<li>*/}
			{/*						<a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage('ru')}>*/}
			{/*							RU*/}
			{/*						</a>*/}
			{/*					</li>*/}
			{/*					<li>*/}
			{/*						<a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage('ro')}>*/}
			{/*							RO*/}
			{/*						</a>*/}
			{/*					</li>*/}
			{/*				</ul>*/}
			{/*			</div>*/}

			{/*		</div>*/}

			{/*	</div>*/}
			{/*</div>*/}
		</>
	);
}

export default Header;