require 'bundler'

Bundler.require(:rack)

use Rack::LiveReload
run ShowOff

