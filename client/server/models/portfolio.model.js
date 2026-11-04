import mongoose from 'mongoose';

// I. Contacts Schema
const contactSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true }
});

// II. Projects Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  completion: { type: Date },
  description: { type: String }
});

// III. Educations / Qualifications Schema
const educationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  completion: { type: Date },
  description: { type: String }
});


// Export Models (Mongoose automatically maps these to lowercase plural collections: contacts, projects, educations, users)
export const Contact = mongoose.model('Contact', contactSchema);
export const Project = mongoose.model('Project', projectSchema);
export const Education = mongoose.model('Education', educationSchema);
export default { Contact, Project, Education };