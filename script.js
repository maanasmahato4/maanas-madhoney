document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const namePattern = /^[a-zA-Z\s]{2,50}$/;

            statusMessage.style.display = 'block';
            statusMessage.style.color = 'red';

            if (!name || !namePattern.test(name)) {
                statusMessage.textContent = 'Please enter a valid full name (letters and spaces only, 2-50 characters).';
                nameInput.focus();
                return;
            }

            if (!email || !emailPattern.test(email)) {
                statusMessage.textContent = 'Please enter a valid email address (e.g., user@example.com).';
                emailInput.focus();
                return;
            }

            if (!message || message.length < 10) {
                statusMessage.textContent = 'Please enter a message with at least 10 characters.';
                messageInput.focus();
                return;
            }

            statusMessage.style.color = 'green';
            statusMessage.textContent = `Thank you, ${name}! Your inquiry about Himalayan Mad Honey has been submitted successfully.`;
            contactForm.reset();
        });
    }
});