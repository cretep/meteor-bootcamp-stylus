<span style="color: red">
Requires dirty hack for Meteor 0.9 :(
=======================
```
git clone https://github.com/cretep/meteor-bootcamp-stylus "packages/pac:bootcamp-stylus"
```
</span>

Bootstrap 3.2.0
===============

[Bootstrap 3.2.0](https://github.com/twbs/bootstrap) in [Stylus 0.42.0](http://learnboost.github.com/stylus/) by [Acquisio](https://github.com/Acquisio/bootstrap-stylus).


Quick Start
===========

Create a bootstrap.styl file in your project and add:
```
@import "/packages/pac:bootstrap-stylus/bootstrap.styl"
```



Customise
=========

Add variables before the @import:
```
$state-info-bg = darkgreen
$state-info-text = lightgreen
$brand-info = green
```

Even split up everything:
```
$bsPath = '/packages/pac:bootstrap-stylus/'
$icon-font-path = $bsPath + 'fonts/'

@import $bsPath + "stylus/variables.styl"
@import $bsPath + "stylus/mixins.styl"
...
...

```

