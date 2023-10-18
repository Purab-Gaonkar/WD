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

shopNowButton.addEventListener('click', function () {

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

// Add this JavaScript code to your existing <script> tag or in a separate JavaScript file

// Function to open the product popup
// Product popup functions
function openPopup(name, description, price, image) {
    document.getElementById("popupProductName").textContent = name;
    document.getElementById("popupProductDescription").textContent = description;
    document.getElementById("popupProductPrice").textContent = price;
    document.getElementById("popupImage").src = image;
    document.getElementById("productPopup").style.display = "block";
}
$(document).ready(function() {
    // Slideshow
    let currentSlide = 0;
    const slides = $("#slideshow img");

    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Start the slideshow
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Toggle Product Description
    $(".toggle-description").click(function() {
        $(this).siblings(".product-description").toggle();
    });
    $("#toggleCartButton").click(function () {
      $("#cartSection").toggle();
  })
});

function closePopup() {
    document.getElementById("productPopup").style.display = "none";
}
const products = [
    {
      name: "Sony ALPHA ILCE-7M2K Mirrorless Camera",
      price: 699,
      // Add other properties as needed
    },
    {
      name: "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
      price: 699,
      // Add other properties as needed
    },
    {
      name: "Sony Professional Video Camera",
      price: 699,
      // Add other properties as needed
    },
    {
      name: "Nikon D850 DSLR Camera with 24-120 mm Lens Kit",
      price: 699,
      // Add other properties as needed
    },
    {
        name: "Canon EOS R6 II",
        price: 699,
        // Add other properties as needed
      },
      {
        name: "Nikon D5600 24.2MP DSLR",
        price: 699,
        // Add other properties as needed
      },
      {
        name: "Mirrorless Z 8",
        price: 699,
        // Add other properties as needed
      },
      {
        name: "Sony HXR-MC2500 Digital Video Camera",
        price: 699,
        // Add other properties as needed
      },
      {
        name: "Canon EOS 6D Mark II",
        price: 1299,
        // Add other properties as needed
      },
      {
        name: "Sony Alpha a7 III",
        price: 1999,
        // Add other properties as needed
      },
      {
        name: "Nikon Z6 Mirrorless Camera",
        price: 1799,
        // Add other properties as needed
      },
      {
        name: "Canon EF 50mm f/1.4 USM Standard Lens",
        price: 349,
        // Add other properties as needed
      },
      {
        name: "Nikon AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED Zoom Lens",
        price: 399,
        // Add other properties as needed
      },
      {
        name: "Sony FE 24-70mm f/2.8 GM Zoom Lens",
        price: 1999,
        // Add other properties as needed
      },
    // Add more product objects here
  ];
  function sortProducts(sortOption) {
    if (sortOption === 'priceLowToHigh') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHighToLow') {
      products.sort((a, b) => b.price - a.price);
    }
    // Call a function to update the displayed products
    updateProductList(products);
  }

  // Function to update the displayed products
  function updateProductList(products) {
    // Replace this part with your code to display products based on the sorted array
  }

  // Event listener for the "Sort By" dropdown
  const sortDropdown = document.getElementById('sort');
  sortDropdown.addEventListener('change', (event) => {
    const selectedSortOption = event.target.value;
    sortProducts(selectedSortOption);
  });

  // Initial sort (you can choose the default sorting option)
