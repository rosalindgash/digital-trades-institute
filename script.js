// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlistForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const interest = document.getElementById('interest').value;

        // Validation
        if (!firstName || !lastName || !email || !interest) {
            showError('Please fill in all fields.');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Please enter a valid email address.');
            return;
        }

        // Simulate form submission (in production, this would send data to a server)
        submitWaitlistForm({
            firstName: firstName,
            lastName: lastName,
            email: email,
            interest: interest,
            timestamp: new Date().toISOString()
        });
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(message) {
        errorText.textContent = message;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }

    function showSuccess() {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';

        // Reset form
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 5000);
    }

    function submitWaitlistForm(data) {
        // In a production environment, you would send this data to your backend:
        // fetch('/api/waitlist', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => {
        //     if (result.success) {
        //         showSuccess();
        //     } else {
        //         showError(result.message || 'An error occurred. Please try again.');
        //     }
        // })
        // .catch(error => {
        //     showError('Network error. Please try again later.');
        // });

        // For now, we'll store it locally and show success
        console.log('Waitlist submission:', data);

        // Store in localStorage (for demo purposes)
        let waitlistData = JSON.parse(localStorage.getItem('dti_waitlist') || '[]');
        waitlistData.push(data);
        localStorage.setItem('dti_waitlist', JSON.stringify(waitlistData));

        showSuccess();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Track form interactions for analytics (optional)
document.addEventListener('input', function(e) {
    if (e.target.closest('#waitlistForm')) {
        // Clear error message when user starts typing
        document.getElementById('errorMessage').style.display = 'none';
    }
});
