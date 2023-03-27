function toggleLight(){
    var element = document.querySelector("body");
    element.classList.toggle("darkmode");

    var element = document.querySelectorAll(".card");
    for (var i = 0; i < element.length; i++) {
        element[i].classList.toggle("bg-light");
        element[i].classList.toggle("text-black");
        element[i].classList.toggle("bg-dark");
        element[i].classList.toggle("text-white");
    }
}