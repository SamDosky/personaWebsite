DROP DATABASE IF EXISTS schools;
CREATE DATABASE schools;

\c schools;

CREATE TABLE schools (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE teachers (
  ID SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  subject VARCHAR,
  schoolID INTEGER REFERENCES schools
);

INSERT INTO schools (ID, name)
  VALUES (1, 'East High School'),
  (2, 'West High School'),
  (3, 'Central High School')
;

INSERT INTO teachers (ID, name, subject, schoolID)
  VALUES (1, 'Herman Miller', 'Biology', 2),
  (2, 'Frank Gehry', 'English', 1),
  (3, 'Ai Weiwei', 'History', 2),
  (4, 'Cindy Sherman', 'Math', 3),
  (5, 'Yayoi Kusama', 'Gym', 1),
  (6, 'Marina Abramovic', 'History', 1),
  (7, 'Richard Serra', 'Art', 3),
  (8, 'Louise Bourgeois', 'English', 2),
  (9, 'Kara Walker', 'Chemistry', 3),
  (10, 'Anish Kapoor', 'Physics', 1),
  (11, 'Yoko Ono', 'Music', 2),
  (12, 'Agnes Martin', 'Math', 3),
  (13, 'Helio Oticica', 'Gym', 2),
  (14, 'Carl Pope', 'Biology', 1),
  (15, 'David Hockney', 'Gym', 3),
  (16, 'William Leavitt', 'Math', 2),
  (17, 'Eduardo Kac', 'English', 3),
  (18, 'Steve McQueen', 'History', 3),
  (19, 'Takashi Murakami', 'Physics', 2),
  (20, 'Nam June Paik', 'Music', 1),
  (21, 'Gerhard Richter', 'Art', NULL),
  (22, 'Andy Warhol', 'Chemistry', NULL),
  (23, 'Jenny Holtzer', 'Math', NULL)
;