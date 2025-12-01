const express = require("express");
const fs = require("fs");
const app = express();


app.use(express.json());
app.use(express.static("."));


app.post("/book", (req, res) => {
const appointment = req.body;


let existing = [];
if (fs.existsSync("appointments.json")) {
existing = JSON.parse(fs.readFileSync("appointments.json"));
}


existing.push(appointment);


fs.writeFileSync("appointments.json", JSON.stringify(existing, null, 2));


res.json({ message: "Appointment booked successfully!" });
});


app.listen(3000, () => console.log("Server running on http://localhost:3000"));