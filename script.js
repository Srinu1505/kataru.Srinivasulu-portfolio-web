 // Contact form alert
 document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});

// Show/Hide Skills or Education
function showSection(sectionId) {
  document.getElementById("skills").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById(sectionId).style.display = "block";
}

// ✅ Toggle menu for mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-list').classList.toggle('show');
});