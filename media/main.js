// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
() => {
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const keybindingList = document.getElementById("keybindingList");

  button.addEventListener("click", () => {
    const inputValue = input.value;
    const listItem = `
      <div id="listItem">
          ${inputValue}
      </div>
    `;
    keybindingList.innerHTML += listItem;
    input.value = "";
  });
};
