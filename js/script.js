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