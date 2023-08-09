import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import MaterialUISwitch from "./MaterialUISwitch";

interface NavigationProps {
	toggleDarkMode: () => void;
}

const routes = [
	{ id: 0, path: "/", title: "Home" },
	{ id: 1, path: "/projects", title: "Projects" },
	{ id: 2, path: "/contacts", title: "Contacts" },
];

const Navigation: React.FC<NavigationProps> = ({ toggleDarkMode }) => {
	return (
		<AppBar position="static" color="default">
			<Toolbar>
				<IconButton color="inherit" edge="start" aria-label="emoji">
					<CodeOutlinedIcon />
				</IconButton>

				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					Portfolio
				</Typography>
				{routes.map((linkItem) => (
					<Button
						component={Link}
						to={linkItem.path}
						color="inherit"
						key={linkItem.id}
					>
						{linkItem.title}
					</Button>
				))}
				<MaterialUISwitch
					sx={{ m: 1 }}
					defaultChecked
					onClick={toggleDarkMode}
				/>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
