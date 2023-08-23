import { FC, useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import SkillCard from "../components/SkillCard";
import { skillsList } from "../constants/skillsList";
import Aos from "aos";
import "aos/dist/aos.css";

const About: FC = () => {
	useEffect(() => {
		Aos.init({ duration: 2500 });
	});

	return (
		<Box
			sx={{ borderTop: 1, borderBottom: 1, p: 12 }}
			id="/about"
		>
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
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						border: 1,
						borderRadius: 2,
						boxShadow: 8,
						my: 1,
						p: 2,
					}}
					data-aos="zoom-in"
				>
					<Box>
						<Typography variant="h6" fontFamily={"monospace"}>
							Programming Education with JavaScript
						</Typography>
						<Typography variant="body2" fontFamily={"monospace"}>
							<Link
								href="https://www.tugab.bg/"
								target="_blank"
								rel="noopener noreferrer"
								variant="body2"
								fontFamily="monospace"
								sx={{
									textDecoration: "underline",
									display: "block",
									mt: 2,
								}}
							>
								Software University SoftUni
							</Link>
						</Typography>
					</Box>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Logo_Software_University_%28SoftUni%29_-_blue.png/535px-Logo_Software_University_%28SoftUni%29_-_blue.png"
						width="100px"
					/>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						border: 1,
						borderRadius: 2,
						boxShadow: 8,
						my: 1,
						p: 2,
					}}
					data-aos="zoom-in"
				>
					<Box>
						<Typography variant="h6" fontFamily={"monospace"}>
							Master's degree of Computer Systems and Technologies
						</Typography>
						<Typography
							variant="body2"
							fontFamily={"monospace"}
							sx={{ textDecoration: "underline" }}
						>
							<Link
								href="https://www.tugab.bg/"
								target="_blank"
								rel="noopener noreferrer"
								variant="body2"
								fontFamily="monospace"
								sx={{
									textDecoration: "underline",
									display: "block",
									mt: 2,
								}}
							>
								Technical University of Gabrovo
							</Link>
						</Typography>
					</Box>
					<img
						src="https://rectors.bg/images/members/TU-GABROVO.png"
						width="110px"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
