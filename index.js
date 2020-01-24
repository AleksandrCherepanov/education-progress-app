const express = require('express');
const app = express();
const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://127.0.0.1:27017/'
const port = 3000;

app.get('/progress', (req, res) => {
    mongo.connect(`${dbUrl}`, (err, db) => {
        if (err) {
            throw err;
        }
        const dbo = db.db('education');
        dbo.collection('progress').find({}).toArray((err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
            db.close();
        });
    });
});

app.get('/regress', (req, res) => {
    mongo.connect(`${dbUrl}`, (err, db) => {
        if (err) {
            throw err;
        }
        const dbo = db.db('education');
        dbo.collection('regress').find({}).toArray((err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
            db.close();
        });
    });
});


app.listen(port, () => console.log(`Server run at port: ${port}`));

