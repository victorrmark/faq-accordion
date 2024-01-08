function toggleAccordion(number){
    let circle = document.querySelectorAll(".circle")
    circle[number-1].classList.toggle("active")

    let space = document.querySelectorAll(".space");
    space[number-1].classList.toggle("active")

    let accordion = document.querySelectorAll(".accordion-body");
    accordion[number-1].classList.toggle("active")
}

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && e.target.classList.contains("accordion")) {
      e.preventDefault(); // Prevent the default behavior of the Enter key
      e.target.click();
    }
});
  