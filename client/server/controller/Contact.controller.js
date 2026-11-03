import { Contact } from "../models/portfolio.model.js";

// creating a contact form submission
const create = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    return res.status(200).json({
      message: "Successfully submitted contact form!",
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error submitting contact form",
    });
  }
};

const list = async (req, res) => {
  try {
    let contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: "Error retrieving contacts",
    });
  }
};

const contactByID = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact)
      return res.status(400).json({
        error: "Contact not found",
      });
    req.profile = contact;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve contact",
    });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let contact = req.profile;
    if (req.body.firstname) contact.firstname = req.body.firstname;
    if (req.body.lastname) contact.lastname = req.body.lastname;
    if (req.body.email) contact.email = req.body.email;
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let contact = req.profile;
    let deletedContact = await contact.deleteOne();
    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// export default { create, userByID, read, list, remove, update };
export default { create, list, contactByID, read, update, remove };