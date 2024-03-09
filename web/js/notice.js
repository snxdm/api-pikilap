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