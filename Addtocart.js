document.addEventListener("DOMContentLoaded", function () {
  // Load course counts from local storage
  function loadCourseCounts() {
    const courses = ["HTML", "CSS", "Java", "React"];

    courses.forEach((course) => {
      let count = 1;
      let quantityInput = document.getElementById(course + "-qty");
      if (quantityInput) {
        quantityInput.value = count;
      }
    });
  }

  // Sets the count for a given course to 1 in local storage
  function setCourseCountToOne(courseName) {
    localStorage.setItem(courseName, 1);
  }

  function recalculateCart() {
    let subtotal = 0;

    document.querySelectorAll(".items").forEach((item) => {
      const priceElement = item.querySelector(".itemPrice");
      const qtyElement = item.querySelector(".qty");
      const totalElement = item.querySelector(".prodTotal p");

      let price = parseFloat(priceElement.textContent);
      let qty = qtyElement.value ? parseInt(qtyElement.value, 10) : 0;
      let total = price * qty;

      totalElement.textContent = `₹${total.toFixed(2)}`;
      subtotal += total;
    });

    const promoCodeInput = document.querySelector(".promoCode input");
    if (promoCodeInput.value === "AK30") {
      subtotal *= 0.7;
      alert("Promo code successfully applied!");
    } else if (promoCodeInput.value) {
      alert("Invalid promo code!");
    }

    let shipping = 200;
    let tax = subtotal * 0.01;

    document.querySelector(
      ".subtotal .totalRow .value"
    ).textContent = `₹${subtotal.toFixed(2)}`;
    document.querySelector(
      ".subtotal li:nth-child(2) .value"
    ).textContent = `₹${shipping.toFixed(2)}`;
    document.querySelector(
      ".subtotal li:nth-child(3) .value"
    ).textContent = `₹${tax.toFixed(2)}`;
    document.querySelector(
      ".subtotal .totalRow.final .value"
    ).textContent = `₹${(subtotal + shipping + tax).toFixed(2)}`;
  }

  document.querySelectorAll(".qty").forEach((qtyInput) => {
    qtyInput.addEventListener("input", function () {
      recalculateCart();
    });
  });

  document.querySelectorAll(".remove").forEach((removeBtn) => {
    removeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const item = e.target.closest(".items");
      item.parentNode.removeChild(item);
      recalculateCart();
    });
  });

  document
    .querySelector(".promoCode .btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      recalculateCart();
    });

  document
    .querySelector(".btn.continue")
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "payment.html";
    });

  // Button for purchasing the course
  let buyButton = document.getElementById("buyButton");
  if (buyButton) {
    buyButton.addEventListener("click", function (e) {
      e.preventDefault();
      let courseName = e.target.getAttribute("data-course");
      // setCourseCountToOne(courseName);
      window.location.href = "./Addtocart.html";
    });
  }

  // Initial loading and calculations
  loadCourseCounts();
  recalculateCart();
});
