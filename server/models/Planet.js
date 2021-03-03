import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Planet = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        extra_info: [{ type: String }],
        star: { type: String }

    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;