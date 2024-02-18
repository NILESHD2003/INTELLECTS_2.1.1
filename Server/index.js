const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { cloudinaryConnect } = require('./config/cloudinary');
const database = require('./config/database')
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
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

database.connect();
cloudinaryConnect();

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});
