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
const password = document.querySelector("#password")


input.forEach((input) => {

    input.addEventListener("input", () => {

        if (input.validity.valid) {
            const indicator = document.getElementById(input.id);
            indicator.setAttribute("style", "background-color : green;");
        }


        if (input.id === "cfrmPassword") {
            if (input.value != password.value) {
                const passIndicator = document.getElementById(input.id);
                passIndicator.setAttribute("style", "background-color : #be0606;");
            }
        }
    });
});

const images = [
    {
        url: "images/dim-gunger-mzbviiM63VA-unsplash.jpg",
        accent: "#fee032",
        creatorName: "Dim Gunger",
        creatorLink: "https://unsplash.com/@gundim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/yellow-and-black-road-bike-mzbviiM63VA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
        url: "images/atharva-tulsi-poiZagysHEY-unsplash.jpg",
        accent: "#ff8409",
        creatorName: "Atharva Tulsi",
        creatorLink: "https://unsplash.com/@atharva_tulsi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/black-and-yellow-auto-rickshaw-on-road-poiZagysHEY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
        url: "images/craig-smith-XeYx043QD5U-unsplash.jpg",
        accent: "#003C95",
        creatorName: "Craig Smith",
        creatorLink: "https://unsplash.com/@craigsssmith?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/ferris-wheel-photo-XeYx043QD5U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
        url: "images/klim-musalimov-1r0aLUYxUH0-unsplash.jpg",
        accent: "black",
        creatorName: "Klim Musalimov",
        creatorLink: "https://unsplash.com/@klim11?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/black-pencil-on-white-surface-1r0aLUYxUH0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
        url: "images/max-ovcharenko-8vgJfO03SyE-unsplash.jpg",
        accent: "white",
        creatorName: "Max Ovcharenko",
        creatorLink: "https://unsplash.com/@chestmax?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/a-black-and-white-photo-of-a-woman-holding-a-camera-8vgJfO03SyE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
        url: "images/taiki-ishikawa-hpbP-_-vdb4-unsplash.jpg",
        accent: "#83000E",
        creatorName: "Taiki Ishikawa",
        creatorLink: "https://unsplash.com/@fl__q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/a-tall-red-building-with-a-tower-on-top-of-it-hpbP-_-vdb4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
        url: "images/tianhao-zhang-R27tHFHt034-unsplash.jpg",
        accent: "#fc0b58",
        creatorName: "Tianhao Zhang",
        creatorLink: "https://unsplash.com/@julianmokzth?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/red-and-white-cable-car-under-blue-sky-during-daytime-R27tHFHt034?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
        url: "images/tim-mossholder-P4JMsFdMbng-unsplash.jpg",
        accent: "#f600b1",
        creatorName: "Tim Mossholder",
        creatorLink: "https://unsplash.com/@timmossholder?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/silhouette-of-palm-trees-during-sunset-P4JMsFdMbng?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
        url: "images/tony-litvyak-5BKCbinEELM-unsplash.jpg",
        accent: "#0ab596",
        creatorName: "Tony Litvyak",
        creatorLink: "https://unsplash.com/@justatony?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/a-close-up-of-a-persons-blue-eye-5BKCbinEELM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
        url: "images/yong-chuan-tan-FPm5MGSqD3w-unsplash.jpg",
        accent: "#AFB3A7",
        creatorName: "Yong Chuan",
        creatorLink: "https://unsplash.com/@yongchuan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        imageWeb: "https://unsplash.com/photos/two-person-standing-while-watching-sky-FPm5MGSqD3w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    }
];

const imageHolder = document.querySelector(".images");
const creator = document.querySelector(".creator");

const root = document.querySelector(":root");


let count = 0;
let timer = 3000;
let interval = setInterval(imageChange, timer);



imageHolder.addEventListener("mouseenter", () => {
    clearInterval(interval);
});

imageHolder.addEventListener("mouseleave", () => {
    interval = setInterval(imageChange, timer);
});

function imageChange() {

    count = count == 10 ? 0 : count;
    const image = images[count];

    imageHolder.style.backgroundImage = "url(" + image.url + ")";
    root.style.setProperty('--image-accent' , image.accent);
    creator.textContent = image.creatorName;
    creator.href = image.creatorLink;
    

    count++;
}