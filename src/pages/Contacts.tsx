import { useEffect, useRef, useState } from "react";
import {
	Button,
	Grid,
	Container,
	Typography,
	Stack,
	Alert,
	IconButton,
} from "@mui/material";
import { Send, Close } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import FormInput from "../components/FormInput";

const initialState = {
	name: "",
	email: "",
	message: "",
};

const Contacts = () => {
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState<any>(initialState);
	const [isSuccessfullReceived, setIsSuccessfullReceived] =
		useState<boolean>(false);
	const [isFailedReceive, setIsFailedReceive] = useState<boolean>(false);
	const form = useRef<any>();

	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newErrors: { [key: string]: string } = {};
		if (!formData.name) {
			newErrors.name = "Please enter a name";
		}
		if (!formData.email) {
			newErrors.email = "Please enter an email";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Invalid email address";
		}
		if (!formData.message) {
			newErrors.message = "Please enter a message";
		}

		if (Object.keys(newErrors).length === 0) {
			emailjs
				.sendForm(
					"service_qss3lqk",
					"template_s8s0sok",
					form.current,
					"cynXBX5-y0dnGZx3F"
				)
				.then(
					(result) => {
						console.log(result.text);
						setIsSuccessfullReceived(true);
					},
					(error) => {
						console.log(error.text);
						setIsFailedReceive(true);
					}
				);
			setFormData(initialState);
			setErrors({});
		} else {
			setErrors(newErrors);
		}
	};	

	return (
		<>
			{isSuccessfullReceived && (
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
									setIsSuccessfullReceived(false);
								}}
							>
								<Close fontSize="medium" color="inherit" />
							</IconButton>
						}
					>
						Your message has been successfully received!
					</Alert>
				</Stack>
			)}
			{isFailedReceive && (
				<Stack
					sx={{
						width: "100%",
						position: "fixed",
						top: 0,
						left: 0,
					}}
					spacing={2}
					data-aos="flip-up"
				>
					<Alert
						severity="error"
						sx={{ backgroundColor: "darkgray", boxShadow: 10 }}
						action={
							<IconButton
								aria-label="close"
								size="small"
								onClick={() => {
									setIsFailedReceive(false);
								}}
							>
								<Close fontSize="medium" color="inherit" />
							</IconButton>
						}
					>
						Oops something went wrong. Try again later!
					</Alert>
				</Stack>
			)}
			<Container
				sx={{
					py: 10,
				}}
				maxWidth="sm"
				data-aos="flip-left"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="2000"
				id="/contacts"
			>
				<Typography
					variant="h5"
					align="center"
					fontFamily={"monospace"}
					gutterBottom
				>
					Contact me:
				</Typography>
				<form ref={form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<FormInput
							name="name"
							formData={formData}
							errors={errors}
							setFormData={setFormData}
							isMessageField={false}
						/>
						<FormInput
							name="email"
							formData={formData}
							errors={errors}
							setFormData={setFormData}
							isMessageField={false}
						/>
						<FormInput
							name="message"
							formData={formData}
							errors={errors}
							setFormData={setFormData}
							isMessageField={true}
						/>
					</Grid>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						endIcon={<Send />}
						sx={{
							fontFamily: "monospace",
							fontSize: "14px",
							mt: 2,
						}}
						fullWidth
					>
						Send
					</Button>
				</form>
			</Container>
		</>
	);
};

export default Contacts;
