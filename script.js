// script.js

document.getElementById("search-button").addEventListener("click", function() {
    // Get the value from the search input
    const query = document.getElementById("search-input").value.toLowerCase();
    
    // Hide all recommendation sections initially
    document.querySelectorAll(".recommendation-section").forEach(section => {
        section.style.display = "none";
    });

    // Show the relevant section based on the query
    if (query === "beach") {
        document.getElementById("beach-recommendation").style.display = "block";
    } else if (query === "temple") {
        document.getElementById("temple-recommendation").style.display = "block";
    } else if (query === "country") {
        document.getElementById("country-recommendation").style.display = "block";
    } else {
        alert("Please enter a valid search term: 'beach', 'temple', or 'country'.");
    }
});
