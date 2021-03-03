import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Galaxy = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        extra_info: [{ type: String }]

    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;