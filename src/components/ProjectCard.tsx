import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Project } from "../constants/projectsList";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project }: { project: Project }) => {
	useEffect(() => {
		Aos.init({ duration: 2500 });
	});

	return (
		<Card
			sx={{ maxWidth: 400, border: 1, m: 2 }}
			data-aos={project.id % 2 === 0 ? "fade-right" : "fade-left"}
		>
			<CardMedia
				sx={{ height: 200 }}
				image={project.image}
				title={project.name}
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					fontFamily={"monospace"}
				>
					{project.name}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					fontFamily={"monospace"}
				>
					{project.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					component={Link}
					color="inherit"
					to={project.code}
					target="_blank"
				>
					<Typography fontFamily={"monospace"}>GitHub</Typography>
					<GitHubIcon sx={{ paddingLeft: "4px" }} />
				</Button>
				{project.demo.length > 0 && (
					<Button
						size="small"
						component={Link}
						color="inherit"
						to={project.demo}
						target="_blank"
					>
						<Typography fontFamily={"monospace"}>Demo</Typography>
						<VisibilityIcon sx={{ paddingLeft: "4px" }} />
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default ProjectCard;
