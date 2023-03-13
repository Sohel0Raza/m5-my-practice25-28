document.getElementById('text-bold').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const textButton = document.getElementById('text-bold')
    if (inputField.style.fontWeight != "bold") {
        inputField.style.fontWeight = "bold";
        textButton.style.backgroundColor = '#A8D4C9'
    }
    else {
        inputField.style.fontWeight = "normal";
        textButton.style.backgroundColor = 'rgb(0,0,0,0)';
    }
})
document.getElementById('text-italic').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const textButton = document.getElementById('text-italic')
    if (inputField.style.fontStyle != "italic") {
        inputField.style.fontStyle = "italic";
        textButton.style.backgroundColor = '#A4D0C9';
    }
    else {
        inputField.style.fontStyle = "normal";
        textButton.style.backgroundColor = 'rgb(0,0,0,0)';
    }
})
document.getElementById('text-underline').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const textButton = document.getElementById('text-underline')
    if (inputField.style.textDecoration != "underline") {
        inputField.style.textDecoration = "underline";
        textButton.style.backgroundColor = '#A4D0C9';
    }
    else {
        inputField.style.textDecoration = "none";
        textButton.style.backgroundColor = 'rgb(0,0,0,0)';
    }
})
document.getElementById('text-left').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const textButton = document.getElementById('text-left')
    if (inputField.style.textAlign != "left") {
        inputField.style.textAlign = "left";
        textButton.style.backgroundColor = '#A4D0C9';
    }
    else {
        inputField.style.textAlign = "left";
        textButton.style.backgroundColor = 'rgb(0,0,0,0)';
    }
})
document.getElementById('text-center').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const textButton = document.getElementById('text-center')
    if (inputField.style.textAlign != "center") {
        inputField.style.textAlign = "center";
        textButton.style.backgroundColor = '#A4D0C9';
    }
    else {
        inputField.style.textAlign = "left";
        textButton.style.backgroundColor = 'rgb(0,0,0,0)';
    }
})