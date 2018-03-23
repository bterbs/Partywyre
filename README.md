# Partywyre

Single Page App that integrates LYFT API - visit app with private code and get afterparty location with LYFT button to get there.

### Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

## Dev Setup

1. Create your database: `createdb partywyreDb`
2. Clone or fork git repo `$ git clone https://github.com/bterbs/Partywyre.git`
3. cd into new project directory
4. Load your database with the schema: `npm run load_schema`
5. Install your dependencies: `npm install`
6. Run the server: `npm start`

### Accessing the application

Log on to [http://localhost:3000](http://localhost:3000) to access the client front end. The Express server will be running on port 3000.

### Using the application

* Sign up, login, and create an event with a secret password. Give the password to your friends, they can enter it on the home page and get the details on the after party.

## Built With

* Back End

  * [Node.js](https://nodejs.org)
  * [Express](https://expressjs.com/)

* Front End
  * [EJS](http://ejs.co/)
  * [jQuery](https://jquery.com/)
