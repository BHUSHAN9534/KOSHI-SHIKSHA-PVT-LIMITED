
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
  
  
    // start founder and management js 
     
  
  
    // end founder and management js 
  
  
    // Start Contact Us Section
  
  
    document.getElementById('contact-us-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var formData = new FormData(this);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'contact_process.php'); // Change 'contact_process.php' to your actual backend script
      xhr.onload = function() {
          if (xhr.status === 200) {
              document.getElementById('status-message').textContent = 'Message sent successfully!';
              document.getElementById('contact-us-form').reset();
          } else {
              document.getElementById('status-message').textContent = 'There was a problem sending your message. Please try again later.';
          }
      };
      xhr.send(formData);
  });
  
  
    // End Contact Us Section
  
  
  // End Training section
  
  function hideLoader() {
    // Hide the loader and display the main content
    const loaderContainer = document.getElementById('loader-container');
    const content = document.getElementById('main-content');
    
    loaderContainer.style.display = 'none';
    content.style.display = 'block';
}

  
  
  
  
  