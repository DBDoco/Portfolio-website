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
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.projects-card').show('1000');
        } else {
            $('.projects-card').not('.' + value).hide('1000');
            $('.projects-card').filter('.' + value).show('1000');
        }
    })
})

/* Get current year */
const currentYearElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© | ${currentYear}`;
