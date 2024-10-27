// HTML/CSS Progress Circular Bar
let htmlProgress = document.querySelector(".html-css"),
    htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
    htmlEndValue = 90,
    htmlSpeed = 30;

let progressHtml = setInterval(() => {
    htmlStartValue++;
    htmlValue.textContent = `${htmlStartValue}%`; // Corrected template literal
    htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

    if (htmlStartValue === htmlEndValue) {
        clearInterval(progressHtml);
    }
}, htmlSpeed);

// JavaScript Progress Circular Bar
let javascriptProgress = document.querySelector(".javascript"),
    javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
    javascriptEndValue = 75,
    jsSpeed = 30;

let progressJs = setInterval(() => {
    javascriptStartValue++;
    javascriptValue.textContent = `${javascriptStartValue}%`; // Corrected template literal
    javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;

    if (javascriptStartValue === javascriptEndValue) {
        clearInterval(progressJs);
    }
}, jsSpeed);

// PHP Progress Circular Bar
let phpProgress = document.querySelector(".php"),
    phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
    phpEndValue = 80,
    phpSpeed = 30;

let progressPhp = setInterval(() => {
    phpStartValue++;
    phpValue.textContent = `${phpStartValue}%`; // Corrected template literal
    phpProgress.style.background = `conic-gradient(#20c997 ${phpStartValue * 3.6}deg, #ededed 0deg)`;

    if (phpStartValue === phpEndValue) {
        clearInterval(progressPhp);
    }
}, phpSpeed);

// ReactJS Progress Circular Bar
let reactProgress = document.querySelector(".reactjs"),
    reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
    reactEndValue = 30,
    rjsSpeed = 30;

let progressReact = setInterval(() => {
    reactStartValue++;
    reactValue.textContent = `${reactStartValue}%`; // Corrected template literal
    reactProgress.style.background = `conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed 0deg)`;

    if (reactStartValue === reactEndValue) {
        clearInterval(progressReact);
    }
}, rjsSpeed);