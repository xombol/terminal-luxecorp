import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// Components
import Header from './components/Header';
import Layout from "./components/Layout";

import Start from "./page/Start";
import Develop from "./page/Develop";
import Bank from "./page/Bank";
import Educational from "./page/Educational";
import Taxi from "./page/Taxi";
import MapsTech from "./page/MapsTech";
import Technopark from "./page/Technopark";
import Insurance from "./page/Insurance";
import Marketing from "./page/Marketing";
import Creative from "./page/Creative";
import Provision from "./page/Provision";
import Portal from "./page/Portal";
import Bitrix from "./page/Bitrix";
import Amo from "./page/Amo";
import BitrixCloud from "./page/Bitrix/BitrixCloud";
import BitrixBox from "./page/Bitrix/BitrixBox";
import Feedback from './page/Feedback';


class App extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<Routes>
					<Route path="/" element={<Layout />} />
					<Route path="/start" element={<Start />} />
					<Route path="/bank" element={<Bank />} />
					<Route path="/develop" element={<Develop />} />
					<Route path="/educational" element={<Educational />} />
					<Route path="/taxi" element={<Taxi />} />
					<Route path="/insurance" element={<Insurance />} />
					<Route path="/about" element={<Technopark />} />
					<Route path="/marketing" element={<Marketing />} />
					<Route path="/creative" element={<Creative />} />
					<Route path="/provision" element={<Provision />} />
					<Route path="/portal" element={<Portal />} />
					<Route path="/bitrix" element={<Bitrix />} />
					<Route path="/bitrixCloud" element={<BitrixCloud />} />
					<Route path="/bitrixBox" element={<BitrixBox />} />
					<Route path="/amo" element={<Amo />} />
					<Route path="/feedback" element={<Feedback />} />
					<Route path="/maps" element={<MapsTech />} />
				</Routes>
			</section>
		);
	}
};

export default App;
