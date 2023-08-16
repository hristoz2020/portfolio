import { Box, Typography } from "@mui/material";
import { FC } from "react";
import SkillCard from "../components/SkillCard";
import { skillsList } from "../constants/skillsList";

const About: FC = () => {
	return (
		<Box sx={{ borderTop: 1, borderBottom: 1, p: 12 }} id="/about">
			<Typography align="center" variant="h5">
				Skills:
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					maxWidth: 900,
					margin: "0 auto",
				}}
			>
				{skillsList.map((skill) => (
					<SkillCard
						name={skill.skill}
						image={skill.image}
						key={skill.id}
					/>
				))}
			</Box>
		</Box>
	);
};

export default About;
