const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken')
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// jwt 

// connet mongodb

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lvuf5o9.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const housesCollection = client.db('houseHunterDB').collection('houses')
        const usersCollection = client.db('houseHunterDB').collection('users');

        // user login
        app.post('/login', async (req, res) => {

        })

        // user registration
        app.post('/registration', async (req, res) => {

        })

        // user profile
        app.get('/profile', async (req, res) => {

        })

        // get house data based on search text
        app.get('/all-houses', async (req, res) => {
            const searchText = req.query.searchText;
            const limit = parseInt(req.query.limit) || 10;
            // const page = parseInt(req.query.currentPage) || 0;
            // const skip = page * limit;
            // console.log(limit, page);
            const result = await housesCollection.find({
                $or: [
                    { house_name: { $regex: searchText, $options: "i" } }
                ]
            }).limit(limit).toArray();
            res.send(result);
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('House Hunter server is running')
})

app.listen(port, () => {
    console.log(`House Hunter server is running on port ${port}`)
})