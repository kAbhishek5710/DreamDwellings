import User from "../Models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User Created successfully...");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const validUser = await User.findOne({ username });
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!(validUser && validPassword)) {
      return next(errorHandler(404, "Wrong Credentials"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60),
      })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};
