    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('test-contact-success');

form.addEventListener('submit', e => {
e.preventDefault();
successMessage.hidden = true;

const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    let valid = true;


document.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (!name) {
        valid = false;
        document.getElementById('test-contact-error-name').textContent = 'Full name is required.';
    }

    if (!email) {
        valid = false;
        document.getElementById('test-contact-error-email').textContent = 'Email is required.';
    } else if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('test-contact-error-email').textContent = 'Please enter a valid email address.';
    }

if (!subject) {
        valid = false;
        document.getElementById('test-contact-error-subject').textContent = 'Subject is required.';
    }

    if (!message) {
        valid = false;
        document.getElementById('test-contact-error-message').textContent = 'Message is required.';
    } else if (message.length < 10) {
        valid = false;
        document.getElementById('test-contact-error-message').textContent = 'Message must be at least 10 characters long.';
    }

    if (valid) {
        form.reset();
        successMessage.hidden = false;
    }
    });