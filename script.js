// DOM Elements
console.log('Script loaded');
// Global cart variable
let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    console.log('Current page:', window.location.pathname);
    
    try {
        // Animation on scroll
        const animateElements = document.querySelectorAll('.animate');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
        });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
        
        // Fallback: Ensure all animate elements become visible after a delay
        // This handles cases where IntersectionObserver might not trigger
        setTimeout(() => {
            animateElements.forEach(element => {
                if (!element.classList.contains('animated')) {
                    element.classList.add('animated');
                }
            });
            
            // Specific fallback for blog posts to ensure images are visible
            const blogPosts = document.querySelectorAll('.blog-post.animate');
            blogPosts.forEach(post => {
                if (!post.classList.contains('animated')) {
                    post.classList.add('animated');
                }
            });
        }, 1000);
        
        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            // Toggle mobile menu
            hamburger.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event from bubbling up
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('toggle');
            });
            
            // Close mobile menu when clicking a link
            const navItems = document.querySelectorAll('.nav-links a');
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('toggle');
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (event) => {
                // Check if the clicked element is inside the nav or hamburger
                const isClickInsideNav = navLinks.contains(event.target);
                const isClickInsideHamburger = hamburger.contains(event.target);
                
                // If the menu is open and the click is outside both nav and hamburger, close the menu
                if (navLinks.classList.contains('active') && !isClickInsideNav && !isClickInsideHamburger) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('toggle');
                }
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('toggle');
                }
            });
        }
        
        // Header Search Form
        const searchForm = document.getElementById('header-search-form');
        const searchInput = document.getElementById('search-input');
        
        if (searchForm && searchInput) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const searchTerm = searchInput.value.trim().toLowerCase();
                
                if (searchTerm) {
                    // Perform search through gallery items
                    searchGallery(searchTerm);
                    // Show notification
                    showNotification(`Searching for: ${searchTerm}`);
                }
            });
            
            // Add clear search functionality
            searchInput.addEventListener('input', function() {
                if (this.value === '') {
                    // If search input is cleared, show all gallery items
                    const galleryItems = document.querySelectorAll('.gallery-item');
                    galleryItems.forEach(item => {
                        item.style.display = 'block';
                        item.style.border = 'none';
                    });
                    
                    // Reset filter buttons
                    const filterBtns = document.querySelectorAll('.filter-btn');
                    filterBtns.forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.getAttribute('data-filter') === 'all') {
                            btn.classList.add('active');
                        }
                    });
                }
            });
        }
        
        // Gallery Search Function
        function searchGallery(term) {
            const galleryItems = document.querySelectorAll('.gallery-item');
            let found = false;
            
            galleryItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const category = item.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(term) || category.includes(term)) {
                    item.style.display = 'block';
                    item.style.border = '2px solid var(--primary)';
                    found = true;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Update filter buttons to show search results
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // If no items found, show all and display message
            if (!found) {
                galleryItems.forEach(item => {
                    item.style.display = 'block';
                });
                showNotification('No matching items found. Showing all gallery items.');
            } else {
                // Scroll to gallery section
                document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
                
                // Remove highlight after 3 seconds
                setTimeout(() => {
                    galleryItems.forEach(item => {
                        if (item.style.display !== 'none') {
                            item.style.border = 'none';
                        }
                    });
                }, 3000);
            }
        }
        
        // Gallery Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        if (filterBtns.length > 0 && galleryItems.length > 0) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');
                    
                    const filter = btn.getAttribute('data-filter');
                    
                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        }
        
        // Testimonial Slider
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            testimonials[index].classList.add('active');
        }
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentTestimonial--;
                if (currentTestimonial < 0) {
                    currentTestimonial = testimonials.length - 1;
                }
                showTestimonial(currentTestimonial);
            });
            
            nextBtn.addEventListener('click', () => {
                currentTestimonial++;
                if (currentTestimonial >= testimonials.length) {
                    currentTestimonial = 0;
                }
                showTestimonial(currentTestimonial);
            });
            
            // Auto slide testimonials
            setInterval(() => {
                currentTestimonial++;
                if (currentTestimonial >= testimonials.length) {
                    currentTestimonial = 0;
                }
                showTestimonial(currentTestimonial);
            }, 5000);
        }
        
        // Show notification
        function showNotification(message) {
            console.log('Showing notification:', message);
            // Remove existing notification if any
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                console.log('Removing existing notification');
                existingNotification.remove();
            }
            
            const notification = document.createElement('div');
            notification.classList.add('notification');
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: var(--primary);
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            `;
            
            console.log('Adding notification to DOM:', notification);
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                console.log('Animating notification in');
                notification.style.transform = 'translateX(0)';
            }, 10);
            
            // Remove after 3 seconds
            setTimeout(() => {
                console.log('Animating notification out');
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    console.log('Removing notification from DOM');
                    notification.remove();
                }, 300);
            }, 3000);
        }
        
        // Form Submission
        const bookingForm = document.getElementById('bookingForm');
        
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const service = document.getElementById('service').value;
                const message = document.getElementById('message').value;
                
                // In a real application, you would send this data to a server
                console.log('Booking Request:', { name, email, service, message });
                
                // Show success message
                alert(`Thank you ${name}! Your booking request for ${service} has been received. We'll contact you soon at ${email}.`);
                
                // Reset form
                bookingForm.reset();
            });
        }
        
        // Newsletter Form
        const newsletterForms = document.querySelectorAll('.newsletter-form');
        
        newsletterForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = form.querySelector('input[type="email"]').value;
                showNotification(`Thank you for subscribing with ${email}! You'll receive our latest updates from Vegas Media.`);
                form.reset();
            });
        });
        
        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        
        if (faqItems.length > 0) {
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', () => {
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
        }
        
        // Initialize Gallery and Products
        console.log('Calling initializeGallery and initializeProducts');
        setTimeout(function() {
            try {
                initializeGallery();
            } catch (error) {
                console.error('Error initializing gallery:', error);
            }
            
            try {
                initializeProducts();
            } catch (error) {
                console.error('Error initializing products:', error);
            }
        }, 500);
        
        // Cart Functionality
        console.log("Initializing cart functionality");

        // Use event delegation for add to cart buttons to ensure all buttons work
        // This will work for both static and dynamically added buttons
        document.addEventListener("click", function(e) {
            console.log("Document click event triggered", e.target);
            
            // Handle add-to-cart-service buttons (services)
            if (e.target && e.target.classList.contains("add-to-cart-service")) {
                console.log("Add-to-cart-service button detected");
                try {
                    console.log("Add to cart service button clicked", e);
                    const serviceId = e.target.getAttribute("data-id");
                    const serviceName = e.target.getAttribute("data-name");
                    const servicePrice = Number.parseFloat(e.target.getAttribute("data-price"));

                    console.log("Service data:", { serviceId, serviceName, servicePrice });

                    // Check if service is already in cart
                    const existingItem = cart.find((item) => item.id === serviceId);

                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        cart.push({
                            id: serviceId,
                            name: serviceName,
                            price: servicePrice,
                            quantity: 1,
                        });
                    }

                    console.log("Cart updated:", cart);
                    updateCart();
                    showNotification(`${serviceName} added to cart!`);
                } catch (error) {
                    console.error("Error adding service to cart:", error);
                    showNotification("Error adding item to cart");
                }
            }
            
            // Handle add-to-cart buttons (products)
            if (e.target && e.target.classList.contains("add-to-cart")) {
                console.log("Add-to-cart button detected");
                try {
                    console.log("Add to cart button clicked", e);
                    
                    // Find the parent product card to get product details
                    const productCard = e.target.closest('.product-card');
                    if (!productCard) {
                        console.error("Could not find product card");
                        showNotification("Error adding item to cart");
                        return;
                    }
                    
                    const productId = productCard.getAttribute("data-id");
                    const productNameElement = productCard.querySelector('h3');
                    const productPriceElement = productCard.querySelector('.product-price');
                    
                    if (!productId || !productNameElement || !productPriceElement) {
                        console.error("Missing product data");
                        showNotification("Error adding item to cart");
                        return;
                    }
                    
                    const productName = productNameElement.textContent;
                    // Extract price from text like "MK89,999" - remove "MK" and commas
                    const priceText = productPriceElement.textContent;
                    const productPrice = Number.parseFloat(priceText.replace(/[^0-9.]/g, ''));

                    console.log("Product data:", { productId, productName, productPrice });

                    // Check if product is already in cart
                    const existingItem = cart.find((item) => item.id === productId);

                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        cart.push({
                            id: productId,
                            name: productName,
                            price: productPrice,
                            quantity: 1,
                        });
                    }

                    console.log("Cart updated:", cart);
                    updateCart();
                    showNotification(`${productName} added to cart!`);
                } catch (error) {
                    console.error("Error adding product to cart:", error);
                    showNotification("Error adding item to cart");
                }
            }
        });

        // Cart Elements
        const cartIcon = document.querySelector(".cart-icon");
        const cartModal = document.getElementById("cart");
        const closeCart = document.querySelector(".close-cart");
        const cartItems = document.querySelector(".cart-items");
        const totalPriceElement = document.getElementById("total-price");
        const cartCount = document.querySelector(".cart-count");
        const checkoutBtn = document.querySelector(".checkout-btn");

        // Open cart
        if (cartIcon && cartModal) {
            cartIcon.addEventListener("click", () => {
                console.log("Cart icon clicked");
                cartModal.style.display = "flex";
                updateCart();
            });
        }

        // Close cart
        if (closeCart && cartModal) {
            closeCart.addEventListener("click", () => {
                cartModal.style.display = "none";
            });
        }

        // Close cart when clicking outside
        if (cartModal) {
            window.addEventListener("click", (e) => {
                if (e.target === cartModal) {
                    cartModal.style.display = "none";
                }
            });
        }

        // Checkout button
        if (checkoutBtn) {
            checkoutBtn.addEventListener("click", () => {
                if (cart.length > 0) {
                    // Open payment modal instead of just showing notification
                    openPaymentModal();
                } else {
                    showNotification("Your cart is empty!");
                }
            });
        }

        // Payment Modal Elements
        const paymentModal = document.getElementById("payment-modal");
        const closePayment = document.querySelector(".close-payment");
        const paymentForm = document.getElementById("payment-form");
        const cartPaymentMethod = document.getElementById("cart-payment-method");
        const cartMobileMoneyDetails = document.getElementById("cart-mobile-money-details");
        const cartBankDetails = document.getElementById("cart-bank-details");
        const cartCashDetails = document.getElementById("cart-cash-details");
        const cartSummaryItems = document.getElementById("cart-summary-items");
        const paymentTotal = document.getElementById("payment-total");
        const paymentConfirmationModal = document.getElementById("payment-confirmation");
        const paymentCloseConfirmation = document.querySelector(".close-confirmation");

        // Open payment modal
        function openPaymentModal() {
            // Close cart modal
            const cartModal = document.getElementById("cart");
            if (cartModal) {
                cartModal.style.display = "none";
            }
            
            // Populate cart summary
            updateCartSummary();
            
            // Show payment modal
            if (paymentModal) {
                paymentModal.style.display = "flex";
            }
        }

        // Update cart summary in payment modal
        function updateCartSummary() {
            if (cartSummaryItems) {
                cartSummaryItems.innerHTML = "";
                let total = 0;
                
                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    
                    const itemElement = document.createElement("div");
                    itemElement.classList.add("cart-summary-item");
                    itemElement.innerHTML = `
                        <p>${item.name} x ${item.quantity}</p>
                        <p>MK${itemTotal.toLocaleString()}</p>
                    `;
                    cartSummaryItems.appendChild(itemElement);
                });
                
                if (paymentTotal) {
                    paymentTotal.textContent = total.toLocaleString();
                }
            }
        }

        // Close payment modal
        if (closePayment && paymentModal) {
            closePayment.addEventListener("click", () => {
                paymentModal.style.display = "none";
            });
        }

        // Close payment modal when clicking outside
        if (paymentModal) {
            window.addEventListener("click", (e) => {
                if (e.target === paymentModal) {
                    paymentModal.style.display = "none";
                }
            });
        }

        // Show payment details based on selected payment method
        if (cartPaymentMethod) {
            cartPaymentMethod.addEventListener('change', function() {
                // Hide all payment details
                if (cartMobileMoneyDetails) cartMobileMoneyDetails.classList.remove('active');
                if (cartBankDetails) cartBankDetails.classList.remove('active');
                if (cartCashDetails) cartCashDetails.classList.remove('active');
                
                // Show selected payment details
                if (this.value === 'mpamba' || this.value === 'airtel') {
                    if (cartMobileMoneyDetails) cartMobileMoneyDetails.classList.add('active');
                } else if (this.value === 'bank') {
                    if (cartBankDetails) cartBankDetails.classList.add('active');
                } else if (this.value === 'cash') {
                    if (cartCashDetails) cartCashDetails.classList.add('active');
                }
            });
        }

        // Handle payment form submission
        if (paymentForm) {
            paymentForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('payment-name').value;
                const email = document.getElementById('payment-email').value;
                const phone = document.getElementById('payment-phone').value;
                const paymentMethod = document.getElementById('cart-payment-method').value;
                
                // Validate required fields
                if (!name || !email || !phone || !paymentMethod) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // For mobile money payments, validate mobile number
                if ((paymentMethod === 'mpamba' || paymentMethod === 'airtel') && 
                    !document.getElementById('cart-mobile-number').value) {
                    alert('Please enter your mobile number for mobile money payment.');
                    return;
                }
                
                // Get payment details based on selected method
                let paymentDetails = '';
                if (paymentMethod === 'mpamba' || paymentMethod === 'airtel') {
                    const mobileNumber = document.getElementById('cart-mobile-number').value;
                    const transactionId = document.getElementById('cart-transaction-id').value;
                    paymentDetails = `Mobile Number: ${mobileNumber}${transactionId ? ', Transaction ID: ' + transactionId : ''}`;
                } else if (paymentMethod === 'bank') {
                    const bankTransactionId = document.getElementById('cart-bank-transaction-id').value;
                    paymentDetails = bankTransactionId ? `Bank Transaction ID: ${bankTransactionId}` : 'Bank transfer details provided';
                } else if (paymentMethod === 'cash') {
                    paymentDetails = 'Cash payment at studio';
                }
                
                // Simulate payment processing
                const paymentSuccess = processPayment(paymentMethod, paymentDetails);
                
                if (!paymentSuccess) {
                    alert('Payment processing failed. Please try again or contact support.');
                    return;
                }
                
                // Generate a random order ID
                const orderId = 'ORD' + new Date().getFullYear() + Math.floor(1000 + Math.random() * 9000);
                
                // Update confirmation modal with order details
                document.getElementById('order-id').textContent = orderId;
                document.getElementById('confirmation-amount').textContent = 'MK' + paymentTotal.textContent;
                
                // Hide payment modal and show confirmation
                if (paymentModal) paymentModal.style.display = 'none';
                if (paymentConfirmationModal) paymentConfirmationModal.style.display = 'flex';
                
                // Clear cart after successful payment
                cart = [];
                updateCart();
            });
        }

        // Close confirmation modal
        if (paymentCloseConfirmation && paymentConfirmationModal) {
            paymentCloseConfirmation.addEventListener('click', () => {
                paymentConfirmationModal.style.display = 'none';
                // Reset payment form
                if (paymentForm) paymentForm.reset();
                // Hide all payment details
                if (cartMobileMoneyDetails) cartMobileMoneyDetails.classList.remove('active');
                if (cartBankDetails) cartBankDetails.classList.remove('active');
                if (cartCashDetails) cartCashDetails.classList.remove('active');
            });
        }

        // Simulate payment processing for Malawi payment methods
        function processPayment(paymentMethod, paymentDetails) {
            // In a real application, this would connect to actual payment gateways
            console.log(`Processing ${paymentMethod} payment with details: ${paymentDetails}`);
            
            // Simulate different success rates based on payment method
            switch(paymentMethod) {
                case 'mpamba':
                case 'airtel':
                    // Mobile money has high success rate
                    return Math.random() > 0.1; // 90% success rate
                case 'bank':
                    // Bank transfers take time but rarely fail
                    return Math.random() > 0.05; // 95% success rate
                case 'cash':
                    // Cash payments are always successful when done in person
                    return true;
                default:
                    return false;
            }
        }
        
        // Remove item from cart
        function removeFromCart(productId) {
            console.log("Removing item from cart:", productId);
            console.log("Cart before removal:", cart);
            cart = cart.filter((item) => item.id !== productId);
            console.log("Cart after removal:", cart);
            updateCart();
        }

        // Update cart display
        function updateCart() {
            try {
                console.log("Updating cart display");
                console.log("Current cart state:", cart);
                // Clear cart items
                if (cartItems) {
                    cartItems.innerHTML = "";

                    if (cart.length === 0) {
                        console.log("Cart is empty");
                        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
                        if (totalPriceElement) totalPriceElement.textContent = "0.00";
                        if (cartCount) cartCount.textContent = "0";
                        return;
                    }

                    let total = 0;

                    cart.forEach((item) => {
                        const itemTotal = item.price * item.quantity;
                        total += itemTotal;

                        const cartItemElement = document.createElement("div");
                        cartItemElement.classList.add("cart-item");
                        cartItemElement.innerHTML = `
                            <div class="cart-item-info">
                                <h4>${item.name}</h4>
                                <p>MK${item.price.toLocaleString()} x ${item.quantity}</p>
                            </div>
                            <div class="cart-item-price">MK${itemTotal.toLocaleString()}</div>
                            <button class="remove-item" data-id="${item.id}">×</button>
                        `;

                        console.log("Adding cart item to DOM:", cartItemElement);
                        cartItems.appendChild(cartItemElement);
                    });

                    console.log("Updating total price element:", totalPriceElement);
                    if (totalPriceElement) totalPriceElement.textContent = total.toLocaleString();
                    const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
                    console.log("Updating cart count element:", cartCount, "with value:", itemCount);
                    if (cartCount) {
                        console.log("Setting cart count text content to:", itemCount);
                        cartCount.textContent = itemCount;
                        console.log("Cart count text content is now:", cartCount.textContent);
                    }

                    console.log("Cart updated with total:", total, "Item count:", itemCount);

                    // Add event listeners to remove buttons
                    const removeButtons = document.querySelectorAll(".remove-item");
                    console.log("Found remove buttons:", removeButtons.length);
                    if (removeButtons.length > 0) {
                        removeButtons.forEach((button, index) => {
                            console.log(`Attaching listener to remove button ${index}:`, button);
                            button.addEventListener("click", () => {
                                const productId = button.getAttribute("data-id");
                                console.log("Remove button clicked for product:", productId);
                                removeFromCart(productId);
                            });
                        });
                    }
                }
            } catch (error) {
                console.error("Error updating cart:", error);
                if (cartItems) {
                    cartItems.innerHTML = '<p class="empty-cart">Error loading cart</p>';
                }
                if (totalPriceElement) totalPriceElement.textContent = "0.00";
                if (cartCount) cartCount.textContent = "0";
            }
        }
        
        // Booking System
        const bookButtons = document.querySelectorAll('.book-service');
        const bookingModal = document.getElementById('booking');
        const closeBooking = document.querySelector('.close-booking');
        const bookingPaymentForm = document.getElementById('booking-payment-form');
        const paymentMethod = document.getElementById('payment-method');
        const mobileMoneyDetails = document.getElementById('mobile-money-details');
        const bankDetails = document.getElementById('bank-details');
        const cashDetails = document.getElementById('cash-details');
        const serviceSelect = document.getElementById('booking-service');
        
        // Open booking modal when any "Book Now" button is clicked
        if (bookButtons.length > 0) {
            bookButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const service = button.getAttribute('data-service');
                    // Pre-select the service in the booking form
                    if (serviceSelect) {
                        serviceSelect.value = service;
                    }
                    if (bookingModal) {
                        bookingModal.style.display = 'flex';
                    }
                });
            });
        }
        
        // Close booking modal
        if (closeBooking && bookingModal) {
            closeBooking.addEventListener('click', () => {
                bookingModal.style.display = 'none';
            });
        }
        
        // Close booking modal when clicking outside
        if (bookingModal) {
            window.addEventListener('click', (e) => {
                if (e.target === bookingModal) {
                    bookingModal.style.display = 'none';
                }
            });
        }
        
        // Show payment details based on selected payment method
        if (paymentMethod) {
            paymentMethod.addEventListener('change', function() {
                // Hide all payment details
                if (mobileMoneyDetails) mobileMoneyDetails.classList.remove('active');
                if (bankDetails) bankDetails.classList.remove('active');
                if (cashDetails) cashDetails.classList.remove('active');
                
                // Show selected payment details
                if (this.value === 'mpamba' || this.value === 'airtel') {
                    if (mobileMoneyDetails) mobileMoneyDetails.classList.add('active');
                } else if (this.value === 'bank') {
                    if (bankDetails) bankDetails.classList.add('active');
                } else if (this.value === 'cash') {
                    if (cashDetails) cashDetails.classList.add('active');
                }
            });
        }
        
        // Handle booking form submission
        if (bookingPaymentForm) {
            bookingPaymentForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('booking-name').value;
                const email = document.getElementById('booking-email').value;
                const phone = document.getElementById('booking-phone').value;
                const service = document.getElementById('booking-service').value;
                const date = document.getElementById('booking-date').value;
                const location = document.getElementById('booking-location').value;
                const message = document.getElementById('booking-message').value;
                const paymentMethod = document.getElementById('payment-method').value;
                
                // Validate required fields
                if (!name || !email || !phone || !service || !date || !location || !paymentMethod) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // For mobile money payments, validate mobile number
                if ((paymentMethod === 'mpamba' || paymentMethod === 'airtel') && 
                    !document.getElementById('mobile-number').value) {
                    alert('Please enter your mobile number for mobile money payment.');
                    return;
                }
                
                // Get payment details based on selected method
                let paymentDetails = '';
                if (paymentMethod === 'mpamba' || paymentMethod === 'airtel') {
                    const mobileNumber = document.getElementById('mobile-number').value;
                    const transactionId = document.getElementById('transaction-id').value;
                    paymentDetails = `Mobile Number: ${mobileNumber}${transactionId ? ', Transaction ID: ' + transactionId : ''}`;
                } else if (paymentMethod === 'bank') {
                    const bankTransactionId = document.getElementById('bank-transaction-id').value;
                    paymentDetails = bankTransactionId ? `Bank Transaction ID: ${bankTransactionId}` : 'Bank transfer details provided';
                } else if (paymentMethod === 'cash') {
                    paymentDetails = 'Cash payment at studio';
                }
                
                // Simulate payment processing
                const paymentSuccess = processPayment(paymentMethod, paymentDetails);
                
                if (!paymentSuccess) {
                    alert('Payment processing failed. Please try again or contact support.');
                    return;
                }
                
                // Generate a random booking ID
                const bookingId = 'BM' + new Date().getFullYear() + Math.floor(1000 + Math.random() * 9000);
                
                // Update confirmation modal with booking details
                document.getElementById('confirmation-id').textContent = bookingId;
                document.getElementById('confirmation-service').textContent = getServiceName(service);
                document.getElementById('confirmation-date').textContent = formatDate(date);
                document.getElementById('confirmation-amount').textContent = 'MK10,000';
                
                // Hide booking modal and show confirmation
                if (bookingModal) bookingModal.style.display = 'none';
                const confirmationModal = document.getElementById('payment-confirmation');
                if (confirmationModal) confirmationModal.style.display = 'flex';
            });
        }
        
        // Simulate payment processing for Malawi payment methods
        function processPayment(paymentMethod, paymentDetails) {
            // In a real application, this would connect to actual payment gateways
            console.log(`Processing ${paymentMethod} payment with details: ${paymentDetails}`);
            
            // Simulate different success rates based on payment method
            switch(paymentMethod) {
                case 'mpamba':
                case 'airtel':
                    // Mobile money has high success rate
                    return Math.random() > 0.1; // 90% success rate
                case 'bank':
                    // Bank transfers take time but rarely fail
                    return Math.random() > 0.05; // 95% success rate
                case 'cash':
                    // Cash payments are always successful when done in person
                    return true;
                default:
                    return false;
            }
        }
        
        // Close confirmation modal
        const closeConfirmation = document.querySelector('.close-confirmation');
        const confirmationModal = document.getElementById('payment-confirmation');
        
        if (closeConfirmation && confirmationModal) {
            closeConfirmation.addEventListener('click', () => {
                confirmationModal.style.display = 'none';
                // Reset booking form
                if (bookingPaymentForm) bookingPaymentForm.reset();
                // Hide all payment details
                if (mobileMoneyDetails) mobileMoneyDetails.classList.remove('active');
                if (bankDetails) bankDetails.classList.remove('active');
                if (cashDetails) cashDetails.classList.remove('active');
            });
        }
        
        // Helper function to get service name
        function getServiceName(serviceValue) {
            const services = {
                'wedding': 'Traditional Wedding Photography',
                'portrait': 'Cultural Portrait Sessions',
                'nature': 'Landscape Photography',
                'event': 'Event Coverage',
                'training': 'Computer Training',
                'webdev': 'Web Development',
                'design': 'Designing',
                'networking': 'Networking',
                'computers': 'Computer Selling',
                'video': 'Video Editing',
                'social': 'Social Media Management',
                'support': 'IT Support'
            };
            return services[serviceValue] || serviceValue;
        }
        
        // Helper function to format date
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }
        
        // Back to Top Button
        const backToTopButton = document.getElementById('backToTop');

        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (backToTopButton) {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            }
        });

        // Scroll to top when button is clicked
        if (backToTopButton) {
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
    }
});

