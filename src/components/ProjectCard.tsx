import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Project } from "../constants/projectsList";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<Card sx={{ maxWidth: 300, border: 1, m: 2 }}>
			<CardMedia
				sx={{ height: 200 }}
				image={project.image}
				title={project.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{project.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{project.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					component={Link}
					color="inherit"
					to={project.code}
				>
					GitHub
				</Button>
				{project.demo.length > 0 && (
					<Button
						size="small"
						component={Link}
						color="inherit"
						to={project.demo}
					>
						Demo
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default ProjectCard;
