// State object
const state = {
  isDarkMode: false,
  userName: "",
  fontSize: 16,
  showGreeting: true,
  theme: "light",
  textColor: "#333333"
};

// DOM Elements
const body = document.body;
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const usernameInput = document.getElementById("username");
const saveBtn = document.getElementById("save-btn");
const displayName = document.getElementById("display-name");
const fontSizeSlider = document.getElementById("font-size");
const greeting = document.getElementById("greeting");
const greetingCheckbox = document.getElementById("toggle-greeting");
const themeSelector = document.getElementById("theme-select");
const textColorPicker = document.getElementById("text-color");

// Toggle dark mode (separate button)
toggleModeBtn.addEventListener("click", () => {
  state.isDarkMode = !state.isDarkMode;
  updateTheme();
});

// Save user name
saveBtn.addEventListener("click", () => {
  state.userName = usernameInput.value.trim();
  displayName.textContent = state.userName || "Guest";
});

// Change font size
fontSizeSlider.addEventListener("input", () => {
  state.fontSize = fontSizeSlider.value;
  document.documentElement.style.setProperty("--font-size", `${state.fontSize}px`);
});

// Toggle greeting visibility
greetingCheckbox.addEventListener("change", () => {
  state.showGreeting = greetingCheckbox.checked;
  greeting.style.display = state.showGreeting ? "block" : "none";
});

// Theme selector dropdown
themeSelector.addEventListener("change", () => {
  state.theme = themeSelector.value;
  updateTheme();
});

// Text color change
textColorPicker.addEventListener("input", () => {
  state.textColor = textColorPicker.value;
  document.documentElement.style.setProperty("--text-color", state.textColor);
});

// Apply theme classes
function updateTheme() {
  body.classList.remove("dark", "solarized", "light");

  if (state.theme === "dark" || state.isDarkMode) {
    body.classList.add("dark");
  } else if (state.theme === "solarized") {
    body.classList.add("solarized");
  } else {
    body.classList.add("light");
  }
}
