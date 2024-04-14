// Simulated data for admission details
const admissionDetailsData = {
  "123456": {
    name: "John Doe",
    fatherName: "David Doe",
    age: 25,
    admissionStatus: "Accepted",
    program: "Computer Science",
    admissionDate: "2024-04-13",
    university: "ABC University",
    college: "XYZ College",
    sessionYear: "2024-2025"
  },
  // Add more data as needed
};

// Function to display admission details
function displayAdmissionDetails(enrollmentNumber) {
  const studentDetailsElement = document.getElementById("studentDetails");
  const admissionDetailsElement = document.getElementById("admissionDetails");
  const errorDiv = document.getElementById("errorDiv");
  const loader = document.getElementById("loader");
  const loadDetailsBtn = document.getElementById("loadDetailsBtn");
  
  // Disable the load details button
  loadDetailsBtn.disabled = true;
  loader.style.display = "block"; // Show loader
  
  if (admissionDetailsData.hasOwnProperty(enrollmentNumber)) {
    const details = admissionDetailsData[enrollmentNumber];
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    studentDetailsElement.innerHTML = `
      <h2>Student Details</h2>
      <p>Name: ${details.name}</p>
      <p>Father's Name: ${details.fatherName}</p>
      <p>Age: ${details.age}</p>
    `;
    admissionDetailsElement.innerHTML = `
      <h2>Admission Details</h2>
      <p>Admission Status: <span class="status-${details.admissionStatus.toLowerCase()}">${details.admissionStatus}</span></p>
      <p>Program: ${details.program}</p>
      <p>Admission Date: ${details.admissionDate}</p>
      <p>University: ${details.university}</p>
      <p>College: ${details.college}</p>
      <p>Session Year: ${details.sessionYear}</p>
      <p>Current Date: ${formattedDate}</p>
      <p>Current Time: ${formattedTime}</p>
    `;
    updateProgressBar(4); // Assuming all steps are completed after loading details
    errorDiv.innerHTML = ""; // Clear error message if previously shown
  } else {
    studentDetailsElement.innerHTML = ""; // Clear student details if previously shown
    admissionDetailsElement.innerHTML = ""; // Clear admission details if previously shown
    errorDiv.innerHTML = "Admission details not found for this enrollment number.";
  }
  
  // Enable the load details button
  loadDetailsBtn.disabled = false;
  loader.style.display = "none"; // Hide loader
}

// Function to update progress bar based on current step
function updateProgressBar(currentStep) {
  const progressSteps = document.querySelectorAll('.step');
  progressSteps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add('completed');
    } else {
      step.classList.remove('completed');
    }
  });
}

// Event listener for the load details button
document.getElementById("loadDetailsBtn").addEventListener("click", function() {
  const enrollmentNumber = document.getElementById("enrollmentNumber").value.trim();
  displayAdmissionDetails(enrollmentNumber);
});
