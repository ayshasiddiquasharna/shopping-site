var searchInput = document.getElementById('search');
var searchButton = document.getElementById('search-button');

// Add click event listener to the button
searchButton.addEventListener('click', function () {
    // Get the value entered in the search input
    var searchElement = searchInput.value;

    // Log the search term to the console
    // console.log('Search term:', searchElement);

    // Navigate to a specific page with the search term as a query parameter
    window.location.href = 'results.html?search=' + encodeURIComponent(searchElement);

});



