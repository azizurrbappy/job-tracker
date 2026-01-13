const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    //   Database and All Collections
    const db = client.db('productdb');
    const itemsCollection = db.collection('items');

    //   All Apis Endpoints Here

    // GET /api/items - Get all items
    app.get('/api/items', async (req, res) => {
      try {
        if (!itemsCollection)
          return res.status(500).json({ error: 'Database not initialized' });
        const items = await itemsCollection.find({}).toArray();
        res.json(items);
      } catch (err) {
        res.status(500).json({ error: 'Failed to fetch items' });
      }
    });

    // GET /api/items/:id - Get single item
    app.get('/api/items/:id', async (req, res) => {
      try {
        if (!itemsCollection)
          return res.status(500).json({ error: 'Database not initialized' });
        const id = req.params.id;
        if (!ObjectId.isValid(id))
          return res.status(400).json({ error: 'Invalid ID' });

        const item = await itemsCollection.findOne({ _id: new ObjectId(id) });
        if (!item) return res.status(404).json({ error: 'Item not found' });

        res.json(item);
      } catch (err) {
        res.status(500).json({ error: 'Failed to fetch item' });
      }
    });

    // POST /api/items - Add new item
    app.post('/api/items', async (req, res) => {
      try {
        if (!itemsCollection)
          return res.status(500).json({ error: 'Database not initialized' });

        const { name, description, price, image } = req.body;

        // Basic validation
        if (!name || !price) {
          return res.status(400).json({ error: 'Name and price are required' });
        }

        const newItem = {
          name,
          description,
          price: Number(price),
          image,
          createdAt: new Date(),
        };

        const result = await itemsCollection.insertOne(newItem);
        res.status(201).json({ ...newItem, _id: result.insertedId });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create item' });
      }
    });

    // await client.db('admin').command({ ping: 1 });
    // console.log(
    //   'Pinged your deployment. You successfully connected to MongoDB!'
    // );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// Default Route
app.get('/', (req, res) => {
  res.send('Server running...');
});

app.listen(port, () => {
  console.log(`Product Catalog app listening on port ${port}`);
});
