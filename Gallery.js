document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    
    let galleryItems = Array.from(document.querySelectorAll('.gallery-item img'));
    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modalImg.src = galleryItems[currentIndex].src;
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            modalImg.src = galleryItems[currentIndex].src;
        }
    }

    function showNextImage() {
        if (currentIndex < galleryItems.length - 1) {
            currentIndex++;
            modalImg.src = galleryItems[currentIndex].src;
        }
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });

    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', showPrevImage);
    modalNext.addEventListener('click', showNextImage);

    // Close modal when clicking outside of image
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
