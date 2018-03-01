# Define our constants
APP_ENV = ENV['APP_ENV'] ||= 'development' unless defined?(APP_ENV)
APP_ROOT = File.expand_path('../..', __FILE__) unless defined?(APP_ROOT)

# Load dependencies
require 'rubygems' unless defined?(Gem)
require 'bundler/setup'
require 'active_record'

Bundler.require(:default, APP_ENV)

load 'config/init.rb'
Dir["lib/**/*.rb"].sort.each { |library_file| load library_file }

include ReactNative::Utils
include ReactNative::CustomErrorFormatter

DATABASE_URL = ENV['DATABASE_URL'] ||= 'postgres://postgres:postgres@localhost:5432/ReactNative'

DB_CONNECTION = ActiveRecord::Base.establish_connection(DATABASE_URL)

I18n.enforce_available_locales = false
LOG = Logger.new(STDOUT)
ActiveRecord::Base.logger = Logger.new(STDOUT)

Dir["enums/**/*.rb"].sort.each { |enum| load enum }
Dir["api/**/*.rb"].sort.each { |api_module| load api_module }
Dir["models/**/*.rb"].sort.each { |model| load model }
Dir["bus/**/*.rb"].sort.each { |bus_file| load bus_file }