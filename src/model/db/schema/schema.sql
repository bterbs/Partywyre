DROP TABLE IF EXISTS admin_users;
DROP TABLE IF EXISTS events;

CREATE TABLE admin_users (
  admin_id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) DEFAULT 'party_thrower'
);

CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  event_password VARCHAR(255),
  event_time VARCHAR(255),
  event_location VARCHAR(255),
  event_artists VARCHAR(255)
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
)
