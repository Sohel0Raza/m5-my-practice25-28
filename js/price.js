document.getElementById('First-jacket-btn').addEventListener('click', function(){
    const priceNow = getElementValueById('jacket-1');
    const discountNow = getElementValueById('discount')

    const discount = (discountNow * priceNow) / 100;
    const price =priceNow - discount;

    setElementValue('jacket-1', price)
})