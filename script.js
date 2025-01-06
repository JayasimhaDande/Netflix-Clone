let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const openSignIn = document.getElementById("openSignIn");
  const closeSignIn = document.getElementById("closeSignIn");
  const signInModal = document.getElementById("signInModal");

  // Show the sign-in modal
  openSignIn.addEventListener("click", function () {
      signInModal.style.display = "flex";
  });

  // Hide the sign-in modal
  closeSignIn.addEventListener("click", function () {
      signInModal.style.display = "none";
  });

  // Close the modal when clicking outside the container
  window.addEventListener("click", function (event) {
      if (event.target === signInModal) {
          signInModal.style.display = "none";
      }
  });
});
