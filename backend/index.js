const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config({ path: '../.env' }); // Load from root .env

const app = express();
const port = 5001;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow Frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/productdb';
const client = new MongoClient(uri);
let itemsCollection;

async function connectDB() {
    try {
        await client.connect();
        const db = client.db('productdb');
        itemsCollection = db.collection('items');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

connectDB();

// Routes

// GET /api/items - Get all items
app.get('/api/items', async (req, res) => {
    try {
        if (!itemsCollection) return res.status(500).json({ error: 'Database not initialized' });
        const items = await itemsCollection.find({}).toArray();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});

// GET /api/items/:id - Get single item
app.get('/api/items/:id', async (req, res) => {
    try {
        if (!itemsCollection) return res.status(500).json({ error: 'Database not initialized' });
        const id = req.params.id;
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid ID' });

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
        if (!itemsCollection) return res.status(500).json({ error: 'Database not initialized' });

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
            createdAt: new Date()
        };

        const result = await itemsCollection.insertOne(newItem);
        res.status(201).json({ ...newItem, _id: result.insertedId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create item' });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
