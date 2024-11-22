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
}, 3000);
