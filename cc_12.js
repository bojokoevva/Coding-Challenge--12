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