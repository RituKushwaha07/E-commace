const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 🔐 Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({ name, email, password: hashPassword });

        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


const loginUser = async (req, res) => {
  try {
    console.log("REQ:", req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log("USER:", user);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    console.log("MATCH:", match);

    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error); // 🔥 THIS LINE IMPORTANT
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { signupUser, loginUser};