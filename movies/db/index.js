var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/movie_ratings";
var db = pgp(connectionString);

module.exports = db;
  