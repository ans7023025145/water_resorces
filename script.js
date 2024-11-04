// Smooth scrolling for internal links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');

        // Only smooth scroll if the link is an in-page link
        if (target.startsWith("#")) { 
            e.preventDefault();
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Form Validation with Visual Feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        let isValid = true;

        // Check if all fields are filled
        ['name', 'email', 'message'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });

        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
            alert("Please fill in all required fields.");
        }
    });
}

// Remove error class on input when user starts typing
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim()) {
            this.classList.remove('error');
        }
    });
});

// Scroll Animations using IntersectionObserver
const observerOptions = {
    threshold: 0.1
};

const animateOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Adds 'animate' class when in view
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, observerOptions);

// Observe sections and features for scroll animation
document.querySelectorAll('.feature, .landing, .about-content, .vision-content, .team-content').forEach(section => {
    animateOnScroll.observe(section);
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = "↑";
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});
