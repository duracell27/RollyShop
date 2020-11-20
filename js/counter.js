window.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-action')) {
        const countWrapper = e.target.closest('.counter-wrapper');
        const counter = countWrapper.querySelector('[data-counter]');

        if (e.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
            if(e.target.closest('.cart-wrapper')){
                toggleCartStatus();
            }
        } else if (e.target.dataset.action === 'minus') {
            

            if(e.target.closest('.cart-wrapper')){
                if (counter.innerText > 1) {
                    counter.innerText = --counter.innerText;
                }else{
                    e.target.closest('.cart-item').remove();
                }
                toggleCartStatus();
            }else{
                if (counter.innerText > 1) {
                    counter.innerText = --counter.innerText;
                }
            }
        }
    }
})













// const btnPlus = document.querySelector('[data-action="plus"]');
// const btnMinus = document.querySelector('[data-action="minus"]');


// btnPlus.addEventListener('click', function (e) {
//     const countWrapper = e.target.closest('.counter-wrapper');
//     const counter = countWrapper.querySelector('[data-counter]');
//     counter.innerText = ++counter.innerText;
// })

// btnMinus.addEventListener('click', function (e) {

//     const countWrapper = e.target.closest('.counter-wrapper');
//     const counter = countWrapper.querySelector('[data-counter]');
//     if (counter.innerText > 1) {
//         counter.innerText = --counter.innerText;
//     }
// })