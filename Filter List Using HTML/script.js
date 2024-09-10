// Get the input field and list elements
const filterInput = document.getElementById('filter-input');
const filterList = document.getElementById('filter-list');

// Add an event listener to the input field
filterInput.addEventListener('input', function() {
  // Get the filter value
  const filterValue = filterInput.value.toLowerCase();

  // Loop through the list items
  Array.prototype.forEach.call(filterList.children, function(listItem) {
    // Get the text content of the list item
    const text = listItem.textContent.toLowerCase();

    // Check if the list item matches the filter value
    if (filterValue !== '') {
      // If the filter value is not empty, show only the matching list items that start with the filter value
      if (text.startsWith(filterValue)) {
        listItem.style.display = 'block';
      } else {
        listItem.style.display = 'none';
      }
    } else {
      // If the filter value is empty, hide all list items
      listItem.style.display = 'none';
    }
  });
});