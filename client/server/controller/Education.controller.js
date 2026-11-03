import { Education } from "../models/portfolio.model.js";

// creating a Education form submission
const create = async (req, res) => {
  const education = new Education(req.body);
  try {
    await education.save();
    return res.status(200).json({
      message: "Successfully submitted Education form!",
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error submitting Education form",
    });
  }
};

const list = async (req, res) => {
  try {
    let education = await Education.find({});
    res.json(education);
  } catch (err) {
    return res.status(400).json({
      error: "Error retrieving Education",
    });
  }
};

const educationByID = async (req, res, next, id) => {
  try {
    let education = await Education.findById(id);
    if (!education)
      return res.status(400).json({
        error: "Education not found",
      });
    req.profile = education;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve Education",
    });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let education = req.profile;
    if (req.body.title) education.title = req.body.title;
    if (req.body.firstname) education.firstname = req.body.firstname;
    if (req.body.lastname) education.lastname = req.body.lastname;
    if (req.body.email) education.email = req.body.email;
    if (req.body.completion) education.completion = req.body.completion;
    if (req.body.description) education.description = req.body.description;
    await education.save();
    res.json(education);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let education = req.profile;
    let deletedEducation = await education.deleteOne();
    res.json(deletedEducation);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const removeAll = async (req, res) => {
  try {
    let deletedEducation = await Education.deleteMany({});
    res.json(deletedEducation);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
}

// export default { create, userByID, read, list, remove, update };
export default { create, list, educationByID, read, update, remove, removeAll };