const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  plataforma: { type: String, required: true },
  portada: { type: String, required: true },
  valoracion: { type: Number, required: true },
}, {
  timestamps: true,
  collection: "series"
});

const Serie = mongoose.model("series", serieSchema, "series");

module.exports = Serie;