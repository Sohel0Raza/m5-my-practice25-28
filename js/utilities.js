function getElementValueById (elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

function setElementValue (elementId, elementValue){
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}