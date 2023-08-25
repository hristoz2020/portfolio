import { Close } from "@mui/icons-material";
import { Alert, IconButton } from "@mui/material";
import { Stack } from "@mui/system";

const OnTopMessage = ({
	setIsShowMessage,
	isSuccessfullReceived,
}: {
	setIsShowMessage: any;
	isSuccessfullReceived: boolean;
}) => {
	const message = isSuccessfullReceived
		? "Your message has been successfully received!"
		: "Oops something went wrong. Try again later!";

	return (
		<Stack
			sx={{ width: "100%", position: "fixed", top: 0, left: 0 }}
			spacing={2}
			data-aos="flip-up"
		>
			<Alert
				severity="success"
				sx={{ backgroundColor: "darkgray", boxShadow: 10 }}
				action={
					<IconButton
						aria-label="close"
						size="small"
						onClick={() => {
							setIsShowMessage(false);
						}}
					>
						<Close fontSize="medium" color="inherit" />
					</IconButton>
				}
			>
				{message}
			</Alert>
		</Stack>
	);
};

export default OnTopMessage;
