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
    threshold: 0.1, // Trigger when 50% of the section is in view
  }
);

fadeIn.forEach((element) => observer.observe(element));

// Fix scrolling for the wiki window
const wikiContent = document.querySelector(".wiki-content");

document.querySelectorAll(".wiki-sidebar a").forEach((link) => {
  link.onclick = (e) => {
    // Prevents from running if on mobile
    if (window.innerWidth < 768) return;
    // Stops main page from scrolling
    e.preventDefault();
    // Scroll the inner window
    wikiContent.scrollTo({
      top:
        document.querySelector(link.getAttribute("href")).offsetTop -
        wikiContent.offsetTop -
        10,
      behavior: "smooth",
    });
  };
});
