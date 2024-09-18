
var logoutButton = document.getElementById('lgtbtn');

logoutButton.addEventListener('click', function() {
    window.location.href = 'Login.html';
});

let arrow = document.querySelectorAll(".arrow");
console.log(arrow);
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
        console.log(e);
    let arrowParent = e.target.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
    });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu-alt-left");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
})

// form container

let iconLinks = document.querySelectorAll('.icon-link[data-name="about"], .icon-link[data-name="contact"]');
let formContainers = document.querySelectorAll('.about-form-container, .contact-form-container');

let closeIcons = document.querySelectorAll('.close-icon');


function hideAllFormContainers() {
    formContainers.forEach(container => {
        container.classList.remove('show');
    });
}

iconLinks.forEach((iconLink, index) => {
    iconLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        hideAllFormContainers();
        
        // Toggle the visibility of the corresponding form container
        formContainers[index].classList.toggle('show');
    });
});

// Loop through each close icon
closeIcons.forEach((closeIcon, index) => {
    // Add click event listener to each close icon
    closeIcon.addEventListener('click', function() {
        // Hide the corresponding form container
        formContainers[index].classList.remove('show');
    });
});

/* dropdown for about */

let aboutDropdowns = document.querySelectorAll('.about-dropdown');

aboutDropdowns.forEach((aboutDropdown) => {
    aboutDropdown.addEventListener('click', function() {
        let submenu = this.nextElementSibling; // Select the next element, which is the submenu
        submenu.classList.toggle('show');
        let arrowIcon = this.querySelector('.arrowdowm'); // Select the arrow icon within the clicked dropdown
        arrowIcon.classList.toggle('rotate'); // Toggle rotation class
    });
});



