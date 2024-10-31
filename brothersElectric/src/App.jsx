import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./components/ScrollToTop";
import "preline/preline";

function App() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<div className="app-bg mx-auto">
				<div className="App">
					<Router>
						<ScrollToTop />
						<Routes>
							<Route path="/" element={<LandingPage />} />
							{/* <Route path="/path" element={<EnterHere />} />
                            <Route path="/path" element={<EnterHere />} />
                            <Route path="/path" element={<EnterHere />} />
                            <Route path="/path" element={<EnterHere />} /> */}
						</Routes>
					</Router>
				</div>
			</div>
			<footer className="">
				<Footer />
			</footer>
		</>
	);
}

export default App;
