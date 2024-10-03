// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require('express')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require('cors')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const Database = require('./db/config')
class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.database = new Database()
    this.usersPath = '/api/users'
    this.productsPath = '/api/products'
    this.categoriesPath = '/api/categories'
    this.ordersPath = '/api/orders'
    this.authPath = '/api/auth'
    // Middelewares
    this.middlewares()
    // Database connection
    this.dbConnection()
    // Rutas
    this.routes()
  }

  async dbConnection () {
    await this.database.dbConnection()
  }

  middlewares () {
    // console.log('Hello');
    this.app.use(cors())
    // Este middleware es para recibir datos
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    // public
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.get('/', (req, res) => {
      res.send('<h1>Welcome to My API</h1><p>This is the backend. Use API routes to access data.</p>')
    })
    /*
    this.app.get(this.productsPath, async (req, res) => {
      try {
        const db = this.database.getDb() // Retrieve the database connection
        const products = await db.collection('products').find().toArray() // Fetch products from MongoDB
        res.json(products)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        res.status(500).json({ error: 'Failed to fetch productss' })
      }
    }) */

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    this.app.use(this.usersPath, require('./routes/users.routes'))
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    this.app.use(this.productsPath, require('./routes/products.routes'))
    // this.app.use(this.categoriesPath, require('./routes/categories.routes'))
    // this.app.use(this.ordersPath, require('./routes/orders.routes'))
    // this.app.use(this.authPath, require('./routes/auth.routes'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Backend running through port ${this.port}`)
    })
  }
}

module.exports = Server
