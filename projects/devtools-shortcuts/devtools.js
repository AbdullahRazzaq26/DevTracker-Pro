const devtoolsShortcuts = [
  { action: 'Open DevTools (last used panel)', win: 'Ctrl + Shift + I', mac: 'Cmd + Option + I' },
  { action: 'Open Console panel', win: 'Ctrl + Shift + J', mac: 'Cmd + Option + J' },
  { action: 'Open Elements panel', win: 'Ctrl + Shift + C', mac: 'Cmd + Option + C' },
  { action: 'Show Settings', win: 'F1 or ?', mac: 'F1 or ?' },
  { action: 'Focus next panel', win: 'Ctrl + ]', mac: 'Cmd + ]' },
  { action: 'Focus previous panel', win: 'Ctrl + [', mac: 'Cmd + [' },
  { action: 'Toggle docking position', win: 'Ctrl + Shift + D', mac: 'Cmd + Shift + D' },
  { action: 'Toggle Device Mode', win: 'Ctrl + Shift + M', mac: 'Cmd + Shift + M' },
  { action: 'Open Command Menu', win: 'Ctrl + Shift + P', mac: 'Cmd + Shift + P' },
  { action: 'Toggle Drawer (console from any panel)', win: 'Esc', mac: 'Esc' },
  { action: 'Normal Reload', win: 'F5 or Ctrl + R', mac: 'Cmd + R' },
  { action: 'Hard Reload (no cache)', win: 'Ctrl + F5 or Ctrl + Shift + R', mac: 'Cmd + Shift + R' },
  { action: 'Search within current panel', win: 'Ctrl + F', mac: 'Cmd + F' },
  { action: 'Search across all sources', win: 'Ctrl + Shift + F', mac: 'Cmd + Option + F' },
  { action: 'Open file in Sources', win: 'Ctrl + O or Ctrl + P', mac: 'Cmd + O or Cmd + P' },
  { action: 'Zoom In', win: 'Ctrl + Shift + +', mac: 'Cmd + Shift + +' },
  { action: 'Zoom Out', win: 'Ctrl + -', mac: 'Cmd + -' },
  { action: 'Reset Zoom', win: 'Ctrl + 0', mac: 'Cmd + 0' }
];


const container = document.querySelector('.shortcut-container');
devtoolsShortcuts.forEach(short => {
  const card = document.createElement("div");
  card.className = "shortcut-card";
  card.innerHTML = `
    <div class="shortcut-key">${short.win}</div>
    <div class="shortcut-desc">${short.action}</div>
    <div class="shortcut-key mac">${short.mac}</div>
  `;
  container.appendChild(card);
});
