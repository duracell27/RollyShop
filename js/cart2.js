const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.card');

        const productInfo = {

            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            amount: card.querySelector('.text-muted').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('.items__current').innerText
        }

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {

            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = +counterElement.innerText + +productInfo.counter;


        } else {
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.amount} / ${productInfo.weight}.</div>
    
                    <!-- cart-item__details -->
                    <div class="cart-item__details">
    
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
    
                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
    
                    </div>
                    <!-- // cart-item__details -->
    
                </div>
            </div>
        </div>`;

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        card.querySelector('.items__current').innerText = 1;
        
        toggleCartStatus();
        
    }

    
})

function toggleCartStatus(){
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const cartTotal = document.querySelector('.cart-total');
    const orderForm = document.querySelector('#order-form');

    if(cartWrapper.querySelectorAll('.cart-item').length > 0){
        cartEmpty.classList.add('none');
        cartTotal.classList.remove('none');
        orderForm.classList.remove('none');
    }else{
        cartEmpty.classList.remove('none');
        cartTotal.classList.add('none');
        orderForm.classList.add('none');
    }

    let totalPrice = 0;

    cartWrapper.querySelectorAll('.cart-item').forEach(function(item){
        const counter = item.querySelector('[data-counter]').innerText;
        const priceOneItem = item.querySelector('.price__currency').innerText;
        const price = parseInt(counter) * parseInt(priceOneItem);

        totalPrice += price;
    })

    cartTotal.querySelector('.total-price').innerText = totalPrice;
}