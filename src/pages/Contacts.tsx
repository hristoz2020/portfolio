import { useState } from "react";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { Email, Person, Send } from "@mui/icons-material";

const Contacts = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState<any>({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const newErrors: { [key: string]: string } = {};
		if (!name) {
			newErrors.name = "Please enter a name";
		}
		if (!email) {
			newErrors.email = "Please enter an email";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email = "Invalid email address";
		}
		if (!message) {
			newErrors.message = "Please enter a message";
		}

		if (Object.keys(newErrors).length === 0) {
			console.log("Send", { name, email, message });
			setName("");
			setEmail("");
			setMessage("");
			setErrors({});
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<Container
			sx={{
				p: 10,
			}}
			maxWidth="sm"
			id="/contacts"
		>
			<Typography
				variant="h5"
				align="center"
				fontFamily={"monospace"}
				gutterBottom
			>
				Contacts:
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							label="Name"
							variant="outlined"
							fullWidth
							value={name}
							onChange={(e) => setName(e.target.value)}
							error={Boolean(errors.name)}
							helperText={errors.name}
							InputProps={{
								startAdornment: (
									<Person sx={{ width: "30px", pr: 1 }} />
								),
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Email"
							variant="outlined"
							fullWidth
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							error={Boolean(errors.email)}
							helperText={errors.email}
							InputProps={{
								startAdornment: (
									<Email sx={{ width: "30px", pr: 1 }} />
								),
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Message"
							variant="outlined"
							multiline
							rows={4}
							fullWidth
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							error={Boolean(errors.message)}
							helperText={errors.message}
						/>
					</Grid>
				</Grid>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					endIcon={<Send />}
					sx={{ fontFamily: "monospace", fontSize: "14px", mt: 2 }}
					fullWidth
				>
					Send
				</Button>
			</form>
		</Container>
	);
};

export default Contacts;
