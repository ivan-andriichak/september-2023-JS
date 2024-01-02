
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const priceBlock = document.getElementById('priceBlock');
const currentTime = new Date().getTime();
const lastUpdateTime = parseInt(localStorage.getItem('lastUpdateTime'));
const storedPrice = localStorage.getItem('price');

if (storedPrice) {
    priceBlock.textContent = storedPrice;
}

if (!lastUpdateTime || currentTime - lastUpdateTime >= 10000) {
    let currentPrice = parseInt(priceBlock.textContent);
    currentPrice += 10;
    priceBlock.textContent = `${currentPrice} грн`;

    localStorage.setItem('price', priceBlock.textContent);
    localStorage.setItem('lastUpdateTime', currentTime.toString());
}
