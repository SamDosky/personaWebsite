const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function getAllMovies(req, res, next) {
  db
    .any("select * from movies")

    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL movies"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}


const getMovieByName = (req, res ) => {
  db
    .any('select * from ratings where movie_id = ${movie_id}',
    {
     movie_id : req.params.movie_id
    }
  )
      
     .then(function(data) {
      console.log(data)
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL movies"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}


const getMovieTitle = (req, res ) => {
  db
    .one('select movies.title from movies where id = ${movie_id}',
    {
     movie_id : req.params.movie_id
    }
  )
      
     .then(function(data) {
      console.log(data)
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL movies"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

const createReview = (req, res ) => {
  db
    .none('INSERT INTO ratings (rating, review_text, movie_id) VALUES (${rating},${review_text},${movie_id})',
    {
      rating: req.body.rating,
      review_text: req.body.review_text,
      movie_id: req.body.movie_id
    }
  ).then(() => {
    res.status(200).json({
      message: 'Successfully created new review'
    });
  })
  .catch(err => {
    console.log('error creating review ', err);
    res.status(500).send(`Error creating new review:  ${err}`);
  });
};

const getMovieReviews = (req, res ) => {
  db
    .any('select * from ratings where movie_id = ${movie_id}',
    {
     movie_id : req.params.movie_id
    }
  )
      
     .then(function(data) {
      console.log(data)
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL reviews for the movie"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

module.exports = {
  getAllMovies: getAllMovies,
  getMovieByName : getMovieByName,
  getMovieTitle:getMovieTitle,
  createReview:createReview,
  getMovieReviews
 
};
