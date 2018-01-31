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

module.exports = doesPasswordExist
