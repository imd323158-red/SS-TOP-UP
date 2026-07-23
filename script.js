document.addEventListener("DOMContentLoaded", () => {

  // Menu
  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");

  if (menuBtn && sideMenu) {
    menuBtn.addEventListener("click", () => {
      sideMenu.classList.toggle("active");
    });
  }

  // BUY NOW
  const buyBtn = document.querySelector(".buy-btn");

  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      document.getElementById("shop").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // Select Button
  document.querySelectorAll(".select-btn").forEach(btn => {

    btn.addEventListener("click", () => {

      const pack = btn.dataset.package;
      const price = btn.dataset.price;

      localStorage.setItem("package", pack);
      localStorage.setItem("price", price);

      window.location.href = "checkout.html";

    });

  });

});