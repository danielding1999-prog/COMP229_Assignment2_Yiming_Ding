import { Education } from "../models/portfolio.model.js";

// creating a Education form submission
const create = async (req, res) => {
  const Education = new Education(req.body);
  try {
    await Education.save();
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
    let Education = await Education.find({});
    res.json(Education);
  } catch (err) {
    return res.status(400).json({
      error: "Error retrieving Education",
    });
  }
};

const contactByID = async (req, res, next, id) => {
  try {
    let Education = await Education.findById(id);
    if (!Education)
      return res.status(400).json({
        error: "Education not found",
      });
    req.profile = Education;
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
    let Education = req.profile;
    if (req.body.firstname) Education.firstname = req.body.firstname;
    if (req.body.lastname) Education.lastname = req.body.lastname;
    if (req.body.email) Education.email = req.body.email;
    if (req.body.completion) Education.completion = req.body.completion;
    if (req.body.description) Education.description = req.body.description;
    await Education.save();
    res.json(Education);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let Education = req.profile;
    let deletedContact = await Education.deleteOne();
    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// export default { create, userByID, read, list, remove, update };
export default { create, list, contactByID, read, update, remove };