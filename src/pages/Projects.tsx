import { Box } from "@mui/material";
import { FC } from "react";
import ProjectCard from "../components/ProjectCard";
import { projetcsList } from "../constants/projectsList";

const Projects: FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
                alignItems: "center",
				flexDirection: "column",
				pt: 12,
			}}
		>
			{projetcsList.map((project) => (
				<ProjectCard project={project} key={project.id} />
			))}
		</Box>
	);
};

export default Projects;
