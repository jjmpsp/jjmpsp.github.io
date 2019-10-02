source "https://rubygems.org"

gem "jekyll", "~> 4.0"

group :jekyll_plugins do
    gem 'algolia_html_extractor', '~> 2.6', '>= 2.6.2'
    gem 'jekyll-algolia', '~> 1.0'
    gem "jekyll-sitemap"
    gem "jekyll-paginate-v2", git: 'https://github.com/mmistakes/jekyll-paginate-v2.git', branch: 'jekyll-v4'
    gem "jekyll-last-modified-at"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?