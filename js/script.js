// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Login and Signup Modal Functionality
    const loginBtns = document.querySelectorAll('.btn-login');
    const signupBtns = document.querySelectorAll('.btn-signup');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const switchModalLinks = document.querySelectorAll('.switch-modal');
    
    // Open login modal
    if (loginBtns.length > 0) {
        loginBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if (loginModal) {
                    loginModal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                } else {
                    console.error('Login modal not found');
                }
            });
        });
    }
    
    // Open signup modal
    if (signupBtns.length > 0) {
        signupBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if (signupModal) {
                    signupModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                } else {
                    console.error('Signup modal not found');
                }
            });
        });
    }
    
    // Close modals when clicking the X button
    if (closeButtons.length > 0) {
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (loginModal) loginModal.style.display = 'none';
                if (signupModal) signupModal.style.display = 'none';
                document.body.style.overflow = ''; // Re-enable scrolling
            });
        });
    }
    
    // Close modals when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (loginModal && e.target === loginModal) {
            loginModal.style.display = 'none';
            document.body.style.overflow = '';
        }
        if (signupModal && e.target === signupModal) {
            signupModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Switch between login and signup modals
    if (switchModalLinks.length > 0) {
        switchModalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-target');
                const targetModal = document.getElementById(targetId);
                
                if (!targetModal) {
                    console.error(`Modal with ID ${targetId} not found`);
                    return;
                }
                
                // Hide all modals
                if (loginModal) loginModal.style.display = 'none';
                if (signupModal) signupModal.style.display = 'none';
                
                // Show target modal
                targetModal.style.display = 'block';
            });
        });
    }
    
    // Handle form submissions (prevent default for demo)
    const modalForms = document.querySelectorAll('.modal-form');
    
    if (modalForms.length > 0) {
        modalForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const modalElement = this.closest('.modal');
                const formType = modalElement && modalElement.id === 'login-modal' ? 'Login' : 'Signup';
                
                alert(`${formType} successful! In a real application, this would authenticate with a server.`);
                this.reset();
                
                if (modalElement) {
                    modalElement.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        });
    }
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            authButtons.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            authButtons.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                item.classList.toggle('active');
            });
        });
    }
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! In a real application, this would send data to a server.');
            contactForm.reset();
        });
    }
    
    // Newsletter form submission (prevent default for demo)
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Product buttons
    const addToCartButtons = document.querySelectorAll('.product-card .btn-small');
    
    addToCartButtons.forEach(button => {
        if (button.textContent.trim() === 'Add to Cart') {
            button.addEventListener('click', function() {
                const productName = this.closest('.product-card').querySelector('h3').textContent;
                alert(`${productName} added to cart!`);
            });
        }
    });
    
    // Testimonial slider auto-scroll
    const testimonialSlider = document.querySelector('.testimonials-slider');
    
    if (testimonialSlider && testimonialSlider.children.length > 1) {
        let scrollAmount = 0;
        const slideWidth = testimonialSlider.querySelector('.testimonial-card').offsetWidth + 30; // card width + gap
        const maxScroll = testimonialSlider.scrollWidth - testimonialSlider.clientWidth;
        
        // Auto scroll every 5 seconds
        setInterval(() => {
            scrollAmount += slideWidth;
            
            // Reset scroll when reaching the end
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0;
            }
            
            testimonialSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 5000);
    }
});
