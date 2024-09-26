 // Sample data (replace with your actual data)
 const universities = [
    { name: "Desh Bhagat University" },
    { name: "Acharya Nagarjuna University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Adikavi Nannaya University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Andhra University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Damodaram Sanjivayya National Law University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Dr. B.R. Ambedkar University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Dravidian University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Jawaharlal Nehru Technological University, Anantapur", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Jawaharlal Nehru Technological University, Kakinada", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Krishna University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Nagarjuna University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Rayalaseema University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Sri Krishnadevaraya University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Sri Padmavati Mahila Visvavidyalayam", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Sri Venkateswara Institute of Medical Sciences", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Sri Venkateswara University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Vikrama Simhapuri University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Yogi Vemana University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Assam Agricultural University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Assam University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Bodoland University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Cotton University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Dibrugarh University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Gauhati University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Kumar Bhaskar Varma Sanskrit and Ancient Studies University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Krishna Kanta Handique State Open University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "National Law University and Judicial Academy, Assam", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Srimanta Sankaradeva University of Health Sciences", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Tezpur University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Assam Down Town University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "The Assam Kaziranga University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Cotton College State University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Krishna Kanta Handique State Open University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Srimanta Sankaradeva University of Health Sciences", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Assam Agricultural University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Tezpur University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Assam Don Bosco University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Kaziranga University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Royal Global University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Indian Institute of Technology Guwahati", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Assam University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Sant Gadge Baba Amravati University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Babasaheb Ambedkar Marathwada University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Dr. Babasaheb Ambedkar Technological University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Dr. Punjabrao Deshmukh Krishi Vidyapeeth", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Gondwana University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "North Maharashtra University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Rashtrasant Tukadoji Maharaj Nagpur University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Sant Gadge Baba Amravati University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Savitribai Phule Pune University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Solapur University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Swami Ramanand Teerth Marathwada University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Vasantrao Naik Marathwada Krishi Vidyapeeth", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Yashwantrao Chavan Maharashtra Open University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Maharashtra University of Health Sciences", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Maharashtra Animal and Fishery Sciences University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Symbiosis International University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Tata Institute of Fundamental Research", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Tata Institute of Social Sciences", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Tilak Maharashtra Vidyapeeth", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Deccan College Post-Graduate and Research Institute", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Homi Bhabha National Institute", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Indian Institute of Science Education and Research, Pune", link: "#", approval: "Pending", loginLink: "#" },
    { name: "International Institute for Population Sciences", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Narsee Monjee Institute of Management Studies", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Shreemati Nathibai Damodar Thackersey Women's University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Smt. Nathibai Damodar Thackersey Women's University", link: "#", approval: "Pending", loginLink: "#" },
    { name: "Sikkim Skill University", link: "#", approval: "Pending", loginLink: "#" },
    // Add the rest of the universities here
];


  const universityList = document.getElementById("universityList");

  // Function to add universities to the table
  function populateTable() {
    universities.forEach(university => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${university.name}</td>
        <td><a href="${university.link}" target="_blank">Visit</a></td>
        <td>${university.approval}</td>
        <td><a href="${university.loginLink}" target="_blank">Student Login</a></td>
        <td><button class="download-btn" onclick="downloadBrochure('${university.name}')">Download Brochure</button></td>
      `;
      universityList.appendChild(row);
    });
  }

  // Function to simulate brochure download
  function downloadBrochure(universityName) {
    // Replace this with actual download functionality
    alert(`Downloading brochure for ${universityName}`);
  }

  // Function to filter universities by name
  function searchUniversities() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const rows = universityList.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      const nameColumn = rows[i].getElementsByTagName("td")[0];
      if (nameColumn) {
        const textValue = nameColumn.textContent || nameColumn.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  }

  // Populate the table when the page loads
  populateTable();