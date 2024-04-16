// Dummy data for jobs (with additional details)
let jobs = [
    { 
        id: 1, 
        title: "Frontend Developer", 
        description: "We are looking for a skilled Frontend Developer to join our team.", 
        location: "Remote", 
        salary: "$80,000 - $100,000" 
    },
    { 
        id: 2, 
        title: "Backend Developer", 
        description: "Join us as a Backend Developer and contribute to our cutting-edge projects.", 
        location: "On-Site", 
        salary: "$90,000 - $110,000" 
    },
    // Add more job objects as needed
];

// Function to display jobs in a table with additional details
function displayJobsTable(jobsArray) {
    const jobsTableBody = document.getElementById("jobs-table-body");
    jobsTableBody.innerHTML = "";
    jobsArray.forEach(job => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${job.title}</td>
            <td>${job.description}</td>
            <td>${job.location}</td>
            <td>${job.salary}</td>
            <td><button onclick="openJobProfileModal(${job.id})">View Profile</button></td>
        `;
        jobsTableBody.appendChild(tr);
    });
}

// Function to send job details to an email address
function sendJobDetailsByEmail(job) {
    // Replace with actual email sending logic
    const email = "jobs@koshishiksha.com";
    const subject = `Job Application: ${job.title}`;
    const body = `Job Title: ${job.title}\nDescription: ${job.description}\nLocation: ${job.location}\nSalary: ${job.salary}\n\nPlease find the attached resume/CV.`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Function to open the job profile modal
function openJobProfileModal(jobId) {
    const job = jobs.find(job => job.id === jobId);
    if (job) {
        document.getElementById("modal-title").textContent = job.title;
        document.getElementById("modal-description").textContent = job.description;
        document.getElementById("modal-location").textContent = job.location;
        document.getElementById("modal-salary").textContent = job.salary;
        const sendEmailBtn = document.getElementById("send-email-btn");
        sendEmailBtn.onclick = () => sendJobDetailsByEmail(job);
        document.getElementById("job-profile-modal").style.display = "block";
    }
}

// Function to close the job profile modal
function closeJobProfileModal() {
    document.getElementById("job-profile-modal").style.display = "none";
}

// Initially display all jobs in a table with additional details
displayJobsTable(jobs);

// Close modal when user clicks on the close button or outside the modal (same as previous code)

// Close modal when user clicks on the close button (same as previous code) 