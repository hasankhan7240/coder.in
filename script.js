// Greeting based on time of day
window.onload = function () {
  const greetingText = document.getElementById("greeting");
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    greetingText.textContent = "Good morning, beautiful!";
  } else if (hours < 18) {
    greetingText.textContent = "Good afternoon, hope you're smiling!";
  } else {
    greetingText.textContent = "Good evening, hope you're feeling great!";
  }
};

// Toggle between light and dark theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Reasons array and addReason function
const reasons = [
  "You're incredibly thoughtful.",
  "You have a great sense of humor.",
  "You inspire me every day.",
  "You always know how to make me smile.",
];

function addReason() {
  const reasonsList = document.getElementById("reasons-list");
  const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

  const listItem = document.createElement("li");
  listItem.textContent = randomReason;

  reasonsList.appendChild(listItem);
}

// Simulate sending a message
function sendMessage(event) {
  event.preventDefault();
  const messageInput = document.getElementById("message").value;

  if (messageInput.trim() !== "") {
    document.getElementById("confirmation").style.display = "block";
    triggerConfetti();
    setTimeout(() => {
      document.getElementById("confirmation").style.display = "none";
    }, 3000);
  }
}

// Confetti effect
function triggerConfetti() {
  const confettiSettings = { target: "confetti-canvas" };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => {
    confetti.clear();
  }, 5000); // Stop after 5 seconds
}
