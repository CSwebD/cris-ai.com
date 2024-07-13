document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".options a");
    const menuToggle = document.querySelector(".menu-toggle");
    const options = document.querySelector(".options");

    // Set home button to active initially
    document.getElementById("home-btn").classList.add("home-active");

    // Function to remove all active classes
    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove("home-active", "projects-active", "about-active", "experience-active", "contact-active");
        });
    }

    // Function to add active class based on the current section
    function addActiveClass(sectionId) {
        removeActiveClasses();
        switch(sectionId) {
            case "home":
                document.getElementById("home-btn").classList.add("home-active");
                break;
            case "projects":
                document.getElementById("projects-btn").classList.add("projects-active");
                break;
            case "about":
                document.getElementById("about-btn").classList.add("about-active");
                break;
            case "experience":
                document.getElementById("experience-btn").classList.add("experience-active");
                break;
            case "contact":
                document.getElementById("contact-btn").classList.add("contact-active");
                break;
        }
    }

    // IntersectionObserver callback
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addActiveClass(entry.target.id);
            }
        });
    };

    // IntersectionObserver options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // Adjust as needed for earlier/later detection
    };

    // Create IntersectionObserver instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Menu toggle event
    menuToggle.addEventListener("click", () => {
        options.classList.toggle("show");
    });

    // Hide menu on link click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            options.classList.remove("show");
        });
    });
});