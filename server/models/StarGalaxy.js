import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const StarGalaxy = new Schema(
    {
        galaxy: { type: ObjectId, ref: "Galaxy", required: true },
        star: { type: ObjectId, ref: "Star", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default StarGalaxy;