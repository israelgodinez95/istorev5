// eslint-disable-next-line @typescript-eslint/no-require-imports
const { MongoClient } = require('mongodb')

async function seedDatabase () {
  const uri = 'mongodb+srv://isragb47:LBNvNO2qbZulMdbf@cluster0.jkpiv.mongodb.net/istorev3?retryWrites=true&w=majority'// Replace with your MongoDB URI, password and database name
  const client = new MongoClient(uri,
    { // useNewUrlParser: true,
      // useUnifiedTopology: true
    })

  try {
    await client.connect()
    const database = client.db('istorev3') // Use your database name
    const products = database.collection('products')

    // Sample product data
    const sampleProducts = [
      { name: 'Product 1', price: 29.99 },
      { name: 'Product 2', price: 19.99 },
      { name: 'Product 3', price: 49.99 }
    ]

    // Insert sample data
    const result = await products.insertMany(sampleProducts)
    console.log(`${result.insertedCount} products inserted`)
  } finally {
    await client.close()
  }
}

seedDatabase().catch(console.error)
