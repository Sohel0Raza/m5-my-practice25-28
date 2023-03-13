document.getElementById('jacket-3-btn').addEventListener('click', function(){
    const priceNow = getElementValueById('jacket-3');
    const discountNow = getElementValueById('discount-3')

    const discount = (discountNow * priceNow) / 100;
    const price =priceNow - discount;

    setElementValue('jacket-3', price)
})