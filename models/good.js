const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type: {type:String},
    color: {type:String},
    price: {type:Number},
    group:{ type: Schema.Types.ObjectId, ref: "groups" },
    inStock: {type: Number},
},
{
  toJSON: { virtuals: true },
  timestamps: true,
  collection: "goods",
}
);


const good = mongoose.model("Good", schema);

module.exports = good;