// eslint-disable-next-line @typescript-eslint/no-require-imports
const mongoose = require('mongoose')

class Database {
  constructor () {
    this.connection = process.env.MONGO_CNN_DEV
  }

  async dbConnection () {
    try {
      await mongoose.connect(this.connection, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
      })
      console.log('Connected to database')
    } catch (error) {
      console.log(error)
      throw new Error('Error conecting to database')
    }
  }
}

module.exports = Database
