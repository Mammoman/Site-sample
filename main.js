document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.img-2grid');

    function handleFlip(card, isEnter) {
        if (window.innerWidth <= 600) {
            // For touch devices, toggle on click instead of hover
            if (!isEnter) {
                card.classList.toggle('flipped');
            }
        } else {
            card.classList.toggle('flipped', isEnter);
        }
    }

    productCards.forEach(card => {
        const flipCardInner = document.createElement('div');
        flipCardInner.className = 'flip-card-inner';

        const flipCardBack = document.createElement('div');
        flipCardBack.className = 'flip-card-back';

        const flipCardFront = document.createElement('div');
        flipCardFront.className = 'flip-card-front';
        flipCardFront.innerHTML = card.innerHTML;

        card.innerHTML = '';
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
        card.appendChild(flipCardInner);

        const productName = card.querySelector('.img7-name').textContent;
        const productPrice = card.querySelector('.img7-price').textContent;
        flipCardBack.innerHTML = `
            <h3>${productName}</h3>
            <p>${productPrice}</p>
            <p>Product description goes here.</p>
            <button class="img-7button">ADD TO CART</button>
        `;

        card.addEventListener('mouseenter', () => handleFlip(card, true));
        card.addEventListener('mouseleave', () => handleFlip(card, false));
        card.addEventListener('click', () => handleFlip(card, false));
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        productCards.forEach(card => card.classList.remove('flipped'));
    });
});
