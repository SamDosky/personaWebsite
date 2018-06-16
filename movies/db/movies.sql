
  DROP DATABASE IF EXISTS movie_ratings;
CREATE DATABASE movie_ratings;

\c movie_ratings;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  rating INTEGER NOT NULL,
  review_text TEXT NOT NULL,
  movie_id INTEGER REFERENCES movies(id)
);

INSERT INTO movies (title)
  VALUES ('Beauty and the Beast'),
  ('The Little Mermaid'),
  ('Aladdin'),
  ('Dumbo'),
  ('Bambi'),
  ('Pinocchio'),
  ('Snow White'),
  ('Cinderella'),
  ('Sleeping Beauty');

INSERT INTO ratings (rating, review_text, movie_id)
  VALUES (5, 'Basically a perfect movie.', 1),
  (3, 'Could be better, but still a strong example.', 2),
  (4, 'Slightly weird, but a fun time.', 3),
  (2, 'Too scary for kids.', 4),
  (4, 'Beautifully rendered. Heartbreaking. Powerful.', 5),
  (5, 'Terrifying, but so good.', 6),
  (3, 'Good for it`s time.', 7),
  (1, 'Overrated. Still fun for kids.', 8),
  (4, 'Weirder than you remember. Good weird.', 9);