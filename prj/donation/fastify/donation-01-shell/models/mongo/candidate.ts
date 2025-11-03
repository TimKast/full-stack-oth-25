import { Schema, model } from "mongoose";
import type { Candidate } from "../../types/donation-types.js";

const candidateSchema = new Schema<Candidate>({
  firstName: String,
  lastName: String,
  office: String,
});

export const CandidateMongoose = model("Candidate", candidateSchema);
