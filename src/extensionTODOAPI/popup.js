// Get the user token from local storage or prompt for it
let token = localStorage.getItem("todoist-token");
if (!token) {
  token = prompt("Please enter your Todoist user token:");
  localStorage.setItem("todoist-token", token);
}

// Create a Todoist client with the user token
const todoist = require("@doist/todoist-api-typescript").default;
const client = new todoist(token);

// Define a function to add a task to Todoist using the API
async function addTask() {
  // Get the task name from the input element
  const taskInput = document.getElementById("task-input");
  const taskName = taskInput.value;

  // Check if the task name is not empty
  if (taskName) {
    // Create a task object with the name and other properties
    const task = {
      content: taskName,
      due_string: "today",
      priority: 1,
    };

    // Send a request to create the task using the client
    try {
      await client.createItem(task);
      // Display a success message and clear the input
      alert("Task added successfully!");
      taskInput.value = "";
    } catch (error) {
      // Display an error message
      alert("Something went wrong: " + error.message);
    }
  } else {
    // Display a warning message
    alert("Please enter a task name.");
  }
}
