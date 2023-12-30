// Toggle class active hamburger menu
const navbarnav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarnav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active seacrh form
const seacrhForm = document.querySelector('.search-form');
const seacrhBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  seacrhForm.classList.toggle('active');
  seacrhBox.focus();
  e.preventDefault();
};

//Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)){
    navbarnav.classList.remove("active");
}
  if (!sb.contains(e.target) && !seacrhForm.contains(e.target)) {
    seacrhForm.classList.remove("active");
  }
} );

//Modal Box
function openModal(modalNumber) {
  document.getElementById(`overlay${modalNumber}`).style.display = 'block';
  document.getElementById(`modal${modalNumber}`).style.display = 'block';
  }
//klik close    
document.querySelector('.modal .close-icon1').onclick = (e) => {
  modal1.style.display = 'none';
  e.preventDefault(); 
}
document.querySelector('.modal .close-icon2').onclick = (e) => {
  modal2.style.display = 'none';
  e.preventDefault(); 
}
document.querySelector('.modal .close-icon3').onclick = (e) => {
  modal3.style.display = 'none';
  e.preventDefault(); 
}
document.querySelector('.modal .close-icon4').onclick = (e) => {
  modal4.style.display = 'none';
  e.preventDefault(); 
}
document.querySelector('.modal .close-icon5').onclick = (e) => {
  modal5.style.display = 'none';
  e.preventDefault(); 
}
document.querySelector('.modal .close-icon6').onclick = (e) => {
  modal6.style.display = 'none';
  e.preventDefault(); 
}
document.querySelector('.modal .close-icon7').onclick = (e) => {
  modal7.style.display = 'none';
  e.preventDefault(); 
}
document.querySelector('.modal .close-icon8').onclick = (e) => {
  modal8.style.display = 'none';
  e.preventDefault(); 
}
document.querySelector('.modal .close-icon9').onclick = (e) => {
  modal9.style.display = 'none';
  e.preventDefault(); 
}

//klik close diluar modal

window.onclick = (e) => {
  if (e.target === modal1){
    modal1.style.display = 'none'
  }
  if (e.target === modal2){
    modal2.style.display = 'none'
  }
  if (e.target === modal3){
    modal3.style.display = 'none'
  }
  if (e.target === modal4){
    modal4.style.display = 'none'
  }
  if (e.target === modal5){
    modal5.style.display = 'none'
  }
  if (e.target === modal6){
    modal6.style.display = 'none'
  }
  if (e.target === modal7){
    modal7.style.display = 'none'
  }
  if (e.target === modal8){
    modal8.style.display = 'none'
  }
  if (e.target === modal9){
    modal9.style.display = 'none'
  }
}

//Kirim pesan
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Show loading overlay
  document.getElementById('loading-overlay').style.display = 'flex';

  var formData = new FormData(this);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwV7v5bZ1oieG5yZx_nalCUeo2FsPzxAR2csqma8zH8DcFUIEgvmMaLKrx3qgS1VWCh/exec', true);

  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          // Hide loading overlay
          document.getElementById('loading-overlay').style.display = 'none';

          // Show popup
          document.getElementById('popup').style.display = 'block';

          // You can optionally reset the form here
          document.getElementById('contact-form').reset();
      }
  };
  
  xhr.send(formData);
});

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
