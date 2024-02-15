import User from "../models/user.model.js";

export const getUserForSideBar = async (req, res) => {
  try {
    // loggedin user or current user who sending message
    const loggedInUser = req.user._id;

    //get all the user except the login user one whi send the message so that they can't send message to himself
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
      message: "**Internal Server Error**",
    });
  }
};
