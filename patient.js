// Lets create a Patient profile using a class
class Patient{
    constructor(name, age, gender, weight, height){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.diagnoses = [];
        this.current_status = "Stable";
        this.medications = [];
        this.appointments = [];
    }

    add_diagnosis(diagnoses){
        this.diagnoses.push(diagnoses);
    }
    add_medication(medication){
        this.medications.push(medication);
    }
    add_appointment(appointment){
        this.appointments.push(appointment);
    }
    update_status(status){
        this.current_status = status;
    }
}

// Lets create a patient profile
let patient1 = new Patient("Joseph Boateng", 28, "Male", 84, 1.8);
let patient2 = new Patient("Victoria Boateng", 25, "Female", 60, 1.6);
let patient3 = new Patient("Kofi Boateng", 20, "Male", 70, 1.7);
let patient4 = new Patient("Kwame Boateng", 22, "Male", 75, 1.8);

// Lets add a diagnosis to the patient profile
patient1.add_diagnosis("Hyperstension");
patient1.add_diagnosis("Diabetes");
patient2.add_diagnosis("Diabetes");
patient2.add_diagnosis("Hypotension");
patient3.add_diagnosis("Hypotension");
patient4.add_diagnosis("Hypotension");

// Lets add a medication to the patient profile
patient1.add_medication("Aspirin");
patient1.add_medication("Metformin");
patient2.add_medication("Metformin");
patient2.add_medication("glimetrazone");
patient3.add_medication("glimetrazone");
patient4.add_medication("glimetrazone");

// Lets add an appointment to the patient profile
patient1.add_appointment("10/10/2024");
patient2.add_appointment("10/11/2024");
patient3.add_appointment("10/12/2024");
patient4.add_appointment("10/13/2024");

// Lets update the patient profile
patient1.update_status("Critical");
patient2.update_status("Stable");
patient3.update_status("Critical");
patient4.update_status("Stable");

// Lets acceess the patient information
console.log(patient1);
console.log(patient2);
console.log(patient3);
console.log(patient4);

console.log("Patient Name: " + patient1.name);
console.log("Patient condition: " + patient1.current_status);
console.log("Patient Diagnoses: " + patient2.diagnoses);
console.log("Patient Medications: " + patient3.medications);
console.log("Patient Appointments: " + patient4.appointments);