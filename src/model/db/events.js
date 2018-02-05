const db = require('./db')

const doesPasswordExist = function(password) {
  return db.oneOrNone(`
    SELECT * FROM
      events
    WHERE
      event_password = $1
      `,
      password
    )
    .catch(error => {
      console.error({message: 'Error occurred while executing doesPasswordExist',
                     arguments: arguments});
      throw error
    });
}

const addEvent = function(password, time, location, artists) {
  return db.one(`
    INSERT INTO
      events
        (event_password, event_time, event_location, event_artists)
    VALUES
      ($1, $2, $3, $4)
      RETURNING *
      `,
      [password, time, location, artists]
    )
    .catch(error => {
      console.error({message: 'Error occurred while executing addEvent',
                     arguments: arguments});
      throw error
    })
}

const generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

const validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = {
  doesPasswordExist,
  addEvent,
  generateHash,
  validPassword
}
