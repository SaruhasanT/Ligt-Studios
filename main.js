const wrapper = document.querySelector(".hero .wrapper");
const header = document.querySelector("header");
const cards = document.querySelectorAll(".grid-container .card");
const detailedFeedback = document.querySelector(".detailed-feedback");
const darkBg = document.querySelector(".dark-bg");
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled <= 300) {
    wrapper.style.transform = `rotateX(${-scrolled / 3}deg)`;
  }
  if (scrolled > 100) {
    if (!(scrolled > 3580 && scrolled <= 4000)) {
      header.classList.add("below");
    }
    document.querySelector(".hero").style.top = "100px";
  } else {
    header.classList.remove("below");
    document.querySelector(".hero").style.top = "0";
  }
  if (scrolled > 3500) {
    header.classList.remove("below");
  }
});
const options = {
  threshold: 0.2,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("active", entry.isIntersecting);
    // if (entry.isIntersecting) observer.unobserve(entry.target);
  });
}, options);
const newObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
      if (entry.isIntersecting) newObserver.unobserve(entry.target);
    });
  },
  {
    rootMargin: "100px",
  }
);
const teamContainer = document.querySelector(".team-container");
newObserver.observe(teamContainer);
const elements = document.querySelectorAll(
  ".service .description, .service img, .service h2, .video-title"
);
elements.forEach((el) => {
  observer.observe(el);
});

const inputs = document.querySelectorAll(".appointment form input");
const appointmentForm = document.querySelector(".appointment form");
appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(
    ".booked"
  ).children[0].innerText = `THANK YOU ${inputs[0].value.toUpperCase()}, YOU HAVE BOOKED YOUR APPOINTMENT ON ${
    inputs[2].value
  } AT ${inputs[3].value}`;
  document.querySelector(".booked").style.display = "block";
  darkBg.style.display = "block";
  document.body.style.overflowY = "hidden";
});
document.querySelector(".booked").children[1].addEventListener("click", () => {
  document.querySelector(".booked").style.display = "none";
  darkBg.style.display = "none";
  document.body.style.overflowY = "auto";
});
