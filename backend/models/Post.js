import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  caption: { type: String },
  image: { type: String },
  likes: { type: [String], default: [] }
}, { timestamps: true });

export default mongoose.model("Post", postSchema);