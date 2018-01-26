DROP TABLE IF EXISTS admin_users;

CREATE TABLE admin_users (
  admin_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) DEFAULT 'party_thrower'
);
