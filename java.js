const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 120) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
      event.preventDefault(); 
      const email = document.getElementById('email').value;
      const message = `¡Gracias por suscribirte con el correo electrónico: ${email}!`;
      alert(message);
      form.reset();
  });
});