// Set the initial theme and toggle button visibility
const root = document.documentElement;
root.className = 'dark';

const lightToggle = document.querySelector(".light-toggle");
const darkToggle = document.querySelector(".dark-toggle");

lightToggle.style.display = "none"; // Start with light toggle hidden

function setTheme() {
    const currentTheme = root.className;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    // Toggle the visibility of buttons based on the new theme
    if (newTheme === 'light') {
        lightToggle.style.display = "block";
        darkToggle.style.display = "none";
    } else {
        lightToggle.style.display = "none";
        darkToggle.style.display = "block";
    }
}

// Add a click event listener to both toggle buttons
darkToggle.addEventListener('click', setTheme);
lightToggle.addEventListener('click', setTheme);


document.querySelector("#submit").addEventListener("click", ()=>{
    document.querySelectorAll("input").forEach((element)=>{element.classList.add("invalid-toggler")});
});
