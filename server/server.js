import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Resource from "./Schema/Resource.js";
import cors from "cors";

dotenv.config();

("J581ec7DDz9d2OkrtdI8e2yQKUebkQkjjIycnwFfK337Z0nfSGfIG9fP");
const server = express();
let PORT = 5000;

// allow for cross origing resource sharing
server.use(cors());
server.use(express.json());

mongoose
  .connect(process.env.DB_LOCATION, {
    autoIndex: true,
  })
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection error: ", err));

const limitCount = 10;
// get request to withdraw the data from mongodb
server.get("/get_resources", (req, res) => {

  Resource.find({})
    .limit(limitCount)
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

// get request for the searched content
server.post('/get_resources/', (req, res) => {
  let query = req.body
  Resource.find({}
    .limit(limitCount)
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: err.message })
    })

})

// post listening and giving a callback message
server.listen(PORT, () => {
  console.log(`listening to port => ${PORT}`);
});
