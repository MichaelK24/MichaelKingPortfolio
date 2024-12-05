const navItems = // Array of navigation button labels and their corresponding pages
[
    { label: "Home", link: "index.html" }, //assigns labled button home to file index.htlm
    { label: "About Me", link: "about.html" }, //assigns about  button home to file about.htlm
    { label: "Projects", link: "projects.html" }, //assigns projects button home to file projects.htlm 
    { label: "Contact", link: "contact.html" } //assigns labled button contact to file contact.htlm
];
const navBar = document.getElementById("nav-bar");// Get the navigation bar container

if (navBar) {
    // Create buttons dynamically
    navItems.forEach(item => 
        {
        const button = document.createElement("button");
        button.textContent = item.label; // Set button text
        button.addEventListener("click", () =>  /*adds listenr that checks for a click */
        {
            window.location.href=item.link; // navigate to the linked page
        });
        navBar.appendChild(button); //put the button to the navigation bar
    });
} else 
{
    console.error("nav-bar not found!");//error checking
}