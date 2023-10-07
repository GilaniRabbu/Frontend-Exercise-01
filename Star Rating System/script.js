const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");

console.log(stars);

stars.forEach((star) => {
    star.addEventListener("click", () => {
        const star_num = star.getAttribute("data-num");
        rating.value = star_num;

        stars.forEach((elem, position) => {
            if (position < star_num) {
                elem.classList.add("active");
            } else {
                elem.classList.remove("active");
            }
        });
    });
});