import { Box, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projectsList } from "../constants/projectsList";

const Projects = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				py: 12,
				borderBottom: 1,
			}}
			id="/projects"
		>
			<Typography variant="h5" sx={{ pb: 4 }} fontFamily={"monospace"}>
				Projects:
			</Typography>
			{projectsList.map((project) => (
				<ProjectCard project={project} key={project.id} />
			))}
		</Box>
	);
};

export default Projects;
