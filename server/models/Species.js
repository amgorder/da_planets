import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Species = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        moon: { type: String },
        planet: { type: String }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;