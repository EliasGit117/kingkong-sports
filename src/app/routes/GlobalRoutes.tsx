import React, {FC} from "react";
import Home from "../../pages/home/Home";
import Contacts from "../../pages/contact/Contacts";
import {Routes, Route, Navigate} from "react-router-dom";

const GlobalRoutes: FC = () => {

	return (
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route index element={<Home/>}/>
			<Route path="contacts" element={<Contacts/>}/>
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};

export default GlobalRoutes;