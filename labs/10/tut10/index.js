const express = require('express');
const { MongoClient } = require('mongodb');
let db = null;
MongoClient.connect('mongodb+srv://quandd:1l8oFwwgUrUTH8tF@quandd.v2q74.mongodb.net/')
    .then(client => {
        db = client.db('wpr2201040051');
    })
    .catch(console.log);
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.post('/students/add', async (req, res) => {
    req.body
    const students = db.collection('students');
    let rs = await students.insertOne(req.body);
    res.json(rs);
});

app.post('/courses/add', async (req, res) => {
    req.body
    const courses = db.collection('courses');
    let rs = await courses.insertOne(req.body);
    res.json(rs);
});

app.get('/students', async (req, res) => {
    const students = db.collection('students');
    let cursor = await students.find();
    res.json(await cursor.toArray());
});

app.get('/course', (req, res) => {

});


app.get('/enrol/:code/:sid', async (req, res) => {

    const enrolments = db.collection('enrolments');
    let rs = await enrolments.updateOne({
        code: req.params.code,
        sid: req.params.sid
    }, { $set: { sid: req.params.sid } }, { upsert: true });
    res.json(rs);
})

app.get('/unenrol/:code/:sid', async (req, res) => {

})

app.listen(8000, () => {
    console.log("Listen to port 8000 ");
})