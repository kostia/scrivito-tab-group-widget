require File.expand_path('../lib/scrivito_tab_group_widget/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = 'scrivito-tab-group-widget'
  s.version     = ScrivitoTabGroupWidget::VERSION

  s.authors     = ['Scrivito']
  s.email       = ['support@scrivito.com']
  s.homepage    = 'https://scrivito.com'

  s.summary     = 'Tab group widget for Scrivito'
  s.description = 'This gem provides a simple tab group widget for Scrivito UI'
  s.license     = 'LGPL-3.0'

  s.files = Dir['{app,lib}/**/*', 'LICENSE', 'Rakefile']

  s.add_dependency 'bundler'
  s.add_dependency 'scrivito'

  s.add_development_dependency 'rake'
end
