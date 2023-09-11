const mix = require('laravel-mix');

// const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const imageminMozjpeg = require('imagemin-mozjpeg');


mix.sass('src/styles/style.sass', 'css').options({
    processCssUrls: false
});

mix.sass('src/styles/header_adaptive.scss', 'css').options({
    processCssUrls: false
});

mix.sass('src/styles/cooperation_adaptive.scss', 'css').options({
    processCssUrls: false
});

mix.sass('src/styles/portfolio_adaptive.scss', 'css').options({
    processCssUrls: false
});

mix.sass('src/styles/rates_adaptive.scss', 'css').options({
    processCssUrls: false
});

mix.sass('src/styles/footer_adaptive.scss', 'css').options({
    processCssUrls: false
});



mix.setPublicPath('dist');

// mix.webpackConfig({

//     plugins: [

//         // Копируем картинки из каталога ресурсов в публичный каталог

//         new CopyWebpackPlugin({

//             patterns: [

//                 {
//                     from: 'src/images', // Путь относительно каталога с webpack.mix.js
//                     to: 'images', // Путь относительно каталога public/,
//                     globOptions: {
//                         ignore: ["**/icons/**"], // Игнорируем каталог с иконками
//                     },
//                 },
//             ],
//         }),

//         // Оптимизируем качество изображений

//         new ImageminPlugin({
//             test: /\.(jpe?g|png|gif)$/i,
//             plugins: [
//                 imageminMozjpeg({
//                     quality: 80,
//                     progressive: true,
//                 }),
//             ],
//         }),
//     ],
// })