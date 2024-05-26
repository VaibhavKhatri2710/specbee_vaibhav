let mix = require('laravel-mix');
var themename = "pippip";
const themePath = 'web/themes/' + themename + '';

const resources = themePath + '/src';

mix.setPublicPath(`${themePath}/assets`);
mix.sass(`${resources}/scss/app.scss`, `${themePath}/assets/css`).sourceMaps();
mix.js(`${resources}/js/app.js`, `${themePath}/assets/js`)
