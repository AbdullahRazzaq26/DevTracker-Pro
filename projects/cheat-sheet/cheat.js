const cheatData = {
  html: `
📄 HTML Boilerplate
----------------------------
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  </body>
</html>

🔹 Semantic Tags: <header>, <main>, <section>, <footer>
🔹 Form: <form>, <input>, <label>, <button>, <select>
`,

  css: `
🎨 CSS Essentials
----------------------------
🔹 Flexbox: display: flex; justify-content: center; align-items: center;
🔹 Grid: display: grid; grid-template-columns: repeat(3, 1fr);
🔹 Position: static | relative | absolute | fixed | sticky
🔹 Media Query: @media (max-width: 768px) { ... }
🔹 Animation: @keyframes fadeIn { from {opacity: 0;} to {opacity: 1;} }
`,

  js: `
🧠 JavaScript Basics
----------------------------
🔹 Arrays: const arr = [1, 2, 3];
🔹 forEach: arr.forEach(item => console.log(item));
🔹 Objects: const user = { name: 'Ali', age: 20 };
🔹 Event Listener: element.addEventListener('click', fn);
🔹 Loops: for (let i = 0; i < 5; i++) { ... }
`,

  git: `
🧪 Git Commands
----------------------------
git init                   - initialize repo
git add .                  - stage all changes
git commit -m "..."        - commit with message
git push origin main       - push to GitHub
git pull origin main       - pull latest code
git checkout -b branch     - create branch
`,

  regex: `
🔍 Regex Patterns
----------------------------
Email: /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/
Phone: /^\\d{10}$/
Digits only: /^\\d+$/
Test match: /pattern/.test("text")
`,

  terminal: `
💻 Terminal Commands
----------------------------
cd folder/         - change directory
ls                 - list contents
mkdir folder       - create folder
rm file.txt        - delete file
touch file.js      - create file
clear              - clear terminal
grep "text" .      - search for "text"
Ctrl + C           - cancel current process
Ctrl + L           - clear terminal output
Up/Down Arrows     - scroll through history
Tab                - auto-complete
`,

  vscode: `
🧩 VS Code Shortcuts
----------------------------
Ctrl + D            - select next same word
Alt + ↑ / ↓         - move line up/down
Ctrl + /            - comment/uncomment line
Ctrl + B            - toggle sidebar
Ctrl + P            - quick open file
Ctrl + Shift + F    - global search
Ctrl + Shift + P    - command palette
Alt + Click         - multi-cursor
Ctrl + \`           - open terminal
`,

  markdown: `
📝 Markdown Syntax
----------------------------
# H1, ## H2, ### H3
**Bold** _Italic_ ~~Strikethrough~~
- List item
[Link](https://example.com)
\`\`\`js
console.log("Code Block");
\`\`\`
`,

  devtools: `
🛠 DevTools Shortcuts
----------------------------
Ctrl + Shift + I       - Open DevTools
Ctrl + Shift + C       - Toggle element picker
Ctrl + Shift + J       - Console directly
Ctrl + L               - Clear console
Esc                    - Show Console Drawer
Right-click → Inspect  - Quick element view
`,

  general: `
📚 General Coding Shortcuts
----------------------------
Ctrl + /               - Comment line (HTML/CSS/JS)
Alt + Shift + ↑ / ↓    - Duplicate line
Ctrl + Shift + L       - Select all matching
F12 or Ctrl + Click    - Go to definition
Ctrl + Space           - Trigger suggestions
`
};

const selector = document.getElementById("cheatSelector");
const output = document.getElementById("cheatOutput");

output.textContent = cheatData.html;

selector.addEventListener("change", () => {
  const selected = selector.value;
  output.textContent = cheatData[selected];
});
