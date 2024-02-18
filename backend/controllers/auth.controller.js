import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (!fullname || !username || !password || !gender || !confirmPassword) {
      return res.status(401).send({
        message: "**Please enter all the required fields**",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "**Password & confirmPassword are not the same**",
      });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(404).json({ error: "Username already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      await generateTokenAndSetCookies(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        message: "User registered successfully",
        _id: newUser._id,
        fullname: newUser.fullname,
        username:newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({
        error: "**Invalid User Data**",
      });
    }
  } catch (error) {
    console.error(error.message);
    res.send({
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({
        error: "Invalid username or password ",
      });
    }

    generateTokenAndSetCookies(user._id, res);

    res.status(200).json({
      message: "User logged in successfully",
      _id: user._id,
      fullname: user.fullname,
      gender: user.gender,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error(error.message);
    res.send({
      error: error.message,
      message:"Internal Server Error",
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully " });
  } catch (error) {
    console.error(error.message);
    res.send({
      error: error.message,
      message: "Internal Server Error",
    });
  }
};
