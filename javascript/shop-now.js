function navigateToProducts() {
    // You can include additional logic or data here
    var searchProducts = "your_search_value";  // Replace this with the actual search value

    // Navigate to results.html with search parameter
    window.location.href = `products.html?search=${encodeURIComponent(searchProducts)}`;
}