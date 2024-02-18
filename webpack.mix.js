let mix = require("laravel-mix");
let path = require("path");
require("./nova.mix");

mix
  .setPublicPath("dist")
  .js("resources/js/tool.js", "js")
  .sass("resources/sass/tool.scss", "css")
  .vue({ version: 3 })
  .nova("codenco-dev/nova-grid-system");

mix.alias({
  '@': path.join(__dirname, 'resources/js/'),
});
