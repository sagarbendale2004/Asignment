function myFunction() {
    var x = document.getElementById("nav_elem");
    var hamburgerIcon = document.getElementById("hamburgar");

    if (x.style.display === "block") {
        x.style.display = "none";
        hamburgerIcon.classList.remove("fa-times");
    } else {
        x.style.display = "block";
        hamburgerIcon.classList.add("fa-times");
    }
}

