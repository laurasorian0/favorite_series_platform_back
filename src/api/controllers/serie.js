const { deleteFile } = require("../../utils/deleteFile");
const Serie = require("../models/serie");

const getSeries = async (req, res, next) => {
  try {
    const series = await Serie.find();
    return res.status(200).json(series);

  } catch (error) {
    return res.status(400).json("error")
  }
}

const getSeriesbyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const serie = await Serie.findById(id);
    return res.status(200).json(serie);

  } catch (error) {
    return res.status(400).json("error")
  }
}

const postSerie = async (req, res, next) => {
  try {
    const newSerie = new Serie(req.body);
    if (req.file) {
      newSerie.portada = req.file.path;
    }
    const serie = await newSerie.save()
    return res.status(200).json(serie);

  } catch (error) {
    return res.status(400).json("error")
  }
}

const updateSerie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newSerie = new Serie(req.body)
    newSerie._id = id;
    const serieUpdated = await Serie.findByIdAndUpdate(id, newSerie, { new: true });
    return res.status(200).json(serieUpdated);
  } catch (error) {
    return res.status(400).json("error")
  }
}

const deleteSerie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const serie = await Serie.findByIdAndDelete(id);

    if (!serie) {
      return res.status(404).json({ mensaje: "Serie no encontrada" });
    }


    await deleteFile(serie.portada);

    return res.status(200).json({
      mensaje: "Ha sido eliminada con éxito",
      serieEliminada: serie,
    });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar la serie", error });
  }
};
module.exports = {
  getSeries, getSeriesbyId, postSerie, updateSerie, deleteSerie
}