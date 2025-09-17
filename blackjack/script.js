// script.js
document.getElementById("dealerBtn").addEventListener("click", () => {
  alert("Dealer selected. Prepare the deck and shuffle the fate.");
  // Future: redirect to dealer dashboard
});

document.getElementById("playerBtn").addEventListener("click", () => {
  document.getElementById("playerCount").classList.remove("hidden");
});

document.getElementById("startGameBtn").addEventListener("click", () => {
  const numPlayers = parseInt(document.getElementById("numPlayers").value);
  if (numPlayers >= 1 && numPlayers <= 5) {
    alert(`Summoning ${numPlayers} players into the Codex chamber...`);
    // Future: redirect to game board with player count
  } else {
    alert("Invalid number. The Codex only allows 1–5 players.");
  }
});
