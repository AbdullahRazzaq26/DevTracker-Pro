document.addEventListener("DOMContentLoaded", () => {
   // Place all existing logic inside here
});

function formatJSON() {
  const input = document.getElementById('jsonInput').value;
  const output = document.getElementById('jsonOutput');

  try {
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, 2);
    output.textContent = formatted;
    output.style.color = "#76ABAE";
  } catch (err) {
    output.textContent = `❌ Invalid JSON:\n${err.message}`;
    output.style.color = "#ff6b6b";
  }
}

function minifyJSON() {
  const input = document.getElementById('jsonInput').value;
  const output = document.getElementById('jsonOutput');

  try {
    const parsed = JSON.parse(input);
    const minified = JSON.stringify(parsed);
    output.textContent = minified;
    output.style.color = "#76ABAE";
  } catch (err) {
    output.textContent = `❌ Invalid JSON:\n${err.message}`;
    output.style.color = "#ff6b6b";
  }
}

function copyJSON() {
  const output = document.getElementById('jsonOutput').textContent;
  navigator.clipboard.writeText(output).then(() => {
    alert("✅ Copied to clipboard!");
  });
}

function clearJSON() {
  document.getElementById('jsonInput').value = '';
  document.getElementById('jsonOutput').textContent = '';
}
