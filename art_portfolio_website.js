
document.addEventListener('DOMContentLoaded', function() {
    // Implementing Swipe Functionality for Galleries using Swiper.js
    // Note: Swiper.js library should be linked in the HTML file.

    // Initialize Swiper for each gallery
    const galleries = document.querySelectorAll('.swiper-container');
    galleries.forEach(gallery => {
        new Swiper(gallery, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });

    // Implementing Search Functionality in the Main Gallery
    const searchBox = document.getElementById('search-box');
    const images = document.querySelectorAll('#main-gallery img');

    searchBox.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        images.forEach(img => {
            const title = img.getAttribute('alt').toLowerCase();
            if (title.includes(searchTerm)) {
                img.style.display = '';
            } else {
                img.style.display = 'none';
            }
        });
    });
});
