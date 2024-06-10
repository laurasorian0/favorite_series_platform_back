const { isAuth } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getSeries, getSeriesbyId, postSerie, updateSerie, deleteSerie } = require("../controllers/serie");

const seriesRouter = require("express").Router();

seriesRouter.get("/", getSeries);
seriesRouter.get("/:id", getSeriesbyId);
seriesRouter.post("/", isAuth, upload.single("portada"), postSerie);
seriesRouter.put("/:id", isAuth, updateSerie);
seriesRouter.delete("/:id", isAuth, deleteSerie);

module.exports = seriesRouter;