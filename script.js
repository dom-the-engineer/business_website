document.getElementById("bookingForm").addEventListener("submit", async function (e) {
e.preventDefault();


const booking = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
date: document.getElementById("date").value,
time: document.getElementById("time").value,
service: document.getElementById("service").value,
};


const res = await fetch("/book", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(booking)
});


const data = await res.json();
document.getElementById("responseMsg").innerText = data.message;
});