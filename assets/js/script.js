window.onload = function() {
    openAlert();
  };
  
  function openAlert() {
    var customAlert = document.getElementById('customAlert');
    var message = "Please fill in the following details:";
    document.getElementById('alertMessage').textContent = message;
    customAlert.style.display = 'block';
    
    document.getElementById('userInfoForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var formData = new FormData(this);
      var userData = {};
      for (var pair of formData.entries()) {
        userData[pair[0]] = pair[1];
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
    
    setTimeout(function() {
      notification.style.opacity = '0';
      setTimeout(function() {
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
loop:true,
margin:10,
dots:false,
nav:true,
autoplay:false,   
smartSpeed: 3000, 
autoplayTimeout:4000,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
})