Package.describe({
  summary: "Bootstrap Stylus",
  version: "0.0.3",
  git: "https://github.com/cretep/meteor-bootcamp-stylus.git"
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

  api.addFiles([
    "import/variables.import.styl",
    "import/mixins.import.styl",

    "import/normalize.import.styl",
    "import/print.import.styl",
    "import/glyphicons.import.styl",

    "import/scaffolding.import.styl",
    "import/utilities.import.styl",
    "import/type.import.styl",
    "import/code.import.styl",
    "import/grid.import.styl",
    "import/tables.import.styl",
    "import/forms.import.styl",
    "import/buttons.import.styl",

    "import/component-animations.import.styl",
    "import/dropdowns.import.styl",
    "import/button-groups.import.styl",
    "import/input-groups.import.styl",
    "import/navs.import.styl",
    "import/navbar.import.styl",
    "import/breadcrumbs.import.styl",
    "import/pagination.import.styl",
    "import/pager.import.styl",
    "import/labels.import.styl",
    "import/badges.import.styl",
    "import/jumbotron.import.styl",
    "import/thumbnails.import.styl",
    "import/alerts.import.styl",
    "import/progress-bars.import.styl",
    "import/media.import.styl",
    "import/list-group.import.styl",
    "import/panels.import.styl",
    "import/responsive-embed.import.styl",
    "import/wells.import.styl",
    "import/close.import.styl",

    "import/modals.import.styl",
    "import/tooltip.import.styl",
    "import/popovers.import.styl",
    "import/carousel.import.styl",

    "import/responsive-utilities.import.styl",
    "import/bootstrap.import.styl"
    ], 'client');


});
