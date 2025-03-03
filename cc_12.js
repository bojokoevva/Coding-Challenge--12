// Task 1 - Created Revenue Metric Card
const dashboard = document.getElementById("dashboard"); // Select the dashboard container using getElementById.
const dashboardSelector = document.querySelector('#dashboard'); // Select the dashboard container using querySelector.
const revenueCard = document.createElement("div"); // Create a new <div> element to represent the metric card.

revenueCard.setAttribute("class", "metric-card"); // Assign a class "metric-card" to the new element for styling.
revenueCard.setAttribute("id", "revenueCard"); // Assign an id "revenueCard" to the new element for identification.
revenueCard.textContent = "Revenue: $0"; // Set the text content of the card to show the title and placeholder value.
dashboard.appendChild(revenueCard); // Append the newly created metric card to the dashboard container.


// Task 2 - Updated Metric Cards via Array Conversion
const metricCardList = document.querySelectorAll(".metric-card"); // Select all elements with the class "metric-card".
const metricCardArray = Array.from(metricCardList); // Convert the NodeList of metric cards into an array for easier manipulation.

metricCardArray.forEach(card => { // Iterate over the array of metric cards using .forEach()
    card.textContent += " - Updated"; // Append " - Updated" to the text content of each card.
    card.setAttribute("style", "background-color: greenyellow;"); // Change the background color of each card to "greenyellow".
});


// Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList"); // Get the inventory list container by its ID.

function addInventoryItem(product) { // Define a function to add a product item to the inventory list.
    let newLi = document.createElement("li"); // Create a new <li> element for the product item.
    newLi.setAttribute("class", "product-item"); // Assign a class "product-item" to the new <li> for styling.
    newLi.setAttribute("id", product); // Assign the product name as the id for the new <li>.
    newLi.setAttribute("onclick", `removeInventoryItem("${product}")`); // Set an onclick event to remove the item when clicked.
    newLi.textContent = product; // Set the text content of the new <li> to the product name.
    inventoryList.appendChild(newLi); // Append the new product item to the inventory list.
};

addInventoryItem("Click me"); // Test the addInventoryItem function with a sample product.
addInventoryItem("Add a product below"); // Test with another sample product.

let productForm = document.getElementById('productForm'); // Get the product form by its ID.
let error = document.getElementById('error'); // Get the error message element by its ID.

productForm.addEventListener('submit', (event) => { // Add an event listener to handle form submission.
    let productName = document.getElementById('productName').value; // Get the product name from the text input field.
    if (productName === '') { // If the product name is empty, show an error message.
        error.textContent = 'Product name is required'; // Display the error message.
        event.preventDefault(); // Prevent form submission if product name is empty.
    } else {
        error.textContent = ''; // Clear any previous error message.
        addInventoryItem(productName); // Call the addInventoryItem function to add the new product.
        event.preventDefault(); // Prevent the form from submitting.
    }
});

function removeInventoryItem(id) { // Function to remove a specific <li> item when clicked.
    let invItem = document.getElementById(id); // Get the item to be removed using its id.
    inventoryList.removeChild(invItem); // Remove the <li> item from the inventory list.
};
