var toggleButton = document.querySelector('.container-btn');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('change');
    toggleButton.classList.toggle('push-btn');
    toggleButton.classList.toggle('btn-open');
});

/* jQuery smooth scroll */
$(document).ready(function() {
    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
           scrollTop: $(this.hash).offset().top 
        });
    });
    

})
