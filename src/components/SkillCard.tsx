import { useEffect } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

const SkillCard = ({ name, image }: { name: string; image: string }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				border: 1,
				borderRadius: 2,
				boxShadow: 8,
				maxWidth: 120,
				m: 2,
			}}
			data-aos="zoom-in"
		>
			<CardMedia
				sx={{ height: 100, width: 100, m: 2 }}
				image={image}
				title={name}
			/>
			<Typography fontFamily={"monospace"}>{name}</Typography>
		</Box>
	);
};

export default SkillCard;
