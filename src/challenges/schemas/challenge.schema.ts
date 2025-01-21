import mongoose, * as monogoose from 'mongoose';


export const ChallengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  difficulty_level: { type: String, enum: ['Easy', 'Moderate', 'Hard'], required: true },
  manager_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Manager', required: true },


});









