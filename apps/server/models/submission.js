import mongoose from "mongoose";

// Defining Schema
const submissionSchema = new mongoose.Schema({
  submission_id: { type: String, required: true, trim: true },
  content: { type: Object, required: true, trim: true },
//   country: { type: String, required: true }
})

// Model
const submissionModel = mongoose.model("submission", submissionSchema)

export default submissionModel