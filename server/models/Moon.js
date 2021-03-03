import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Moon = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        planet: { type: String },
        extra_info: [{ type: String }]


    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;