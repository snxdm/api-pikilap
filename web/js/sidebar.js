var lastScrollTop = 0;

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var toggleBtn = document.getElementById('toggle-btn');
    sidebar.classList.toggle('active');
    toggleBtn.classList.toggle('active');
    toggleBtn.style.opacity = sidebar.classList.contains('active') ? '0' : '1';
}

function moveToggleButton() {
    var toggleBtn = document.getElementById('toggle-btn');
    var content = document.querySelector('.content');
    var contentTop = content.getBoundingClientRect().top;
    var toggleBtnTop = toggleBtn.getBoundingClientRect().top;
    var distance = contentTop - toggleBtnTop;
    var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        toggleBtn.classList.add('hide');
    } else {
        toggleBtn.classList.remove('hide');
    }

    lastScrollTop = currentScrollTop;
}

window.addEventListener('scroll', moveToggleButton);

document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var toggleBtn = document.getElementById('toggle-btn');

    if (!sidebar.contains(event.target) && sidebar.classList.contains('active') && !toggleBtn.contains(event.target)) {
        sidebar.classList.remove('active');
        toggleBtn.classList.remove('active');
        toggleBtn.style.opacity = '1';
    }
});

function noticeDownCopy(text, message) {
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    new jBox('Notice', {
        theme: 'NoticeFancy',
        attributes: {
            x: 'left',
            y: 'bottom'
        },
        color: getColor(),
        content: message,
        animation: {
            open: 'slide:bottom',
            close: 'slide:left'
        }
    });
}