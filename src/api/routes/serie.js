const { isAuth } = require("../../middlewares/auth");
const { getSeries, getSeriesbyId, postSerie, updateSerie, deleteSerie } = require("../controllers/serie");

const seriesRouter = require("express").Router();

seriesRouter.get("/", getSeries);
seriesRouter.get("/:id", getSeriesbyId);
seriesRouter.post("/", isAuth, postSerie);
seriesRouter.put("/:id", isAuth, updateSerie);
seriesRouter.delete("/:id", isAuth, deleteSerie);

module.exports = seriesRouter;