const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { PORT, BACKEND_URL } = process.env;
const app = express();
const cors = require ("cors")
require("dotenv").config();
app.use(cors());
app.use(express.json())
app.listen()
const port = 8080;

function readAppointments() {
    const appointments = fs.readFileSync("./data/appointments.json");
    const parsedData = JSON.parse(appointments);
    return parsedData;
  }
const appointmentData = readAppointments();

function readTimeSlots() {
  const timeSlots = fs.readFileSync("./data/timeSlots.json");
  const parsedData = JSON.parse(timeSlots);
  return parsedData;
}
const timeSlots = readTimeSlots();

function writeApppointment(data) {
    fs.writeFileSync("./data/appointments.json", JSON.stringify(data));
    (err) => {
      if (err) throw err;
    };
  }
  console.log(timeSlots)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
app.get ('/', function (req, res) {
  res.send(appointmentData)
}
)
app.get('/timeslots', function (req, res) {
  res.send(timeSlots)
})
// router
// .route ('/')
// .get((req, res)=> {
// let appointmentData = writeApppointment();
// res.status(200).send(appointmentData);
// })
app.post('/', function (req, res) {
  console.log(req.body);
  const { name, phone, date, time, description} = req.body;
  const newAppointment = {
    id: uuidv4(),
    name: name,
    phome: phone,
    date: date,
    time: time,
    description: description,
  };
  console.log(appointmentData);
  const updatedAppointmentData = [...appointmentData, newAppointment];
writeApppointment(updatedAppointmentData);
})
app.use(function (req,res,next){
	res.status(404).send('Unable to find the requested resource!');
});