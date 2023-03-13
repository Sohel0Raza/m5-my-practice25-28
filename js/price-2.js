document.getElementById('jacket-2-btn').addEventListener('click', function(){
    const priceNow = getElementValueById('jacket-2')
    const discountNow = getElementValueById('discount-2');

    const discount = (priceNow * discountNow) / 100;
    const price = priceNow - discount;
    const inputField = document.getElementById('input-field');
    const promoCodeString = inputField.value;
    const promoCode = parseFloat(promoCodeString)
    inputField.value = '';
    if(promoCode == 1239){
        setElementValue('jacket-2', price)
    }
    else{
        setElementValue('jacket-2', priceNow)
    }

})