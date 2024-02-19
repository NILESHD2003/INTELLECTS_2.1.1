const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blog");
const categoryRoutes = require("./routes/category");

const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000;

database.connect();
cloudinaryConnect();

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/category", categoryRoutes);


app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});