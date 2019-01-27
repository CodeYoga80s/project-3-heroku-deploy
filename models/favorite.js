const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  cocktailID: { type: Number, required: true }
});

const favorite = mongoose.model("favorite", favoriteSchema);

module.exports = favorite;