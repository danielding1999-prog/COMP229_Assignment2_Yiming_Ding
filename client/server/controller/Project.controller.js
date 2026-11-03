import { Project } from "../models/portfolio.model.js";

// creating a Project form submission
const create = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    return res.status(200).json({
      message: "Successfully submitted Project form!",
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error submitting Project form",
    });
  }
};

const list = async (req, res) => {
  try {
    let project = await Project.find({});
    res.json(project);
  } catch (err) {
    return res.status(400).json({
      error: "Error retrieving Project",
    });
  }
};

const projectByID = async (req, res, next, id) => {
  try {
    let project = await Project.findById(id);
    if (!project)
      return res.status(400).json({
        error: "Project not found",
      });
    req.profile = project;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve Project",
    });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let project = req.profile;
    if (req.body.title) project.title = req.body.title;
    if (req.body.firstname) project.firstname = req.body.firstname;
    if (req.body.lastname) project.lastname = req.body.lastname;
    if (req.body.email) project.email = req.body.email;
    if (req.body.completion) project.completion = req.body.completion;
    if (req.body.description) project.description = req.body.description;
    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let project = req.profile;
    let deletedProject = await project.deleteOne();
    res.json(deletedProject);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const removeAll = async (req, res) => {
  try {
    let deletedProject = await Project.deleteMany({});
    res.json(deletedProject);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
}

// export default { create, userByID, read, list, remove, update };
export default { create, list, projectByID, read, update, remove, removeAll };