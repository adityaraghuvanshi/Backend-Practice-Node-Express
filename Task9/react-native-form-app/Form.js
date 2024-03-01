import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3000/api/submitForm",
				formData,
			);
			console.log(response.data);
		} catch (error) {
			console.error("Error submitting form:", error.message);
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Name"
				value={formData.name}
				onChangeText={(text) =>
					setFormData({ ...formData, name: text })
				}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={formData.email}
				onChangeText={(text) =>
					setFormData({ ...formData, email: text })
				}
			/>
			<TextInput
				style={styles.input}
				placeholder="Message"
				multiline
				numberOfLines={4}
				value={formData.message}
				onChangeText={(text) =>
					setFormData({ ...formData, message: text })
				}
			/>
			<Button title="Submit" onPress={handleSubmit} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	input: {
		marginBottom: 10,
		padding: 10,
		borderWidth: 1,
		borderColor: "#ccc",
	},
});

export default Form;
