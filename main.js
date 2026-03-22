document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const pageLoader = document.getElementById('pageLoader');

    // Transition direction logic
    const direction = sessionStorage.getItem('swipeDirection');
    if (direction === 'fromGallery') {
        body.classList.add('page-enter-left');
    } else {
        body.classList.add('page-enter-right');
    }
    sessionStorage.removeItem('swipeDirection');

    // Navbar links set direction and show loader
    document.querySelectorAll('.navbar_links a').forEach(link => {
        link.addEventListener('click', (event) => {
            const to = link.getAttribute('href');
            if (to === 'gallery.html') {
                sessionStorage.setItem('swipeDirection', 'fromIndex');
            } else if (to === 'index.html') {
                sessionStorage.setItem('swipeDirection', 'fromGallery');
            }

            if (pageLoader) {
                pageLoader.classList.remove('hidden');
            }
        });
    });

    // Hide loader after 300ms so boxed content is shown with animation
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
        }, 300);
    }

    // Gallery modal logic (only runs on gallery.html)
    const modal = document.getElementById('imageModal');
    const modalImages = document.getElementById('modalImages');
    const closeBtn = document.querySelector('.close');

    if (modal && modalImages && closeBtn) {
        document.querySelectorAll('.gallery_item').forEach(item => {
            item.addEventListener('click', () => {
                const category = item.dataset.category;
                modalImages.innerHTML = '';

                let images = [];
                if (category === 'travels') {
                    images = [
                        'Travels/Beijing/b1.jpg', 'Travels/Beijing/b2.jpg', 'Travels/Beijing/b3.jpg', 'Travels/Beijing/b4.jpg', 'Travels/Beijing/b5.jpg', 'Travels/Beijing/b6.jpg', 'Travels/Beijing/b7.jpg',
                        'Travels/New Jersey/nj1.jpg', 'Travels/New Jersey/nj2.jpg', 'Travels/New Jersey/nj3.jpg', 'Travels/New Jersey/nj4.jpg', 'Travels/New Jersey/nj5.jpg', 'Travels/New Jersey/nj6.jpg', 'Travels/New Jersey/nj7.jpg',
                        'Travels/Seoul/s1.jpg', 'Travels/Seoul/s2.jpg', 'Travels/Seoul/s3.jpg', 'Travels/Seoul/s4.jpg', 'Travels/Seoul/s5.jpg', 'Travels/Seoul/s6.jpg', 'Travels/Seoul/s7.jpg'
                    ];
                } else if (category === 'family') {
                    images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];
                } else if (category === 'solo') {
                    images = ['img/I1.jpg', 'img/I2.jpg', 'img/S1.jpg', 'img/S2.jpg', 'img/Th1.jpg', 'img/Th2.jpg'];
                }

                images.forEach(src => {
                    const imgEl = document.createElement('img');
                    imgEl.src = src;
                    imgEl.alt = 'Gallery Image';
                    modalImages.appendChild(imgEl);
                });

                modal.style.display = 'block';
                body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                body.style.overflow = 'auto';
            }
        });
    }
});