Package.describe({
  summary: "Bootstrap Stylus",
  version: "3.2.0"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('stylus', 'client');
  api.use('jquery', 'client');

  ['eot', 'svg', 'ttf', 'woff'].forEach( function(ext) {
    api.addFiles('fonts/glyphicons-halflings-regular.' + ext, 'client');
  });

  api.addFiles([
    'js/transition.js',
    'js/alert.js',
    'js/button.js',
    'js/carousel.js',
    'js/collapse.js',
    'js/dropdown.js',
    'js/modal.js',
    'js/tooltip.js',
    'js/popover.js',
    'js/scrollspy.js',
    'js/tab.js',
    'js/affix.js'
    ], 'client');

});
