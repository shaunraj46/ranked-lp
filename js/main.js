// Navigation scroll effect
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Handle form submission
function handleFormSubmit(formId, successId, errorId) {
    const form = document.getElementById(formId);
    const successElement = document.getElementById(successId);
    const errorElement = document.getElementById(errorId);
    
    if (!form) return; // Guard clause in case form doesn't exist
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        errorElement.classList.add('hidden');
        
        // Get form data
        const formData = {
            name: form.querySelector('[name="name"]').value,
            email: form.querySelector('[name="email"]').value,
            company: form.querySelector('[name="company"]').value,
            message: form.querySelector('[name="message"]').value
        };
        
        // Validate form
        if (!formData.name || !formData.email) {
            errorElement.textContent = 'Please fill in all required fields';
            errorElement.classList.remove('hidden');
            return;
        }
        
        // Simulate sending to email service (shaunraj46@gmail.com)
        console.log('Form submitted to shaunraj46@gmail.com:', formData);
        
        // You would replace this with actual form submission code, e.g.:
        /*
        fetch('https://formsubmit.co/shaunraj46@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            form.reset();
            successElement.classList.remove('hidden');
            form.classList.add('hidden');
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                successElement.classList.add('hidden');
                form.classList.remove('hidden');
            }, 5000);
        })
        .catch(error => {
            console.error('Error:', error);
            errorElement.textContent = 'An error occurred. Please try again.';
            errorElement.classList.remove('hidden');
        });
        */
        
        // For demo purposes:
        setTimeout(() => {
            form.reset();
            successElement.classList.remove('hidden');
            form.classList.add('hidden');
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                successElement.classList.add('hidden');
                form.classList.remove('hidden');
            }, 5000);
        }, 1000);
    });
}

// Initialize form handlers
handleFormSubmit('contact-form', 'form-success', 'form-error');

// FAQ interactions
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        // Toggle current item
        const isActive = item.classList.contains('active');
        
        // Close all FAQs
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            otherAnswer.style.maxHeight = '0';
        });
        
        // Open current FAQ if it was closed
        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.step-card, .feature-item, .section-title, .excel-preview');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9 && elementBottom > 0) {
            element.classList.add('animate-in');
        }
    });
}

// Add the CSS class for animation
document.head.insertAdjacentHTML('beforeend', `
<style>
.step-card, .feature-item, .section-title, .excel-preview {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-in {
    opacity: 1;
    transform: translateY(0);
}
</style>
`);

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
// Trigger once on page load
window.addEventListener('load', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});