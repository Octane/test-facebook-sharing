var fs = require('fs');

function html(size) {
    return [
        '<!DOCTYPE html>',
        '<html lang="ru-Ru">',
        '   <head>',
        '       <title>test' + size + '</title>',
        '       <meta charset="UTF-8">',
        '       <meta property="og:title"        content="og:title">',
        '       <meta property="og:image"        content="http://octane.github.io/test-facebook-sharing/image' + size + '.jpg">',
        '       <meta property="og:image:type"   content="image/jpeg">',
        '       <meta property="og:image:width"  content="' + size + '">',
        '       <meta property="og:image:height" content="' + size + '">',
        '       <meta property="og:site_name"    content="og:site_name">',
        '       <meta property="og:description"  content="og:description">',
        '   </head>',
        '   <body>',
        '       <h1>Use og:image:width and og:image:height Open Graph tags</h1>',
        '       <p>Using these tags will specify the image to the crawler so that it can render it immediately without having to asynchronously.</p>',
        '       <img src="http://octane.github.io/test-facebook-sharing/image' + size + '.jpg" alt="test">',
        '   </body>',
        '</html>'
    ].join('');
}

for (var i = 610; i < 1200; i += 10) {
    fs.writeFileSync('test' + i + '.html', html(i), {
        encoding: 'utf8'
    });
}
