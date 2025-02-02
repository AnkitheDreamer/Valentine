// Get references to HTML elements
const card = document.getElementById("card");
const message = document.getElementById("message");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const yayMessage = document.getElementById("yay");
const nameField = document.getElementById("name");

// Function to update the card for a specific name
function updateNameOnCard(name) {
    if (name) {
        nameField.textContent = `For ${name}`; // Update the displayed name dynamically
    }
}

// On card click, show the message
card.addEventListener("click", () => {
    card.style.display = "none";
    message.style.display = "block";
});

// On "YES" button click, show the "Yay!" message
yesButton.addEventListener("click", () => {
    message.style.display = "none";
    yayMessage.style.display = "block";

    // Remove all dynamically created "YES" buttons
    document.querySelectorAll(".yes-clone").forEach(button => button.remove());
});

// On "NO" button click, create new "YES" buttons dynamically
noButton.addEventListener("click", () => {
    const newYesButton = document.createElement("button");
    newYesButton.textContent = "YES!";
    newYesButton.className = "yes-clone yes"; // Add 'yes-clone' and 'yes' classes
    newYesButton.style.position = "absolute";
    newYesButton.style.left = `${Math.random() * 80 + 10}%`;
    newYesButton.style.top = `${Math.random() * 80 + 10}%`;

    // Add functionality to the new "YES" buttons
    newYesButton.addEventListener("click", () => {
        message.style.display = "none";
        yayMessage.style.display = "block";

        // Remove all dynamically created "YES" buttons
        document.querySelectorAll(".yes-clone").forEach(button => button.remove());
    });

    document.body.appendChild(newYesButton);
});

// Check if a name is provided in the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

// Update the card dynamically based on the URL parameter
updateNameOnCard(name);
