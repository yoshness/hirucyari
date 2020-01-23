let mix = require('laravel-mix');
require('laravel-mix-ejs');

const ASSETS_FOLDER = './public';

mix.sass('src/sass/style.scss', `${ASSETS_FOLDER}/css`)
	.ejs('src/views', './')
    .options({
		processCssUrls: false,
    })
    .copyDirectory('src/images', `${ASSETS_FOLDER}/images`);