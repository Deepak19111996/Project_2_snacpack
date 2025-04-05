/**
 * SnacPack - Premium Food Packaging Solutions
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initTestimonialSlider();
    initBackToTop();
    initFormValidation();
    initCartFunctionality();
    initSearchFunctionality();
    initProductQuantity();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

/**
 * Testimonial Slider
 */
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonials.length === 0 || dots.length === 0) return;
    
    let currentIndex = 0;
    
    // Hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });
    
    // Function to show testimonial at specific index
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Event listeners for prev/next buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = testimonials.length - 1;
            showTestimonial(newIndex);
        });
        
        nextBtn.addEventListener('click', () => {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        });
    }
    
    // Auto slide every 5 seconds
    setInterval(() => {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Form Validation
 */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Simple validation
            let isValid = true;
            
            if (!name.value.trim()) {
                showError(name, 'Name is required');
                isValid = false;
            } else {
                removeError(name);
            }
            
            if (!email.value.trim()) {
                showError(email, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            } else {
                removeError(email);
            }
            
            if (!message.value.trim()) {
                showError(message, 'Message is required');
                isValid = false;
            } else {
                removeError(message);
            }
            
            // If form is valid, submit it (in a real app, you'd send data to server)
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
            }
        });
    }
    
    // Helper functions for form validation
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message') || document.createElement('div');
        
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        
        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorMessage);
        }
        
        formGroup.classList.add('error');
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        if (errorMessage) {
            formGroup.removeChild(errorMessage);
        }
        
        formGroup.classList.remove('error');
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

/**
 * Cart Functionality
 */
function initCartFunctionality() {
    // Initialize cart from localStorage or create empty cart
    let cart = JSON.parse(localStorage.getItem('snacpack_cart')) || [];
    updateCartCount();
    
    // Add to cart buttons (on product pages)
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    if (addToCartBtns.length > 0) {
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const productName = this.getAttribute('data-name');
                const productPrice = parseFloat(this.getAttribute('data-price'));
                const productImage = this.getAttribute('data-image');
                const quantity = parseInt(document.querySelector('.quantity-input').value) || 1;
                
                // Check if product already in cart
                const existingProductIndex = cart.findIndex(item => item.id === productId);
                
                if (existingProductIndex > -1) {
                    // Update quantity if product already in cart
                    cart[existingProductIndex].quantity += quantity;
                } else {
                    // Add new product to cart
                    cart.push({
                        id: productId,
                        name: productName,
                        price: productPrice,
                        image: productImage,
                        quantity: quantity
                    });
                }
                
                // Save cart to localStorage
                localStorage.setItem('snacpack_cart', JSON.stringify(cart));
                
                // Update cart count
                updateCartCount();
                
                // Show success message
                showCartNotification(`${productName} added to cart!`);
            });
        });
    }
    
    // Update cart count in header
    function updateCartCount() {
        const cartCountElement = document.querySelector('.cart-count');
        
        if (cartCountElement) {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCountElement.textContent = totalItems;
        }
    }
    
    // Show notification when product added to cart
    function showCartNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Hide and remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Render cart items on checkout page
    const cartItemsContainer = document.querySelector('.cart-items');
    
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty. <a href="products.html">Continue shopping</a></p>';
        } else {
            let cartHTML = '';
            let cartTotal = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                cartTotal += itemTotal;
                
                cartHTML += `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <h3>${item.name}</h3>
                            <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn increase" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <div class="cart-item-total">
                            ₹${itemTotal.toFixed(2)}
                        </div>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            });
            
            // Add cart summary
            cartHTML += `
                <div class="cart-summary">
                    <div class="cart-summary-row">
                        <span>Subtotal:</span>
                        <span>₹${cartTotal.toFixed(2)}</span>
                    </div>
                    <div class="cart-summary-row">
                        <span>Shipping:</span>
                        <span>₹${(cartTotal > 2000 ? 0 : 200).toFixed(2)}</span>
                    </div>
                    <div class="cart-summary-row total">
                        <span>Total:</span>
                        <span>₹${(cartTotal + (cartTotal > 2000 ? 0 : 200)).toFixed(2)}</span>
                    </div>
                </div>
                <div class="cart-actions">
                    <a href="products.html" class="btn btn-outline">Continue Shopping</a>
                    <button id="checkout-btn" class="btn btn-primary">Proceed to Checkout</button>
                </div>
            `;
            
            cartItemsContainer.innerHTML = cartHTML;
            
            // Add event listeners for cart item buttons
            const decreaseBtns = document.querySelectorAll('.quantity-btn.decrease');
            const increaseBtns = document.querySelectorAll('.quantity-btn.increase');
            const removeBtns = document.querySelectorAll('.remove-item');
            const checkoutBtn = document.getElementById('checkout-btn');
            
            decreaseBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    updateCartItemQuantity(productId, -1);
                });
            });
            
            increaseBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    updateCartItemQuantity(productId, 1);
                });
            });
            
            removeBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    removeCartItem(productId);
                });
            });
            
            if (checkoutBtn) {
                checkoutBtn.addEventListener('click', function() {
                    window.location.href = 'payment.html';
                });
            }
        }
    }
    
    // Update cart item quantity
    function updateCartItemQuantity(productId, change) {
        const productIndex = cart.findIndex(item => item.id === productId);
        
        if (productIndex > -1) {
            cart[productIndex].quantity += change;
            
            // Remove item if quantity is 0 or less
            if (cart[productIndex].quantity <= 0) {
                cart.splice(productIndex, 1);
            }
            
            // Save cart to localStorage
            localStorage.setItem('snacpack_cart', JSON.stringify(cart));
            
            // Update cart count and re-render cart items
            updateCartCount();
            initCartFunctionality();
        }
    }
    
    // Remove item from cart
    function removeCartItem(productId) {
        cart = cart.filter(item => item.id !== productId);
        
        // Save cart to localStorage
        localStorage.setItem('snacpack_cart', JSON.stringify(cart));
        
        // Update cart count and re-render cart items
        updateCartCount();
        initCartFunctionality();
    }
}

/**
 * Search Functionality
 */
function initSearchFunctionality() {
    const searchIcon = document.querySelector('.search-icon');
    
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create search overlay if it doesn't exist
            if (!document.querySelector('.search-overlay')) {
                const searchOverlay = document.createElement('div');
                searchOverlay.className = 'search-overlay';
                
                searchOverlay.innerHTML = `
                    <div class="search-container">
                        <form id="search-form">
                            <input type="text" id="search-input" placeholder="Search for products...">
                            <button type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                        <button class="close-search">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                
                document.body.appendChild(searchOverlay);
                
                // Focus on search input
                setTimeout(() => {
                    document.getElementById('search-input').focus();
                }, 100);
                
                // Close search overlay when clicking close button
                document.querySelector('.close-search').addEventListener('click', function() {
                    document.body.removeChild(searchOverlay);
                });
                
                // Handle search form submission
                document.getElementById('search-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const searchTerm = document.getElementById('search-input').value.trim();
                    
                    if (searchTerm) {
                        // In a real app, you'd redirect to search results page with query parameter
                        window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
                    }
                });
            }
        });
    }
}

/**
 * Product Quantity Input
 */
function initProductQuantity() {
    const quantityContainer = document.querySelector('.quantity-container');
    
    if (quantityContainer) {
        const decreaseBtn = quantityContainer.querySelector('.decrease');
        const increaseBtn = quantityContainer.querySelector('.increase');
        const quantityInput = quantityContainer.querySelector('.quantity-input');
        
        decreaseBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
        
        increaseBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    }
}
