import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

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
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
