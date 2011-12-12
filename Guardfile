# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload' do
  watch(%r{.*\.(json|md|scss)$})
end

require 'guard/guard'
require 'sprockets'

require 'sprockets-sass'
require 'sass'
require 'compass'

module ::Guard
  class Sprockets < ::Guard::Guard
    def initialize(watchers = [], options = {})
      @env = ::Sprockets::Environment.new
      @env.append_path 'app/assets/stylesheets'
      @env.append_path 'app/assets/javascripts'
      super
    end

    def start
      ::Guard::UI.info "Guard::Sprockets is running..."
    end

    def run_all
      %w{presentation.css presentation.js}.each do |file|
        ::Guard::UI.info "Rebuilding #{file}..."

        begin
          File.open(file, 'wb') { |fh| fh.print @env[file].to_s }
        rescue StandardError => e
          puts e.message
        end
      end
    end

    def run_on_change(paths)
      run_all
    end
  end
end

guard 'sprockets' do
  watch(%r{^app/assets})
end
