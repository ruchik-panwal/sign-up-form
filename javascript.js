// for all the buttons in the webpage
const button = document.querySelectorAll("button");

button.forEach((button) => {

    button.addEventListener('mousedown', () => {

        if (button.className === "themeToggle") {
            const root = document.documentElement;
            root.className = root.className === 'dark' ? 'light' : 'dark';
            
            const icon = document.querySelector("i");
            const iconTheme = icon.className === 'fa-sun' ? 'fa-moon' : 'fa-sun';
            console.log(iconTheme);
            icon.className = "";
            icon.classList.add("fa-solid" , iconTheme);
        }

    });
});

function themeToggle(){
}