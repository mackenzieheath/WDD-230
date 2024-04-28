document.addEventListener('DOMContentLoaded', function() {
    // Get current year for copyright
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Get last modified date
    alert(document.lastModified);

});
