// for all the buttons in the webpage
const button = document.querySelectorAll("button");

button.forEach((button) => {

    button.addEventListener('mousedown', () => {

        if (button.className === "themeToggle") {
            const root = document.documentElement;
            root.className = root.className === 'dark' ? 'light' : 'dark';

            const icon = document.querySelector("i");
            if (root.className === "dark") {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }
            else {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        }

    });
});

const input = document.querySelectorAll("input");


input.forEach((input) => {

    input.addEventListener("input", () => {

        if (input.validity) {
            const indicator = document.getElementById(input.id);
            indicator.setAttribute("style" , "background-color : green;");
        }
    });
});
