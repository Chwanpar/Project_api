const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        name: { type: String, require: true, trim: true },
    },
    {
        toJSON: { virtuals: true },
        timestamps: true,
        collection: "groups",
    });

schema.virtual("goods", {
    ref: "Good",
    localField: "_id",
    foreignField: "group",
});
const group = mongoose.model("Group", schema);

module.exports = group;