// Select the element
var aa = document.getElementById("search-down");

// Define the function to toggle visibility
function hide_search_down() {
    a = document.getElementById("options");
    // Get the computed style of the element to check its display property
    var computedStyle = window.getComputedStyle(a);
    
    // Toggle visibility based on computed display value
    if (computedStyle.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}

// Attach the event listener
aa.addEventListener('click', hide_search_down);
