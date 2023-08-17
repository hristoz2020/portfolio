import React, { useState } from "react";
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
import { Link } from "react-scroll";
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
				<CodeOutlinedIcon
					sx={{
						width: "30px",
						height: "40px",
						paddingRight: "4px",
						paddingTop: "2px",
					}}
				/>
				<Typography
					variant="h6"
					sx={{ flexGrow: 1 }}
					fontFamily={"monospace"}
				>
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
							<Button key={linkItem.id} color="inherit">
								<Link
									to={linkItem.path}
									smooth={true}
									duration={500}
								>
									{linkItem.title}
								</Link>
							</Button>
						))}
					</>
				)}
				<MaterialUISwitch defaultChecked onClick={toggleDarkMode} />
			</Toolbar>
			<Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
				<List>
					{routes.map((linkItem) => (
						<ListItem key={linkItem.id}>
							<Link
								to={linkItem.path}
								onClick={toggleDrawer}
								smooth={true}
								duration={500}
							>
								<ListItemText primary={linkItem.title} />
							</Link>
						</ListItem>
					))}
				</List>
			</Drawer>
		</AppBar>
	);
};

export default Navigation;
