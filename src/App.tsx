import { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	const theme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navigation toggleDarkMode={toggleDarkMode} />
			<Home />
			<About />
			<Projects />
			<Contacts />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
