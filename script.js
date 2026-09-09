document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            statusMessage.textContent = `Thank you, ${name}! Your inquiry about Nepali Mad Honey has been received.`;
            
            contactForm.reset();
        });
    }
});