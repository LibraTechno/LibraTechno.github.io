var str1 = "<div class=\"modal fade\" id=\"themeModal\" tabindex=\"-1\" aria-labelledby=\"themeModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"themeModalLabel\">Set Theme</h5><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button></div><div class=\"modal-body\"><div class=\"theme-button-group\"><button type=\"button\" class=\"btn btn-outline-success theme-modal-button\" id=\"auto-mode-btn\">";
var str2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"margin-bottom: 0.25rem\" fill=\"currentColor\" class=\"bi bi-gear\" viewBox=\"0 0 16 16\"><path d=\"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z\"/><path d=\"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z\"/></svg><br>System</button>";
var str3 = "<button type=\"button\" class=\"btn btn-outline-success theme-modal-button\" id=\"light-mode-btn\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"margin-bottom: 0.25rem\" fill=\"currentColor\" class=\"bi bi-sun\" viewBox=\"0 0 16 16\"><path d=\"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z\"/></svg><br>Light</button>";
var str4 = "<button type=\"button\" class=\"btn btn-outline-success theme-modal-button\" id=\"dark-mode-btn\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"margin-bottom: 0.25rem\" fill=\"currentColor\" class=\"bi bi-moon\" viewBox=\"0 0 16 16\"><path d=\"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z\"/></svg><br>Dark</button>";
var str5 = "</div></div></div></div></div>";

var strThemeModalInsert = str1 + str2 + str3 + str4 + str5;
document.getElementById("modal-theme-insert").innerHTML = strThemeModalInsert;

const autoModeBtn = document.querySelector('#auto-mode-btn');
const lightModeBtn = document.querySelector('#light-mode-btn');
const darkModeBtn = document.querySelector('#dark-mode-btn');

let themeMode = localStorage.getItem('themeMode');

const enableLightMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('lightmode');
    document.body.classList.remove('darkmode');
    document.body.classList.remove('default');
    // 2. Update themeMode in localStorage
    localStorage.setItem('themeMode', 'light');
    // 3. Change btn classes
    document.getElementById("auto-mode-btn").classList.remove('btn-success');
    document.getElementById("auto-mode-btn").classList.add('btn-outline-success');
    document.getElementById("light-mode-btn").classList.remove('btn-outline-success');
    document.getElementById("light-mode-btn").classList.add('btn-success');
    document.getElementById("dark-mode-btn").classList.remove('btn-success');
    document.getElementById("dark-mode-btn").classList.add('btn-outline-success');
}

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    document.body.classList.remove('lightmode');
    document.body.classList.remove('default');
    // 2. Update darkMode in localStorage
    localStorage.setItem('themeMode', 'dark');
    // 3. Change btn classes
    document.getElementById("auto-mode-btn").classList.remove('btn-success');
    document.getElementById("auto-mode-btn").classList.add('btn-outline-success');
    document.getElementById("light-mode-btn").classList.remove('btn-success');
    document.getElementById("light-mode-btn").classList.add('btn-outline-success');
    document.getElementById("dark-mode-btn").classList.remove('btn-outline-success');
    document.getElementById("dark-mode-btn").classList.add('btn-success');
}

const enableAutoMode = () => {
    // 1. Remove the classes from the body
    document.body.classList.add('default');
    document.body.classList.remove('lightmode');
    document.body.classList.remove('darkmode');
    // 2. Update themeMode in localStorage 
    localStorage.setItem('themeMode', null);
    // 3. Change btn classes
    document.getElementById("auto-mode-btn").classList.remove('btn-outline-success');
    document.getElementById("auto-mode-btn").classList.add('btn-success');
    document.getElementById("light-mode-btn").classList.remove('btn-success');
    document.getElementById("light-mode-btn").classList.add('btn-outline-success');
    document.getElementById("dark-mode-btn").classList.remove('btn-success');
    document.getElementById("dark-mode-btn").classList.add('btn-outline-success');
}

if (themeMode === 'light') {
    enableLightMode();
} else if (themeMode === 'dark') {
    enableDarkMode();
} else {
    enableAutoMode();
}

lightModeBtn.addEventListener('click', () => {
    enableLightMode();
});

darkModeBtn.addEventListener('click', () => {
    enableDarkMode();
});

autoModeBtn.addEventListener('click', () => {
    enableAutoMode();
});