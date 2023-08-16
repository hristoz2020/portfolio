import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => (
	<Box
		sx={{
			display: "flex",
			justifyContent: "space-around",
			p: 3,
			borderTop: 1,
		}}
		component="footer"
	>
		<Container
			maxWidth="sm"
			sx={{ display: "flex", justifyContent: "start" }}
		>
			<Typography variant="body1" color="inherit" align="center">
				{"Copyright © "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		</Container>

		<Container
			maxWidth="sm"
			sx={{ display: "flex", justifyContent: "end" }}
		>
			<Link
				href="https://github.com/hristoz2020"
				color="inherit"
				sx={{ pr: 1 }}
			>
				<GitHubIcon />
			</Link>
			<Link
				href="https://www.linkedin.com/in/hristoz-iliev-3a2807267/"
				color="inherit"
			>
				<LinkedInIcon />
			</Link>
		</Container>
	</Box>
);

export default Footer;
