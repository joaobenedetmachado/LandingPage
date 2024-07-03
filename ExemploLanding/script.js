document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('#menu a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
