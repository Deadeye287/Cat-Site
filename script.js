const links = document.querySelectorAll('.ul-nav li a');
const link1 = document.querySelector('#home');
const link2 = document.querySelector('#characteristics');
const link3 = document.querySelector('#behavior');
const link4 = document.querySelector('#lifespan_and_health');
const link5 = document.querySelector('#other');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

const currentPage = window.location.pathname;

if (currentPage.includes('index.html')) {
  link1.classList.add('active');
} else if (currentPage.includes('chars.html')) {
  link2.classList.add('active');
} else if (currentPage.includes('behavior.html')) {
  link3.classList.add('active');
} else if (currentPage.includes('life_health.html')) {
  link4.classList.add('active');
} else if (currentPage.includes('other.html')) {
  link5.classList.add('active');
} 

// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var img = document.getElementById("thumbnail");
var modalImg = document.getElementById("full-size");
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


