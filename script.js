let currentAccessLevel = 0;

function scanKeycard() {
  const level = parseInt(document.getElementById("keycard-select").value);
  const result = document.getElementById("scan-result");

  if (!level) {
    result.innerHTML = "⚠️ No keycard detected. Insert a valid UA card.";
    return;
  }

  if (level === 1 && currentAccessLevel === 0) {
    currentAccessLevel = 1;
    result.innerHTML = "✅ Golden Card accepted. Casino Lobby unlocked.";
  } else if (level === 2 && currentAccessLevel === 1) {
    currentAccessLevel = 2;
    result.innerHTML = "🔓 Platinum Titan Card accepted. Vault Wing access granted.";
  } else if (level === 3 && currentAccessLevel === 2) {
    currentAccessLevel = 3;
    result.innerHTML = "🧬 Diamond Pink Proximity Card accepted. Arctic Grand Security unlocked.";
  } else {
    result.innerHTML = "❌ Access denied. You must progress through prior levels.";
  }
}
