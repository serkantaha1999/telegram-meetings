source "https://rubygems.org"

ruby "3.2.2"

gem "rails", "~> 7.1.3", ">= 7.1.3.2"
gem "sprockets-rails"
gem 'rack', '2.2.4'
gem "pg", "~> 1.1"
gem "puma", ">= 5.0"
gem "jsbundling-rails"
gem 'geocoder'
gem 'telegram-bot-ruby'
gem "cssbundling-rails"
gem 'rack-cors'
gem 'carrierwave', '~> 3.0'
gem "jbuilder"
gem 'terser'
gem "slim"
gem "redis", ">= 4.0.1"
gem "tzinfo-data", platforms: %i[ windows jruby ]

gem "bootsnap", require: false

group :development, :test do
  gem "pry"
  gem "debug", platforms: %i[ mri windows ]
end

group :development do
  gem 'web-console', '~> 4.2'

  gem 'capistrano',         require: false
  gem 'capistrano3-puma', '~> 5.2.0', require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano-rails',   require: false
  gem 'capistrano-rvm',     require: false
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end
