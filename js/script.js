// Clock function in header
function updateTime() {
  let dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

setInterval(updateTime, 1000);

updateTime();

// Boot-up screen

// Disable scrolling during boot up screen
document.body.style.overflow = "hidden";

// Add hide to it and let you scroll again
setTimeout(() => {
  document.querySelector(".boot-screen").classList.add("hide");
  document.body.style.overflow = "auto";
}, 2000);

// Remove the boot screen from the DOM
setTimeout(() => {
  document.querySelector(".boot-screen").remove();
}, 3500);

// Animation for sections

const fadeIn = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When the section is in view, add the "visible" class to show it
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop watching once it's in view
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 50% of the section is in view
  }
);

fadeIn.forEach((element) => observer.observe(element));
