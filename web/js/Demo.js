/* 提示 */

$(document).ready(function() {
    $('#Notice-1').click(function() {
        new jBox('Notice', {
            content: '你好，我是一个通知',
            color: 'black'
        });
    });

    $('#Notice-2').click(function() {
        new jBox('Notice', {
            animation: 'flip',
            color: getColor(),
            content: '哦！它们也有颜色'
        });
    });

    $('#Notice-3').click(function() {
        new jBox('Notice', {
            theme: 'NoticeFancy',
            attributes: {
                x: 'left',
                y: 'bottom'
            },
            color: getColor(),
            content: '你好，我在这下面',
            animation: {
                open: 'slide:bottom',
                close: 'slide:left'
            }
        });
    });

    $('#Notice-4').click(function() {
        new jBox('Notice', {
            attributes: {
                x: 'right',
                y: 'bottom'
            },
            stack: false,
            animation: {
                open: 'tada',
                close: 'zoomIn'
            },
            color: getColor(),
            title: '塔达！我是单个的',
            content: '打开另一个提示，我不会堆叠'
        });
    });

    $('#Notice-5').click(function() {
        new jBox('Notice', {
            content: '悬停在我身上，我会留在这里',
            color: 'black',
            autoClose: Math.random() * 8000 + 2000,
            delayOnHover: true
        });
    });

    $('#Notice-6').click(function() {
        new jBox('Notice', {
            animation: 'flip',
            color: getColor(),
            autoClose: Math.random() * 8000 + 2000,
            content: '哦！它们也有颜色',
            delayOnHover: true,
            showCountdown: true,
            closeButton: true
        });
    });

    $('#Notice-7').click(function() {
        new jBox('Notice', {
            theme: 'NoticeFancy',
            attributes: {
                x: 'left',
                y: 'bottom'
            },
            color: getColor(),
            content: getString(),
            title: getTitle(),
            maxWidth: 600,
            autoClose: Math.random() * 8000 + 2000,
            animation: {
                open: 'slide:bottom',
                close: 'slide:left'
            },
            delayOnHover: true,
            showCountdown: true,
            closeButton: true
        });
    });

    $('#Notice-8').click(function() {
        new jBox('Notice', {
            attributes: {
                x: 'right',
                y: 'bottom'
            },
            stack: false,
            animation: {
                open: 'tada',
                close: 'zoomIn'
            },
            autoClose: Math.random() * 8000 + 2000,
            color: getColor(),
            title: '塔达！我是单个的',
            content: '打开另一个提示，我不会堆叠',
            delayOnHover: true,
            showCountdown: true,
            closeButton: true
        });
    });

});

var colors = ['red', 'green', 'blue', 'yellow'];
var index = 0;
var getColor = function() {
    return colors[index++ % colors.length];
};

var strings = ['短', '您刚刚关闭了互联网', '请不要点击太硬-下次我们会通知谷歌。', 'Lorem Ipsum只是印刷和排版行业的虚拟文本。 Lorem Ipsum自从16世纪以来一直是行业的标准虚拟文本，当时一个未知的印刷机制造商将一块类型的铅打乱并使其成为一本类型的样本书。'];
var getString = function() {
    return strings[Math.floor(Math.random() * strings.length)];
};

var titles = ['祝贺', '成功', '谢谢', false, false, false];
var getTitle = function() {
    return titles[Math.floor(Math.random() * titles.length)];
};