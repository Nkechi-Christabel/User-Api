const User = require("../models/user");

//Gets all users
const api_user = async (req, res) => {
  try {
    const user = await User.find().sort({ createdAt: -1 });
    res.status(200).json(user);
  } catch (err) {
    res.json({ message: err.message });
  }
};

//post request for a new user
const api_register = (req, res) => {
  const email = req.body.email;
  const user = new User(req.body);
  //Checks if user already exists using email
  User.findOne({ email: email }, async (err, result) => {
    //If found, send a message a message accordingly
    if (result) {
      return res.status(400).json({ message: "This email already exists" });
    }
    //if not, saves new user
    else {
      try {
        const data = await user.save();
        res.status(200).json({ data });
      } catch (err) {
        res.json({ message: err.message });
      }
    }
  });
};

//Deletes a user
const api_delete = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: `User ${result.userName} has been deleted` });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  api_user,
  api_register,
  api_delete,
};
