// Simple example: show a message when items are added to cart
document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});
