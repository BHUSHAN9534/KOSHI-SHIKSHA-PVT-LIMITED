window.onload = function () {
  openAlert();
};

function openAlert() {
  var customAlert = document.getElementById('customAlert');
  var message = "Please fill in the following details:";
  document.getElementById('alertMessage').textContent = message;
  customAlert.style.display = 'block';

  document.getElementById('userInfoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    var userData = {};
    for (var pair of formData.entries()) {
      userData[pair[0]] = pair[1];
    }
    var name = document.getElementById('name').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var course = document.getElementById('course').value;

    if (!name || !mobile || !course) {
      alert("Name, Mobile, and Course are mandatory fields!");
      return;
    }
    console.log(userData);
    showSuccessNotification();
    closeAlert();
  });
}

function closeAlert() {
  var customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'none';
}

function showSuccessNotification() {
  var notification = document.createElement('div');
  notification.className = 'notification';
  var img = document.createElement('img');
  img.src = 'https://github.com/BHUSHAN9534/KOSHI-SHIKSHA-PVT-LIMITED/blob/main/assets/images/success.gif?raw=true'; // Provide the path to your success image
  notification.appendChild(img);
  var message = document.createElement('p');
  message.textContent = 'You have successfully submitted!';
  notification.appendChild(message);
  document.body.appendChild(notification);

  setTimeout(function () {
    notification.style.opacity = '0';
    setTimeout(function () {
      document.body.removeChild(notification);
    }, 1000); // Adjust the delay before removing the notification
  }, 3000); // Adjust the duration for which the notification is displayed
}



//   Show More Section

function toggleCourses() {
  var moreCourses = document.querySelectorAll('.show-more-section .course');
  var showMoreSection = document.querySelector('.show-more-section');
  var buttonText = document.querySelector('.show-more-button button');

  if (showMoreSection.style.display === 'none') {
    showMoreSection.style.display = 'block';
    buttonText.innerText = 'Show Less';
  } else {
    showMoreSection.style.display = 'none';
    buttonText.innerText = 'Show More';
  }
}

$('.testimonial_owlCarousel').owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  autoplay: false,
  smartSpeed: 3000,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})


