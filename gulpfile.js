var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.sass('style.scss');

    mix.scripts([
        'parallax.js',
        'smoothscroll.js',
        'wow.js',
        'main.js'
    ]);

    mix.version([
        'css/style.css',
        'js/all.js'
    ]);
});
