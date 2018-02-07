const db = require('./db')

const find = function(email) {
  return db.oneOrNone(`
    SELECT * FROM
      users
    WHERE
      email = $1
    `,
    email
  )
  .catch(error => {
    console.error({message: 'Error occurred while executing find(email)',
                   arguments: arguments});
    throw error
  });
}

const addUser = function(email, password) {
  return db.one(`
    INSERT INTO
      users (email, password)
    VALUES
      ($1, $2)
    RETURNING *
    `,
    [email, password]
  )
  .catch(error => {
    console.error({message: 'Error occurred while executing find(email)',
                   arguments: arguments});
    throw error
  });
}


module.exports = {
  find,
  addUser
}
