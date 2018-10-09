DROP DATABASE IF EXISTS artists;
CREATE DATABASE artists;
\c artists

DROP TABLE IF EXISTS artists CASCADE;
CREATE TABLE IF NOT EXISTS artists (
  ID INTEGER PRIMARY KEY,
  artist_name VARCHAR(100)
);

DROP TABLE IF EXISTS albums;
CREATE TABLE IF NOT EXISTS albums (
  id INTEGER PRIMARY KEY,
  album_name VARCHAR(100),
  album_pic INTEGER,
  published INTEGER,
  artist INTEGER REFERENCES artists (ID)
);

DROP TABLE IF EXISTS songs;
CREATE TABLE IF NOT EXISTS songs (
  song_name VARCHAR(100),
  stream INTEGER,
  length INTEGER,
  popularity INTEGER,
  library BOOLEAN,
  album INTEGER REFERENCES albums (id)
);