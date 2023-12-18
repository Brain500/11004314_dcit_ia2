function registerPatient() {
    const surname = encodeHTML(document.getElementById('surname').value);
    const otherNames = encodeHTML(document.getElementById('otherNames').value);
    const gender = encodeHTML(document.getElementById('gender').value);
    const phoneNumber = encodeHTML(document.getElementById('phoneNumber').value);
    const residentialAddress = encodeHTML(document.getElementById('residentialAddress').value);
    const emergencyName = encodeHTML(document.getElementById('emergencyName').value);
    const emergencyContact = encodeHTML(document.getElementById('emergencyContact').value);
    const relationship = encodeHTML(document.getElementById('relationship').value);

    const patientData = {
        surname: surname,
        firstNames: firstNames,
        gender: gender,
        phoneNumber: phoneNumber,
        residentialAddress: residentialAddress,
        emergencyName: emergencyName,
        emergencyContact: emergencyContact,
    
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Patient registered successfully!');
    })
    .catch(error => {
        console.error('There was a problem with the registration:', error);
    });
}

function startEncounter() {
    const encounterPatientID = encodeHTML(document.getElementById('encounterPatientID').value);
    const encounterDate = encodeHTML(document.getElementById('encounterDate').value);
    const encounterType = encodeHTML(document.getElementById('encounterType').value);

    const encounterData = {
        patientID: encounterPatientID,
        date: encounterDate,
        type: encounterType
        
    };

    fetch('/startEncounter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(encounterData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Encounter started successfully!');
    })
    .catch(error => {
        console.error('There was a problem starting the encounter:', error);
    });
}

function submitVitals() {
    const vitalsPatientID = encodeHTML(document.getElementById('vitalsPatientID').value);
    const bloodPressure = encodeHTML(document.getElementById('bloodPressure').value);
    const temperature = encodeHTML(document.getElementById('temperature').value);
    const pulse = encodeHTML(document.getElementById('pulse').value);
    const spO2 = encodeHTML(document.getElementById('spO2').value);

    const vitalsData = {
        patientID: vitalsPatientID,
        bloodPressure: bloodPressure,
        temperature: temperature,
        pulse: pulse,
        spO2: spO2
        // Add other vitals details here
    };

    fetch('/submitVitals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vitalsData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Vitals submitted successfully!');
    })
    .catch(error => {
        console.error('There was a problem submitting vitals:', error);
    });
}

function viewPatientList() {
    fetch('/patientList')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('patientList').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('There was a problem fetching the patient list:', error);
    });
}

function viewPatientDetails(patientID) {
    fetch(/patientDetails/$(patientID))
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('patientDetails').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('There was a problem fetching patient details:', error);
    });
}

function encodeHTML(input) {
    return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}