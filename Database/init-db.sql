CREATE TABLE IF NOT EXISTS movies (
    name varchar PRIMARY KEY,
    genre varchar,
    releaseDate varchar,
    rating varchar,
    director varchar,
    writer varchar,
    star varchar,
    country varchar,
    budget int,
    company varchar,
    runtime varchar,
    score float DEFAULT 0,
    inserted_at timestamp
);

CREATE TABLE IF NOT EXISTS ranks (
    id varchar PRIMARY KEY,
    name varchar,
    score int,
    username varchar,
    inserted_at timestamp
);

CREATE TABLE IF NOT EXISTS users (
    username varchar PRIMARY KEY,
    password varchar
);