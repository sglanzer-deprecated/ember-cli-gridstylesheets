# Ember-cli-gridstylesheets

A plugin that adds the [GridStyleSheets](http://gridstylesheets.org) engine to an app, as well as a preprocessor to bundle all `app/style/**/*.gss` files and include them in the generated HTML.

## Installation

* `ember install:addon ember-cli-gridstylesheets` in your app directory

## Usage

Add GSS files with the extension 'gss' to your `app/styles` directory.

All files with the 'gss' extension in or under `app/styles` will be concatenated together. Order is not guaranteed at this time. As GSS is order sensitive, certain combinations of rules may behave differently if the concatenation order changes.