
const basePrice = 2499; // Base price

function updatePrice() {
    const sizeOptions = document.getElementsByName('size');
    let sizePrice = 0;

    sizeOptions.forEach(option => {
        if (option.checked) {
            sizePrice = option.value === 'small' ? 2499 :
                        option.value === 'medium' ? 2699 :
                        option.value === 'large' ? 2899 :
                        option.value === 'small-medium' ? 2999 :
                        option.value === 'small-large' ? 3099 :
                        option.value === 'medium-large' ? 3199 :
                        option.value === 'small-medium-large' ? 3299 : 0;
        }
    });

    const colorOptions = document.querySelectorAll('.color-circle.selected');
    let colorPrice = colorOptions.length > 0 ? 100 : 0; // Add extra for color if selected
    const totalPrice = basePrice + sizePrice + colorPrice;
    document.getElementById('price').textContent = `Price: ₹ ${totalPrice}`;
}

function setRating(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.style.color = index < rating ? 'gold' : 'gray';
    });
    document.getElementById('ratingText').textContent = `${rating} Stars`;
}
