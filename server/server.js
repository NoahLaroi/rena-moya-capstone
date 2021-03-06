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
    fs.writeFileSync("./data/appointments.json", JSON.stringify(data, space=4));
    (err) => {
      if (err) throw err;
    };
  }

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
app.get ('/', function (req, res) {
  res.send('Welcome to Rena Moya"s Server!')
}
)
app.get('/appointments', function (req, res) {
  res.send(appointmentData)
});

app.get('/timeSlots', function (req, res) {
  res.send(timeSlots)
});

app.post('/appointments', function (req, res) {
  console.log(req.body);
  const { name, phone, date, time, description} = req.body;
  const newAppointment = {
    id: uuidv4(),
    name: name,
    phone: phone,
    date: date,
    time: time,
    description: description,
  };
  console.log(appointmentData);
  const updatedAppointmentData = [...appointmentData, newAppointment];
  writeApppointment(updatedAppointmentData);
});
app.delete('/appointments/:id', function (req, res) {
  res.send('This is the endpoint for deleting appointments')
  const appointments = readAppointments();
  const { id } = req.params;
  const newAppointments = appointments.filter((appointment) => {
    return appointment.id !== id;
  })
  writeApppointment(newAppointments);
  console.log(newAppointments)
});
  // [
  //   {
  //     "timeSlot": "9:00AM",
  //     "available": true
  //   },
  //   {
  //     "timeSlot": "10:00AM",
  //     "available": true
  //   },
  //   {
  //     "timeSlot": "11:00AM",
  //     "available": true
  //   },
  //   {
  //     "timeSlot": "1:00AM",
  //     "available": true
  //   },
  //   {
  //     "timeSlot": "2:00AM",
  //     "available": true
  //   },
  //   {
  //     "timeSlot": "3:00AM",
  //     "available": true
  //   },
  //   {
  //     "timeSlot": "4:00AM",
  //     "available": true
  //   }
  // ]