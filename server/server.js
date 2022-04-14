const express = require("express");
const router = express.Router();
const fs = require("fs");
const { PORT, BACKEND_URL } = process.env;
const cors = require ("cors")
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json())
app.listen()
const port = 8080;
const { v4 } = require("uuid");

function readAppointments() {
    const appointments = fs.readFileSync("./data/appointments.json");
    const parsedData = JSON.parse(appointments);
    return parsedData;
  }
const appointmentData = readAppointments();

function writeApppointment(data) {
    fs.writeFileSync("./data/appointments.json", JSON.stringify(data));
  }
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

router
.route ('/')
.get((req, res)=> {
let appointmentData = writeApppointment();
res.status(200).send(appointmentData);
})
 