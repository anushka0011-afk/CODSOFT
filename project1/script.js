document.addEventListener('DOMContentLoaded', () => {
    // Dynamic year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Add simple console greeting
    console.log("Welcome to Anushka Sharma's portfolio site!");
});
