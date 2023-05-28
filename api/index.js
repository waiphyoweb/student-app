const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { MongoClient, ObjectId } = require("mongodb");
const mongo = new MongoClient("mongodb://localhost");
const db = mongo.db("student-list");

//filling in a student information
app.post("/students", async (req, res) => {
    const { name, email, phone, nrc, gender, address, hobby, state, township } = req.body;

    const result = await db.collection("students").insertOne({
        name, email, phone, nrc, gender, address, hobby, state, township
    });

    const student = await db.collection("students").findOne({
        _id: new ObjectId(result.insertedId),
    });

    res.json(student);
});

//taking out a student information
app.get("/students/:id", async (req, res) => {
    const { id } = req.params;

    const student = await db.collection("students").findOne({
        _id: new ObjectId(id),
    });

    res.json(student);
});

//taking out all of the student informations
app.get("/students", async (req, res) => {
    const students = await db.collection("students").find().toArray();
    res.json(students);
})

//updating the student information
app.put("/students/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, nrc, gender, address, hobby, state, township } = req.body;

    const student = await db.collection("students").updateOne(
        { _id: new ObjectId(id) },
        { $set: {
            name: name,
            email: email,
            phone: phone,
            nrc: nrc,
            gender: gender,
            address: address,
            hobby: hobby,
            state: state,
            township: township,
        }}
    );

    res.json(student);
});

//deleting the student information
app.delete("/students/:id", async (req, res) => {
    const { id } = req.params;

    const student = await db.collection("students").deleteOne({
        _id: new ObjectId(id),
    });

    res.status(204).json(student);
});


app.listen(8000, () => {
    console.log("Server is running on port 8000.");
})