document.addEventListener("DOMContentLoaded", function () {
    const productImages = document.querySelectorAll('.pro img');
    productImages.forEach(function (productImage) {
        productImage.addEventListener('click', function () {
            alert('You clicked on a product image!');
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('signup-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);

        alert('Form submitted!\nName: ' + formData.get('name') + '\nEmail: ' + formData.get('email'));
    });
});
function validateSignup() {
    const userName = document.querySelector(".signup-form input[name='txt']").value;
    const email = document.querySelector(".signup-form input[name='email']").value;
    const password = document.querySelector(".signup-form input[name='password']").value;

    if (userName.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission if fields are filled
}

function validateLogin() {
    const email = document.querySelector(".login-form input[name='email']").value;
    const password = document.querySelector(".login-form input[name='password']").value;

    if (email.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission if fields are filled
}
        document.getElementById('.signup-form').addEventListener('submit', function (e) {
            const passwordInput = document.getElementById('Password');
            const password = passwordInput.value;

            if (password.length < 8 || password.length > 16) {
                alert('Password must be between 8 and 16 characters.');
                e.preventDefault(); // Prevent form submission
            }
        });
        const subscribeInput = document.querySelector('.input-box input[type="text"]');
        const subscribeButton = document.querySelector('.input-box input[type="button"]');
        
        subscribeButton.addEventListener('click', function () {
            const email = subscribeInput.value;
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
            } else {
                // Perform the subscription action here
                alert('Thank you for subscribing!');
            }
        });
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        let currentIndex = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        const nextButton1 = document.querySelector('#nextButton');
        const prevButton2 = document.querySelector('#prevButton');
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                if (i === index) {
                    testimonial.style.display = 'block';
                } else {
                    testimonial.style.display = 'none';
                }
            });
        }
        
        nextButton.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });
        
        prevButton.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });
        
        // Call showTestimonial to display the initial testimonial
        showTestimonial(currentIndex);

setInterval(nextTestimonial, 5000);
const shopNowButton = document.querySelector('#top button');

shopNowButton.addEventListener('click', function() {

    alert('You clicked the Shop Now button!');
});
const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton');

nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

// Call showTestimonial to display the initial testimonial
showTestimonial(currentIndex);