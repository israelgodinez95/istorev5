// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config()
// eslint-disable-next-line @typescript-eslint/no-require-imports
const Server = require('./server')

const server = new Server()

server.listen()
