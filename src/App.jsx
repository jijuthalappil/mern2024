import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Sign-In" element={<SignIn />} />
				<Route path="/Sign-Up" element={<SignUp />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}
