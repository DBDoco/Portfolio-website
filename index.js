/* Animations */
window.addEventListener('load', () => {
    AOS.init({
        duration: 800,
    });
});

/* Project section filtering */
$(document).on('click', '.projects-filter li', function () {
    $(this).addClass('projects-filter-active').siblings().removeClass('projects-filter-active')
})

$(document).ready(function () {
    const defaultFilter = 'all';

    function applyFilter(value) {
        if (value == 'all') {
            $('.projects-card').css('opacity', 1).show();
        } else {
            $('.projects-card').not('.' + value).css('opacity', 0).hide();
            $('.projects-card').filter('.' + value).css('opacity', 1).show();
        }
        AOS.refresh(); 
    }

    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        applyFilter(value);
    });

    applyFilter(defaultFilter);
    $('.list[data-filter="' + defaultFilter + '"]').addClass('projects-filter-active');
});

/* Get current year */
const currentYearElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© | ${currentYear}`;
