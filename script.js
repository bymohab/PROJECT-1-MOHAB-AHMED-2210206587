function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('show');
    } else {
        element.classList.remove('show');
        element.classList.add('hidden');
    }
}

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.scroll-effect');
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('show-on-scroll');
        }
    });
});

