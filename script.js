document.addEventListener('DOMContentLoaded', function() {
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.slide-img');
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const foodName = item.getAttribute('data-food');
            const foodIndex = Array.from(slides).findIndex(slide => slide.getAttribute('data-food') === foodName);
            if (foodIndex !== -1) {
                updateSlide(foodIndex);
            }
        });
    });

    function updateSlide(index) {
        const slideWidth = slides[0].clientWidth;
        slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    // Function to add items to cart
    function addToCart(itemName, itemPrice) {
        const cartItem = { name: itemName, price: itemPrice };
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(cartItem);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }


function updateSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

const orderForm = document.getElementById('food-order-form');
orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const food1Quantity = parseInt(document.getElementById('food1').value);
    // Get quantities for other food items similarly

    // Validate quantities (example validation)
    if (food1Quantity < 0 || food1Quantity > 10) {
        alert('Please enter a valid quantity for Grilled Salmon.');
        return;
    }
    // Perform similar validation for other food items

    // If validation passes, add items to cart
    const foodId = 'food1'; 
    const foodName = 'Grilled Salmon with Lemon Butter Sauce'; 
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cartItems.find(item => item.id === foodId);

    if (existingItem) {
        existingItem.quantity += food1Quantity;
    } else {
        cartItems.push({ id: foodId, name: foodName, quantity: food1Quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Added to Cart');

    orderForm.reset(); // Reset form after submission
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.slide-img');
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const foodName = item.getAttribute('data-food');
            const foodIndex = Array.from(slides).findIndex(slide => slide.getAttribute('data-food') === foodName);
            if (foodIndex !== -1) {
                updateSlide(foodIndex);
            }
        });
    });

    function updateSlide(index) {
        const slideWidth = slides[0].clientWidth;
        slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }
});