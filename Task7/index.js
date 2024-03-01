const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.post("/api/submitForm", (req, res) => {
	const formData = req.body;
	console.log(formData); // You can handle the form data here
	res.json({ message: "Form data received successfully!" });
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
