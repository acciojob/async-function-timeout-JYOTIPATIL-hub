//your JS code here. If required.
// Function to simulate a delay using async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the form submission
async function handleSubmit() {
  const text = document.getElementById('text').value; // Get text input
  const delayTime = parseInt(document.getElementById('delay').value, 10); // Get delay input
  
  // If no text or delay value, do nothing
  if (!text || isNaN(delayTime)) {
    return;
  }

  // Wait for the specified delay
  await delay(delayTime);

  // Display the text after the delay
  document.getElementById('output').innerText = text;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', handleSubmit);
