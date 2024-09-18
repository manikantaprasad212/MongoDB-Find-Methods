const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());

app.listen(2121, () => {
  console.log("Listening to port");
});

app.get("/dummyData", async (req, res) => {
  let employeesData = await Employee.find().distinct("country")
  //  .sort("department -country email");
  //  .sort("-country")
  //  .select("email");
  //  .select("-country -profilePic -department");
  // .and([{country:"China"},{gender:"Male"},])
  // .countDocuments();
  //   .skip(150);
  console.log(employeesData);
  res.json(employeesData);
});

let connetedToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://manikantaprasadprasadula:prasadmani@cluster0.ftdog.mongodb.net/dummy?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Successfully Connected");

    getDataFromdb();
  } catch (err) {
    console.log("Unable to connected");
  }
};

let employeeSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  age: String,
  gender: String,
  department: String,
  country: String,
  profilePic: String,
  maritalStatus: String,
});

let Employee = new mongoose.model("mern", employeeSchema, "mern");

let getDataFromdb = async () => {
  let employeesData = await Employee.find();
  console.log(employeesData);
};

connetedToMDB();
