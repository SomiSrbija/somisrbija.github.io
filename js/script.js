const bookingBtn = document.getElementById("bookingBtn");
const message = document.getElementById("message");

if (bookingBtn) {
    bookingBtn.addEventListener("click", function () {
        message.textContent = "Tack! Ring oss eller mejla för att boka bord.";
    });
}