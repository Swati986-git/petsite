document.addEventListener('DOMContentLoaded', function() {
    // Get all category cards and product cards
    const categoryCards = document.querySelectorAll('.category-card');
    const productCards = document.querySelectorAll('.product-card');
    const featuredProducts = document.querySelectorAll('.product-card[data-featured="true"]');
    const productCountElement = document.getElementById('product-count-number');
    const productsContainer = document.getElementById('products-container');
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    
    // Function to update category title and description
    function updateCategoryInfo(title, description) {
        categoryTitle.textContent = title;
        categoryDescription.textContent = description;
    }
    
    // Add click event listeners to all category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Get the selected category
            const category = this.getAttribute('data-category');
            const categoryName = this.querySelector('h3').textContent;
            
            // Remove active class from all category cards
            categoryCards.forEach(c => {
                c.removeAttribute('data-active');
                c.classList.remove('active');
            });
            
            // Add active class to the clicked category card
            this.setAttribute('data-active', 'true');
            this.classList.add('active');
            
            // Set appropriate title and description based on category
            if (category === 'featured') {
                updateCategoryInfo('Featured Products', 'Handpicked by our veterinarians');
            } else if (category === 'food') {
                updateCategoryInfo('Pet Food', 'Nutritious options for all pets');
            } else if (category === 'toys') {
                updateCategoryInfo('Pet Toys', 'Fun and engaging toys for your pets');
            } else if (category === 'accessories') {
                updateCategoryInfo('Pet Accessories', 'Essential items for your pets');
            } else if (category === 'grooming') {
                updateCategoryInfo('Grooming Products', 'Keep your pets clean and healthy');
            } else if (category === 'health') {
                updateCategoryInfo('Health & Wellness', 'Products for your pet\'s wellbeing');
            } else if (category === 'beds') {
                updateCategoryInfo('Beds & Furniture', 'Comfortable resting places for your pets');
            }
            
            // Filter products based on the selected category
            let visibleCount = 0;
            
            productCards.forEach(product => {
                const productCategory = product.getAttribute('data-category');
                
                if (category === 'featured' && product.getAttribute('data-featured') === 'true') {
                    product.style.display = 'flex';
                    visibleCount++;
                } else if (category !== 'featured' && productCategory === category) {
                    product.style.display = 'flex';
                    visibleCount++;
                } else {
                    product.style.display = 'none';
                }
            });
            
            // Update the product count
            productCountElement.textContent = visibleCount;
            
            // Scroll to products section
            document.getElementById('all-products').scrollIntoView({behavior: 'smooth'});
        });
    });
    
    // Initialize with Featured Products selected
    const featuredCard = document.querySelector('.category-card[data-category="featured"]');
    if (featuredCard) {
        featuredCard.classList.add('active');
        featuredCard.setAttribute('data-active', 'true');
        
        // Initially show only featured products
        let featuredCount = 0;
        productCards.forEach(product => {
            if (product.getAttribute('data-featured') === 'true') {
                product.style.display = 'flex';
                featuredCount++;
            } else {
                product.style.display = 'none';
            }
        });
        
        // Update the product count
        productCountElement.textContent = featuredCount;
    }
});
