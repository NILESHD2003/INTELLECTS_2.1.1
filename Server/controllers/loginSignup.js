const bcrypt = require("bcrypt");
const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");
const Profile = require("../models/Profile");
const Startup = require("../models/Startup");

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      displayName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
      gender,
    } = req.body;

    //   data validation
    if (
      (!firstName || !lastName || !email || !displayName,
      !password || !confirmPassword || !otp || !gender || !accountType)
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    //   confirm pass
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match. Please try again.",
      });
    }

    //   existing user check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // latest OTP
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log(response);
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    // Hash - password
    const hashedPassword = await bcrypt.hash(password, 10);
    var user;

    if (accountType === "Startup") {
      const startup = await Startup.create({
        orgName: null,
        links: [],
        about: null,
        est: null,
        size: null,
        founder: null,
        coFounders: null,
      });
      user = await User.create({
        firstName,
        lastName,
        email,
        displayName,
        contactNumber,
        password: hashedPassword,
        upvotedBlogs: [],
        gender,
        accountType,
        followers: [],
        blogsPending: [],
        userDetails: null,
        startupDetails: startup._id,
        image: "",
      });
    } else {
      const profile = await Profile.create({
        about: null,
        skills: null,
        interest: null,
        links: [],
        city: null,
        country: null,
        experience: [],
        education: [],
      });
      user = await User.create({
        firstName,
        lastName,
        email,
        displayName,
        contactNumber,
        password: hashedPassword,
        upvotedBlogs: [],
        gender,
        accountType,
        followers: [],
        blogsPending: [],
        userDetails: profile._id,
        startupDetails: null,
        image: "",
      });
    }

    //creating DB entry

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
      error: e.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // data validate
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "Username or Password Field Missing",
      });
    }
    // Finding and auth user in DB
    const user = await User.findOne({ email }).populate(
      "userDetails startupDetails"
    );

    // not registered
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not Registered with Us Please SignUp to Continue",
      });
    }

    // Now generating JWT auth token and checking password
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      // Save token to user document in database
      user.token = token;
      user.password = undefined;
      // Set cookie for token and return success response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong",
      error: e.message,
    });
  }
};

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;

    const checkUserPresent = await User.findOne({ email });

    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: `User is Already Registered`,
      });
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const result = await OTP.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
    }
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    console.log("OTP Body", otpBody);
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};
