import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SkillCard from "../components/SkillCard";
import { skillsList } from "../constants/skillsList";
import Aos from "aos";
import "aos/dist/aos.css";
import { educationList } from "../constants/educationList";
import EducationCard from "../components/EducationCard";

const About: FC = () => {
	useEffect(() => {
		Aos.init({ duration: 2500 });
	});

	return (
		<Box sx={{ borderTop: 1, borderBottom: 1, p: 12 }} id="/about">
			<Typography
				align="center"
				variant="h5"
				fontFamily={"monospace"}
				sx={{ pb: 4 }}
			>
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

			<Typography
				align="center"
				variant="h5"
				fontFamily={"monospace"}
				sx={{ py: 4 }}
			>
				Education:
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					margin: "0 auto",
					maxWidth: "580px",
				}}
			>
				{educationList.map((education) => (
					<EducationCard education={education} key={education.id} />
				))}
			</Box>
		</Box>
	);
};

export default About;