// Initialize Gallery Items
function initializeGallery() {
  const galleryGrid = document.querySelector(".gallery-grid")

  const galleryData = [
    {
      id: 1,
      category: "nature",
      src: "sunrise.jpg",
      title: "Lake Malawi Sunrise",
    },
    {
      id: 2,
      category: "portrait",
      src: "bride.jpg",
      title: "BRIDE",
    },
    {
      id: 3,
      category: "wedding",
      src: "couple.jpg",
      title: "Couples cerebrating their wedding",
    },
    {
      id: 4,
      category: "event",
      src: "tradition.jpg",
      title: "Traditional Dance",
    },
    {
      id: 5,
      category: "wedding",
      src: "couple.jpg",
      title: "Malawian Wedding",
    },
    {
      id: 6,
      category: "portrait",
      src: "chewa.jpg",
      title: "Village Elder",
    },
    {
      id: 7,
      category: "nature",
      src: "boab.jpg",
      title: "Baobab Tree",
    },
    {
      id: 8,
      category: "event",
      src: "girl8.jpg",
      title: "Marketer",
    },
    // Additional Malawi-themed images
    {
      id: 9,
      category: "nature",
      src: "wildlife.jpg",
      title: "Nyika Plateau Wildlife",
    },
    {
      id: 10,
      category: "portrait",
      src: "tradition.jpg",
      title: "Traditional Culture",
    },
    {
      id: 11,
      category: "nature",
      src: "sunrise.jpg",
      title: "Cape Maclear Beach",
    },
    {
      id: 12,
      category: "event",
      src: "independent.jpg",
      title: "Lake of Stars Festival",
    },
    {
      id: 13,
      category: "wedding",
      src: "couple.jpg",
      title: "Traditional Ceremony",
    },
    {
      id: 14,
      category: "event",
      src: "bride.jpg",
      title: "MALAWIAN WEDDING",
    },
    {
      id: 15,
      category: "nature",
      src: "wildlife.jpg",
      title: "Mikumi National Park",
    },
    {
      id: 16,
      category: "event",
      src: "independent.jpg",
      title: "Independence Day Celebration",
    },
  ]

  galleryData.forEach((item) => {
    const galleryItem = document.createElement("div")
    galleryItem.classList.add("gallery-item", "animate", "fadeInUp")
    galleryItem.setAttribute("data-category", item.category)
    galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="overlay">
                <h3>${item.title}</h3>
                <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)} Photography in Malawi</p>
            </div>
        `
    galleryGrid.appendChild(galleryItem)
  })
}

// Initialize Products
function initializeProducts() {
  // Only initialize products on the index page, not on booking page
  if (window.location.pathname.includes('booking.html')) {
    console.log("On booking page, skipping product initialization");
    return;
  }
  
  const productsGrid = document.querySelector(".products-grid")

  const productsData = [
    {
      id: "p1",
      name: "Lake Malawi Sunrise Print",
      price: 89999,
      src: "sunrise.jpg",
    },
    {
      id: "p2",
      name: "Mount Mulanje Landscape Print",
      price: 129999,
      src: "scape.jpg",
    },
    {
      id: "p3",
      name: "Traditional Dance Print",
      price: 79999,
      src: "tradition.jpg",
    },
    {
      id: "p4",
      name: "Baobab Tree Photography Print",
      price: 99999,
      src: "boab.jpg",
    },
    // Additional Malawi-themed products
    {
      id: "p5",
      name: "Nyika Plateau Wildlife Print",
      price: 119999,
      src: "wildlife.jpg",
    },
    {
      id: "p6",
      name: "Chichewa Cultural Portrait",
      price: 89999,
      src: "chewa.jpg",
    },
    {
      id: "p7",
      name: "Cape Maclear Beach Scene",
      price: 99999,
      src: "sunrise.jpg",
    },
    {
      id: "p8",
      name: "Lake of Stars Festival Print",
      price: 79999,
      src: "sunrise.jpg",
    },
  ]

  // Only add products if the grid is empty
  if (productsGrid && productsGrid.children.length === 0) {
    productsData.forEach((product) => {
      const productCard = document.createElement("div")
      productCard.classList.add("product-card", "animate", "fadeInUp")
      productCard.setAttribute("data-id", product.id)
      productCard.innerHTML = `
              <div class="product-image">
                  <img src="${product.src}" alt="${product.name}">
              </div>
              <div class="product-info">
                  <h3>${product.name}</h3>
                  <p>High-quality photographic print capturing Malawi's natural beauty</p>
                  <span class="product-price">MK${product.price.toLocaleString()}</span>
                  <button class="add-to-cart">Add to Cart</button>
              </div>
          `
      productsGrid.appendChild(productCard)
    })
  }
}

console.log("Script initialization complete")
