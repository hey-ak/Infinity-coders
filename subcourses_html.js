document.addEventListener("DOMContentLoaded", function () {
    let buyButton = document.getElementById("buyButton");

    buyButton.addEventListener("click", function (e) {
        e.preventDefault();
        let courseName = e.target.getAttribute("data-course");

        // Get the current count, or default to 0 if it doesn't exist.
        let currentCount = localStorage.getItem(courseName) || 0;

        // Set the new count by incrementing the old count by 1.
        localStorage.setItem(courseName, Number(currentCount) + 1);

        window.location.href = "./Addtocart.html";
    });
});
