import { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Footer from "./components/Footer";
import ButtonToScrollTop from "./components/ButtonToScrollToTop";

function App() {
	const initialDarkMode = localStorage.getItem("darkMode") === "true";
	const [darkMode, setDarkMode] = useState<boolean>(initialDarkMode);

	const toggleDarkMode = () => {
		const switchMode = !darkMode;
		setDarkMode(switchMode);
		localStorage.setItem(
			"darkMode",
			switchMode.toString() as "true" | "false"
		);
	};

	useEffect(() => {
		if (localStorage.getItem("darkMode") === null) {
			localStorage.setItem("darkMode", "false");
		}
	}, []);

	const theme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navigation toggleDarkMode={toggleDarkMode} />
			<ButtonToScrollTop />
			<Home />
			<About />
			<Projects />
			<Contacts />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
