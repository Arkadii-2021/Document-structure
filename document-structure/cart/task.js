const products = document.getElementsByClassName('product');
const cartProducts = document.getElementsByClassName('cart__products');
const productQuantityInc = document.getElementsByClassName('product__quantity-control_inc');
const productQuantityDec = document.getElementsByClassName('product__quantity-control_dec');
const productAdd = document.getElementsByClassName('product__add');
const quantityValue = document.getElementsByClassName('product__quantity-value');
const cartProductCount = document.getElementsByClassName('cart__product-count');

const quantityProducts = [];

Array.from(productQuantityInc).forEach(function(btn, i) {
	btn.addEventListener('click', (event) => {
		quantityValue[i].innerText++;
	})
});

Array.from(productQuantityDec).forEach(function(btn, i) {
	btn.addEventListener('click', (event) => {
		quantityValue[i].innerText >= 1 ? quantityValue[i].innerText-- : quantityValue[i].innerText == 0;
	})
});

Array.from(productAdd).forEach(function(btn, i) {
	btn.addEventListener('click', (event) => {
		let dataId = products[i].getAttribute('data-id');
		let ids = products[i];
		let checkId = document.getElementsByClassName('cart__product');
		if (quantityProducts.includes(`${dataId}`)) {
			let n = parseInt(cartProductCount[i].textContent.trim()) + parseInt(quantityValue[i].innerText);
			cartProductCount[i].innerText = n;		
		} else {
			let addContext = '<div class="cart__product" data-id="' + dataId + '"><img class="cart__product-image" src="' + products[i].childNodes[3].currentSrc + '"><div class="cart__product-count">' + quantityValue[i].textContent.trim() + '</div></div>';
			cartProducts[0].insertAdjacentHTML('beforeEnd', addContext);
			quantityProducts.push(dataId);
		}
	})
});

