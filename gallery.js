// =====================================
// =====================================
// GALLERY LIGHTBOX
// Targets only .gallery img (Events + Activities & Visits)
// Does not touch the Products modal or WebGL showcase
// =====================================

document.addEventListener('DOMContentLoaded', function () {

    const galleryImages = document.querySelectorAll('.gallery img');
    if (!galleryImages.length) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'galleryLightbox';
    lightbox.innerHTML =
        '<span id="galleryLightboxClose">&times;</span>' +
        '<img id="galleryLightboxImg" src="" alt="">' +
        '<p id="galleryLightboxCaption"></p>';
    document.body.appendChild(lightbox);

    const lbImg = document.getElementById('galleryLightboxImg');
    const lbCaption = document.getElementById('galleryLightboxCaption');
    const lbClose = document.getElementById('galleryLightboxClose');

    galleryImages.forEach(function (img) {
        img.addEventListener('click', function () {
            lbImg.src = img.src;
            lbImg.alt = img.alt;
            const fig = img.closest('figure') ? img.closest('figure').querySelector('figcaption') : null;
            lbCaption.textContent = fig ? fig.textContent : img.alt;
            lightbox.classList.add('open');
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('open');
        lbImg.src = '';
    }

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
    });

});