import { Box, CardMedia, Typography } from "@mui/material";

const SkillCard = ({ name, image }: { name: string; image: string }) => {
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
		>
			<CardMedia
				sx={{ height: 100, width: 100, m: 2 }}
				image={image}
				title={name}
			/>
			<Typography>{name}</Typography>
		</Box>
	);
};

export default SkillCard;
