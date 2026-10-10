document.addEventListener('DOMContentLoaded', () => {
    const detailCards = document.querySelectorAll('.detail-card');

    detailCards.forEach((card) => {
        const button = card.querySelector('[data-toggle]');
        const panel = card.querySelector('.detail-panel');

        if (!button || !panel) return;

        const setLabel = (isOpen) => {
            button.setAttribute('aria-expanded', String(isOpen));
            button.textContent = isOpen ? button.dataset.altLabel : button.dataset.label;
        };

        button.addEventListener('click', () => {
            const shouldOpen = !card.classList.contains('is-open');

            detailCards.forEach((item) => {
                item.classList.remove('is-open');
                const itemButton = item.querySelector('[data-toggle]');
                if (itemButton) {
                    itemButton.setAttribute('aria-expanded', 'false');
                    itemButton.textContent = itemButton.dataset.label;
                }
            });

            if (shouldOpen) {
                card.classList.add('is-open');
                setLabel(true);
            }
        });
    });
});
