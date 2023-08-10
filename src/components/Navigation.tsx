import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemText,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MaterialUISwitch from "./MaterialUISwitch";

interface NavigationProps {
	toggleDarkMode: () => void;
}

const routes = [
	{ id: 0, path: "/", title: "Home" },
	{ id: 1, path: "/about", title: "About" },
	{ id: 2, path: "/projects", title: "Projects" },
	{ id: 3, path: "/contacts", title: "Contacts" },
];

const Navigation: React.FC<NavigationProps> = ({ toggleDarkMode }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<AppBar position="static" color="default">
			<Toolbar>
				<CodeOutlinedIcon />
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					Portfolio
				</Typography>
				{isMobile ? (
					<IconButton
						color="inherit"
						edge="start"
						aria-label="menu"
						onClick={toggleDrawer}
					>
						<MenuIcon />
					</IconButton>
				) : (
					<>
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
					</>
				)}
				<MaterialUISwitch defaultChecked onClick={toggleDarkMode} />
			</Toolbar>
			<Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
				<List>
					{routes.map((linkItem) => (
						<ListItem
							button
							component={Link}
							to={linkItem.path}
							onClick={toggleDrawer}
							key={linkItem.id}
						>
							<ListItemText primary={linkItem.title} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</AppBar>
	);
};

export default Navigation;
