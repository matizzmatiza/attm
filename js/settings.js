const settingsBtn = document.querySelector('.settings');
const settingsPopup = document.querySelector('.settings-popup');
const switchModeBtn = document.querySelector('.settings-popup__darkmode-btn');
const navCheckMode = document.querySelector('.nav');
const navMobileChcekMode = document.querySelector('.nav__menu-mobile-list');
const inputDataChcekMode = document.querySelector('.input-data');
const bmiScoreCheckMode = document.querySelector('.back-g');
const caloriesScoreCheckMode = document.querySelector('.calories-score');
const nutrientsChcekMode = document.querySelector('.nutrients');
const inputBoxs = document.getElementsByClassName('input-data__box-inner');
const bmiscoreBoxs = document.getElementsByClassName('bmi-score__element');
const caloriesBoxs = document.getElementsByClassName('calories-score__element');
const nutrientsBoxs = document.getElementsByClassName('nutrients__box');
const sun = document.querySelector('.sunMode');
const moon = document.querySelector('.moonMode');

// RETURN CURRENT MODE DARK/NORMAL
const returnCurrentMode = () => {
    if(navCheckMode.classList.contains("dark-mode-on-nav") == true) {
        return true;
    } else {
        return false;
    };
};

// CHANGE MDOE BUTTON
const changeMode = () => {
    if(returnCurrentMode() == true) {
        // DELETE CLASS
        switchModeBtn.innerHTML = "Włącz";
        navCheckMode.classList.remove("dark-mode-on-nav");
        inputDataChcekMode.classList.remove("dark-mode-on");
        bmiScoreCheckMode.classList.remove("dark-mode-on");
        caloriesScoreCheckMode.classList.remove("dark-mode-on");
        nutrientsChcekMode.classList.remove("dark-mode-on");
        navMobileChcekMode.classList.remove("dark-mode-on");
        moon.style.display = "block";
        sun.style.display = "none";
        settingsBtn.style.backgroundColor = "rgba(0, 0, 0, .6)";
        for(let i = 0; i < inputBoxs.length; i++) {
            inputBoxs[i].classList.remove("dark-mode-box");
        };
        for(let i = 0; i < bmiscoreBoxs.length; i++) {
            bmiscoreBoxs[i].classList.remove("dark-mode-box");
        };
        for(let i = 0; i < caloriesBoxs.length; i++) {
            caloriesBoxs[i].classList.remove("dark-mode-box");
        };
        for(let i = 0; i < nutrientsBoxs.length; i++) {
            nutrientsBoxs[i].classList.remove("dark-mode-box");
        };
    }else {
        // ADD CLASS
        switchModeBtn.innerHTML = "Wyłącz";
        navCheckMode.classList.add("dark-mode-on-nav");
        inputDataChcekMode.classList.add("dark-mode-on");
        bmiScoreCheckMode.classList.add("dark-mode-on");
        caloriesScoreCheckMode.classList.add("dark-mode-on");
        nutrientsChcekMode.classList.add("dark-mode-on");
        navMobileChcekMode.classList.add("dark-mode-on");
        moon.style.display = "none";
        sun.style.display = "block";
        settingsBtn.style.backgroundColor = "rgba(255, 255, 255, .2)";
        for(let i = 0; i < inputBoxs.length; i++) {
            inputBoxs[i].classList.add("dark-mode-box");
        };
        for(let i = 0; i < bmiscoreBoxs.length; i++) {
            bmiscoreBoxs[i].classList.add("dark-mode-box");
        };
        for(let i = 0; i < caloriesBoxs.length; i++) {
            caloriesBoxs[i].classList.add("dark-mode-box");
        };
        for(let i = 0; i < nutrientsBoxs.length; i++) {
            nutrientsBoxs[i].classList.add("dark-mode-box");
        };
    };
};

settingsBtn.addEventListener('click', changeMode);
