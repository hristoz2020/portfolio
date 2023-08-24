import { Box, Link, Typography } from "@mui/material";
import { EducationProps } from "../constants/educationList";

const EducationCard = ({ education }: { education: EducationProps }) => (
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
				{education?.name[1]}
			</Typography>
			<Typography variant="body2" fontFamily={"monospace"}>
				<Link
					href={education?.link}
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
					{education?.name[0]}
				</Link>
			</Typography>
		</Box>
		<img src={education?.image} width="100px" />
	</Box>
);

export default EducationCard;