//Start Our Branches Offices Location

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the dropdowns and details box
  var categoryDropdown = document.getElementById('categoryDropdown');
  var itemDropdown = document.getElementById('itemDropdown');
  var itemDropdownContainer = document.getElementById('itemDropdownContainer');
  var detailsBox = document.getElementById('detailsBox');
  var detailsHeading = document.getElementById('detailsHeading');
  var detailsParagraph = document.getElementById('detailsParagraph');

  // Define the options for each category along with their details
  var options = {
    AndhraPradesh: {
      Anantapur: {
        description: "Apples are nutritious Andhra Pradesh.",
        image: "https://example.com/apple-image.jpg",
        link: "https://en.wikipedia.org/wiki/Apple",
        name: "John Doe",
        contact: "+1234567890",
        email: "john.doe@example.com",
        address: "123 Main Street, City, State, Country",
        mapLocation: "https://maps.app.goo.gl/xKgY7eXvTftYXK2aA"
      },
      Chittoor: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      EastGodavari: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Guntur: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Krishna: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Kurnool: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Prakasam: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      SriPottiSriramuluNellore: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Srikakulam: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Visakhapatnam: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Vizianagaram: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      West_Godavari: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      YSR_Kadapa: {
        description: "Bananas are rich in potassium.",
        image: "https://example.com/banana-image.jpg",
        link: "https://en.wikipedia.org/wiki/Banana",
        name: "Jane Smith",
        contact: "+9876543210",
        email: "jane.smith@example.com",
        address: "456 Elm Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },

    },
    ArunachalPradesh: {
      Tawang: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Itanagar: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      East_Kameng: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Changlang: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Lower_Dibang_Valley: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Lohit: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Namsai: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Kurung_Kumey: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Lower_Subansiri: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Assam: {
      Kamrup: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Dibrugarh: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Jorhat: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Golaghat: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Nagaon: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Tinsukia: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Barpeta: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Karimganj: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Cachar: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Bihar: {
      Araria_अररिया: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Arwal_अरवल: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Aurangabad_औरंगाबाद: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Banka_बांका: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Begusarai_बेगूसराय: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Bhagalpur_भागलपुर: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Bhojpur_भोजपुर: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Buxar_बक्सर: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Darbhanga_दरभंगा: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      EastChamparan_पूर्वीचंपारण: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Gaya_गया: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Gopalganj_गोपालगंज: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Jamui_जमुई: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Jehanabad_जहानाबाद: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Kaimur_कैमूर: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Katihar_कटिहार: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Khagaria_खगड़िया: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Kishanganj_किशनगंज: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Lakhisarai_लखीसराय: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Madhepura_मधेपुरा: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Madhubani_मधुबनी: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Munger_मुंगेर: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Muzaffarpur_मुजफ्फरपुर: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Nalanda_नालंदा: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Nawada_नवादा: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Patna_पटना: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Purnia_पूर्णिया: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Madhubani_मधुबनी: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Rohtas_रोहतास: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Saharsa_सहरसा: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Samastipur_समस्तीपुर: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Saran_सारण: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Sheikhpura_शेखपुरा: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Sheohar_शिवहरर: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Sitamarhi_सीतामढ़ी: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Siwan_सिवान: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Supaul_सुपौल: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Vaishali_वैशाली: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      WestChamparan_पश्चिमीचंपारण: {
        description: "Broccoli is a healthy vegetable.",
        image: "https://example.com/broccoli-image.jpg",
        link: "https://en.wikipedia.org/wiki/Broccoli",
        name: "Bob Brown",
        contact: "+3691215182",
        email: "bob.brown@example.com",
        address: "101 Pine Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Chhattisgarh: {
      Raipur_रायपुर: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Goa: {
      Panaji_पणजी: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Gujarat: {
      Gandhinagar_गांधीनगर: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Haryana: {
      Chandigarh_चंडीगढ़: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    HimachalPradesh: {
      Shimla_शिमला: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Jharkhand: {
      Ranchi_रांची: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Karnataka: {
      Bengaluru_बेंगलुरु: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Kerala: {
      Thiruvananthapuram_तिरुवनंतपुरम: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    MadhyaPradesh: {
      Bhopal_भोपाल: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Maharashtra: {
      Mumbai_मुंबई: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Manipur: {
      Imphal_इम्फाल: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Meghalaya: {
      Shillong_शिलांग: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Mizoram: {
      Aizawl_आइजोल: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Nagaland: {
      Kohima_कोहिमा: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Odisha: {
      Bhubaneswar_भुवनेश्वर: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Punjab: {
      Chandigarh_चंडीगढ़: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Rajasthan: {
      Jaipur_जयपुर: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Sikkim: {
      Gangtok_गांगटोक: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    TamilNadu: {
      Chennai_चेन्नई: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Tangalana: {
      Hyderabad_हैदराबाद: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Tripura: {
      Agartala_अगरतला: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    UttarPradesh: {
      Varanasi_वाराणसी: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Prayagraj_इलाहाबाद: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Kanpur_कानपुर: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Lucknow_लखनऊ: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Mathura_मथुरा: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Ayodhya_अयोध्या: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Gorakhpur_गोरखपुर: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Meerut_मेरठ: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      Noida_नोएडा: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Uttarakhand: {
      Dehradun_देहरादून: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    WestBengal: {
      Kolkata_कोलकाता: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Andaman_Nicobar: {
      PortBlair_पोर्टब्लेयर: {
        description: "Not Available",
        image: "",
        link: "",
        name: "",
        contact: "",
        email: "",
        address: "Not Found ",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Dadra_NagarHaveli: {
      Silvassa_सिलवासा: {
        description: "Not Available",
        image: "",
        link: "",
        name: "",
        contact: "",
        email: "",
        address: "Not Found ",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Daman_Diu: {
      Daman_दमन: {
        description: "Not Available",
        image: "",
        link: "",
        name: "",
        contact: "",
        email: "",
        address: "Not Found ",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Lakshadweep: {
      Kavaratti_कवरत्ती: {
        description: "Not Available",
        image: "",
        link: "",
        name: "",
        contact: "",
        email: "",
        address: "Not Found ",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Delhi: {
      Central_Delhi_केंद्रीय_दिल्ली: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      East_Delhi_पूर्वी_दिल्ली: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      North_Delhi_उत्तरी_दिल्ली: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      North_East_Delhi_उत्तर_पूर्वी_दिल्ली: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      North_West_Delhi_उत्तर_पश्चिमी_दिल्ली: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      South_Delhi_दक्षिण_दिल्ली: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      South_West_Delhi_दक्षिण_पश्चिमी_दिल्ली: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
      West_Delhi_पश्चिमी_दिल्ली: {
        description: "Carrots are rich in vitamin A.",
        image: "https://example.com/carrot-image.jpg",
        link: "https://en.wikipedia.org/wiki/Carrot",
        name: "Alice Johnson",
        contact: "+2468101214",
        email: "alice.johnson@example.com",
        address: "789 Oak Street, City, State, Country",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    },
    Puducherry: {
      Pondicherry_पुडुचेरी: {
        description: "Not Available",
        image: "",
        link: "",
        name: "",
        contact: "",
        email: "",
        address: "Not Found ",
        mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4d0.0"
      },
    }

  };

  // Function to update the item dropdown based on the selected category
  function updateItemDropdown() {
    var selectedCategory = categoryDropdown.value;
    // Clear previous options
    itemDropdown.innerHTML = '<option value="">Select Item</option>';
    // Add options based on the selected category
    if (selectedCategory && options[selectedCategory]) {
      Object.keys(options[selectedCategory]).forEach(function (item) {
        var option = document.createElement('option');
        option.textContent = item;
        option.value = item;
        itemDropdown.appendChild(option);
      });
      // Show the item dropdown
      itemDropdownContainer.style.display = 'flex';
    } else {
      // Hide the item dropdown if no category is selected or if there are no options for the selected category
      itemDropdownContainer.style.display = 'none';
    }
    // Clear details box when category changes
    detailsHeading.textContent = '';
    detailsParagraph.innerHTML = ''; // Clear existing content
  }

  // Function to display details when an item is selected
  function displayDetails() {
    var selectedCategory = categoryDropdown.value;
    var selectedItem = itemDropdown.value;
    if (selectedCategory && selectedItem && options[selectedCategory] && options[selectedCategory][selectedItem]) {
      // Display details for the selected item in the details box
      var selectedItemDetails = options[selectedCategory][selectedItem];
      detailsHeading.textContent = selectedItem;
      detailsParagraph.innerHTML = '<p>' + selectedItemDetails.description + '</p>';
      // Add additional details
      var detailsList = document.createElement('ul');
      detailsList.innerHTML = '<li><strong>Name:</strong> ' + selectedItemDetails.name + '</li>' +
        '<li><strong>Contact:</strong> ' + selectedItemDetails.contact + '</li>' +
        '<li><strong>Email:</strong> <a href="mailto:' + selectedItemDetails.email + '">' + selectedItemDetails.email + '</a></li>' +
        '<li><strong>Address:</strong> ' + selectedItemDetails.address + '</li>';
      detailsParagraph.appendChild(detailsList);
      // Add Google Maps location
      var mapElement = document.createElement('iframe');
      mapElement.src = selectedItemDetails.mapLocation;
      mapElement.width = "300";
      mapElement.height = "300";
      mapElement.frameborder = "0";
      mapElement.style.border = "0";
      detailsParagraph.appendChild(mapElement);
      // Add image
      var imageElement = document.createElement('img');
      imageElement.src = selectedItemDetails.image;
      imageElement.alt = selectedItem;
      detailsParagraph.appendChild(imageElement);
      // Add hyperlink
      var linkElement = document.createElement('a');
      linkElement.href = selectedItemDetails.link;
      linkElement.textContent = 'Learn more about ' + selectedItem;
      linkElement.target = "_blank"; // Open link in a new tab
      detailsParagraph.appendChild(linkElement);
    } else {
      // Clear details box if no item is selected or details are not available
      detailsHeading.textContent = '';
      detailsParagraph.innerHTML = '';
    }
  }

  // Event listeners to update item dropdown and display details
  categoryDropdown.addEventListener('change', updateItemDropdown);
  itemDropdown.addEventListener('change', displayDetails);
});

// End Our Branches Offices Location js

  //StART Check for internet connection before loading the script


  function checkOnlineStatus() {
    if (!navigator.onLine) {
      if (!alertShown) {
        alert('You are offline! Please check your internet connection.');
        alertShown = true;
      }
    } else {
      alertShown = false;
    }
  }

  setInterval(checkOnlineStatus, 3000); // Check online status every 3 seconds


  if (navigator.onLine) {
    document.head.appendChild(script);
  } else {
    alert('You are offline! Please check your internet connection.');
  };


  //end Check for internet connection before loading the script
