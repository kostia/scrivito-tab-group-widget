# scrivito-tab-group-widget

## Warning: this gem is not production ready. Especially it should _not_ be published to Rubygems.

This gem provides a simple tab group widget for Scrivito UI.

![scrivito-tab-group-widget](https://raw.github.com/kostia/scrivito-tab-group-widget/master/scrivito-tab-group-widget.png)

## Installation

Add to `Gemfile`:
```ruby
gem 'scrivito', github: 'infopark/rails_connector'
gem 'scrivito-tab-group-widget', require: 'scrivito_tab_group_widget',
  github: 'kostia/scrivito-tab-group-widget'
```

Add to `app/assets/javascripts/application.js` _after_ `scrivito`:
```javascript
//= require scrivito-tab-group-widget
```

Add to `app/assets/stylesheets/application.css` _after_ `scrivito`:
```css
/*
 *= require scrivito-tab-group-widget
 */
```

## Usage

Simply insert a tab group widget into a random attribute of type `widgetlist`.

### Colorpicker

This gem allows you to change the font and background color of each tab in-place. All you need is to
type the hexcode or the color name in the corresponding input. It is also possible to enable a
colorpicker:

Add to `Gemfile`:
```ruby
gem 'jquery-minicolors-rails'
```

Add to `app/assets/javascripts/application.js`:
```javascript
//= require jquery.minicolors
```

Add to `app/assets/stylesheets/application.css`:
```css
/*
 *= require jquery.minicolors
 */
```

This gem will automatically detect that the colorpicker is available and will set it up for you:

![scrivito-tab-group-widget-colorpicker](https://raw.github.com/kostia/scrivito-tab-group-widget/master/scrivito-tab-group-widget-colorpicker.png)

See also https://github.com/kostia/jquery-minicolors-rails.

## Contributing

1. Fork it (https://github.com/kostia/scrivito-tab-group-widget/merge_tags/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
