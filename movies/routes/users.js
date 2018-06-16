let db = require("../db/queries");
var express = require("express");
var router = express.Router();

router.get("/movies", db.getAllMovies);

router.get("/movies/:movie_id/ratings" , db.getMovieByName)

router.get("/movies/:movie_id", db.getMovieTitle)

router.post("/movies/createReview" , db.createReview)

router.get("/movies/review/:movie_id", db.getMovieReviews)


module.exports = router;
