document.addEventListener("DOMContentLoaded", function() {
    // Example of adding some interactivity with JavaScript
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            alert(`You clicked on the ${section.id} section!`);
        });
    });
});
