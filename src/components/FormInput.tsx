import { Email, Person } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";

const FormInput = ({
	name,
	formData,
	errors,
	setFormData,
	isMessageField,
}: {
	name: string;
	formData: any;
	errors: any;
	setFormData: React.Dispatch<
		React.SetStateAction<{
			name: string;
			email: string;
			message: string;
		}>
	>;
	isMessageField: boolean;
}) => {
	const checkIcon = (name: string) => {
		if (name === "name") {
			return <Email sx={{ width: "30px", pr: 1 }} />;
		} else if (name === "email") {
			return <Person sx={{ width: "30px", pr: 1 }} />;
		} else {
			return "";
		}
	};

	return (
		<Grid item xs={12}>
			<TextField
				label={`${name[0].toUpperCase()}${name.slice(1)}`}
				variant="outlined"
				fullWidth
				multiline={isMessageField}
				rows={isMessageField ? 4 : 0}
				value={formData.name}
				name={name}
				onChange={(e) =>
					setFormData({
						...formData,
						name: e.target.value,
					})
				}
				error={Boolean(errors.name)}
				helperText={errors.name}
				InputProps={{
					startAdornment: checkIcon(name),
				}}
			/>
		</Grid>
	);
};

export default FormInput;
