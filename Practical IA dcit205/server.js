const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const patients = [];

app.post('/register', (req, res) => {
    const newPatient = req.body;
    patients.push(newPatient);
    res.json({ message: 'Patient registered successfully!' });
});

app.post('/startEncounter', (req, res) => {
    const encounterData = req.body;
    
    res.json({ message: 'Encounter started successfully!' });
});


app.post('/submitVitals', (req, res) => {
    const vitalsData = req.body;
    
    res.json({ message: 'Vitals submitted successfully!' });
});


app.get('/patientList', (req, res) => {
    
    res.json(patients);
});


app.get('/patientDetails/:patientID', (req, res) => {
    const patientID = req.params.patientID;
    
    const patient = patients.find(p => p.patientID === patientID);
    res.json(patient);
});

app.listen(port, () => {
    console.log(localhost {port});
});