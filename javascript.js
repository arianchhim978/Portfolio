document.getElementById('bar').addEventListener('click', function(event) {
    var overlay = document.getElementById('overlay');
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none'; // Close overlay if already open
    } else {
        overlay.style.display = 'block'; // Open overlay if closed
    }
    event.stopPropagation(); // Prevent click event from propagating to document
});

document.addEventListener('click', function(event) {
    var overlay = document.getElementById('overlay');
    if (overlay.style.display === 'block' && event.target !== document.getElementById('bar')) {
        overlay.style.display = 'none'; // Close overlay if clicked outside of it and not on the bar
    }
});
