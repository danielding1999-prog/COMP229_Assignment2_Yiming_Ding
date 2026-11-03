import { User } from "../models/portfolio.model.js";

// creating a user form submission
const create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully submitted user form!",
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error submitting user form",
    });
  }
};

const list = async (req, res) => {
  try {
    let users = await User.find({});
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: "Error retrieving users",
    });
  }
};

const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user)
      return res.status(400).json({
        error: "user not found",
      });
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user",
    });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let user = req.profile;
    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = req.body.password;
    await user.save();
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let user = req.profile;
    let deleteduser = await user.deleteOne();
    res.json(deleteduser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
    
  }
};

const removeAll = async (req, res) => {
  try {
    let deleteduser = await User.deleteMany({});
    res.json(deleteduser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
}

// export default { create, userByID, read, list, remove, update };
export default { create, list, userByID, read, update, remove, removeAll };