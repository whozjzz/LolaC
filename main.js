const galleryData = {
    travels: [ 
        'Travels/Beijing/b1.jpg', 'Travels/Beijing/b2.jpg', 'Travels/Beijing/b3.jpg', 'Travels/Beijing/b4.jpg', 'Travels/Beijing/b5.jpg', 'Travels/Beijing/b6.jpg', 'Travels/Beijing/b7.jpg',
        'Travels/New Jersey/nj1.jpg', 'Travels/New Jersey/nj2.jpg', 'Travels/New Jersey/nj3.jpg', 'Travels/New Jersey/nj4.jpg', 'Travels/New Jersey/nj5.jpg', 'Travels/New Jersey/nj6.jpg', 'Travels/New Jersey/nj7.jpg',
        'Travels/Seoul/s1.jpg', 'Travels/Seoul/s2.jpg', 'Travels/Seoul/s3.jpg', 'Travels/Seoul/s4.jpg', 'Travels/Seoul/s5.jpg', 'Travels/Seoul/s6.jpg', 'Travels/Seoul/s7.jpg'
    ],
    family: ['img/3.jpg', 'img/4.jpg', 'img/5.jpg'],
    solo: ['img/Crop1.jpg', 'img/Crop2.jpg', 'img/Crop3.jpg', 'img/Crop4.jpg', 'img/Crop5.jpg', 'img/Crop6.jpg']
};

window.toggleCategory = function(category) {
    const expansion = document.getElementById(`${category}-expansion`);
    const grid = document.getElementById(`${category}-grid`);
    const header = document.querySelector('.gallery_header');
    
    if (!expansion || !grid) return;

    // Close any other open categories first
    document.querySelectorAll('.category_expansion').forEach(el => {
        if (el.id !== `${category}-expansion`) {
            el.classList.remove('open');
        }
    });

    const isOpen = expansion.classList.toggle('open');

    // Populate images if the grid is currently empty
    if (isOpen && grid.innerHTML === '') {
        galleryData[category].forEach(src => {
            const imgEl = document.createElement('img');
            imgEl.src = src;
            imgEl.loading = 'lazy';
            grid.appendChild(imgEl);
        });
    }

    // Scroll Logic
    if (isOpen) {
        requestAnimationFrame(() => {
            expansion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    } else {
        header.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        setTimeout(() => pageLoader.classList.add('hidden'), 300);
    }
});