import { Avatar, Box, Typography } from "@mui/material";
import { FC } from "react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import img from "../assets/images/image.ico";

const Home: FC = () => {
	return (
		<Box
			sx={{
				nt: 8,
				nb: 12,
				pt: 18,
				pb: 18,
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				"@media (min-width:800px)": {
					flexDirection: "row",
				},
			}}
			id="/"
		>
			<Box sx={{ p: 10}}>
				<Typography
					sx={{
						color: "inherit",
						display: "flex",
						justifyContent: "left",
                        alignItems: "center"
					}}
					variant="h4"
				>
					<WavingHandIcon color="inherit" />
					Hi, I'm Hristoz!
				</Typography>

				<Typography
					sx={{
						color: "inherit",
						display: "flex",
						justifyContent: "left",
						alignItems: "center",
					}}
					variant="h6"
				>
					I'm interested in Front-End Development.
				</Typography>
			</Box>

			<Avatar
				alt="Your Alt Text"
				src={img}
				sx={{
					width: 200,
					height: 200,
					m: "",
					borderRadius: "50%",
				}}
			/>
		</Box>
	);
};

export default Home;
