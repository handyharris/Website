document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Footer Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Close nav when clicking a link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

    // 3. Portfolio Gallery Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 4. Lightbox Modal Functionality
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightboxModal && lightboxImg) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const title = item.querySelector('h4') ? item.querySelector('h4').innerText : '';
                const desc = item.querySelector('p') ? item.querySelector('p').innerText : '';

                if (img) {
                    lightboxImg.src = img.src;
                    lightboxCaption.innerHTML = `<strong>${title}</strong><br><span style="font-size:0.9rem; color:#ccc;">${desc}</span>`;
                    lightboxModal.style.display = 'flex';
                }
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => {
                lightboxModal.style.display = 'none';
            });
        }

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.style.display = 'none';
            }
        });
    }

    // 5. Form Submission Feedback
    const quoteForm = document.getElementById('quoteForm');
    const formStatus = document.getElementById('formStatus');

    if (quoteForm && formStatus) {
        quoteForm.addEventListener('submit', function (e) {
            const submitBtn = document.getElementById('submitBtn');
            if (submitBtn) {
                submitBtn.querySelector('span').textContent = 'Sending Quote Request...';
            }
        });
    }
});
