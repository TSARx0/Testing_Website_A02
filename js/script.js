// This JavaScript file is located in the 'js' folder

// Function to change the text of the paragraph with id 'message'
function changeText() {
  const messageElement = document.getElementById("message");
  messageElement.textContent = "Hello, you clicked the button!";
}

// Event listener for the button click to trigger the changeText function
document.getElementById("changeTextButton").addEventListener("click", changeText);
