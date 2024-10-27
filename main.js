document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.img-2grid');
    let isMobile = window.innerWidth <= 768;

    function handleFlip(card, action) {
        if (isMobile) {
            if (action === 'click') {
                card.classList.toggle('flipped');
            }
        } else {
            card.classList.toggle('flipped', action === 'enter');
        }
    }

    function setupCard(card) {
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
        const productDescription = card.dataset.description || 'Product description goes here.';

        flipCardBack.innerHTML = `
            <h3>${productName}</h3>
            <p>${productPrice}</p>
            <p>${productDescription}</p>
            <button class="img-7button">ADD TO CART</button>
        `;

        card.addEventListener('mouseenter', () => handleFlip(card, 'enter'));
        card.addEventListener('mouseleave', () => handleFlip(card, 'leave'));
        card.addEventListener('click', () => handleFlip(card, 'click'));
        card.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleFlip(card, 'click');
        }, { passive: false });
    }

    function updateCardBehavior() {
        isMobile = window.innerWidth <= 768;
        productCards.forEach(card => {
            card.classList.remove('flipped');
            if (isMobile) {
                card.classList.add('touch-device');
            } else {
                card.classList.remove('touch-device');
            }
        });
    }

    productCards.forEach(setupCard);
    updateCardBehavior();

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateCardBehavior, 250);
    });
});
