!SLIDE
# Installing

!SLIDE
# Qt 4.7 or above

!SLIDE
# johnbintz.github.com/jasmine-headless-webkit

!SLIDE
# `gem install jasmine-headless-webkit`

!SLIDE
# Gemfile
    @@@ ruby
    gem 'jasmine-headless-webkit', '~> 0.8.0'

!SLIDE bullets incremental
# Rails 3.1 Application

* Asset pipeline using Sprockets
* `spec/javascripts` holds tests

!SLIDE
# The Pivotal Labs `jasmine` gem

!SLIDE
# spec/javascripts/support/jasmine.yml

!SLIDE
# Supporting the Jasmine gem conventions

!SLIDE
## (easier to convert existing projects to JHW)

!SLIDE
# spec/javascripts/support/jasmine.yml
    @@@ yaml
    src_dir: app/assets/javascripts
    asset_paths:
    - lib/assets/javascripts
    - vendor/assets/javascripts
    src_files: [ '**/*' ]

    spec_dir: spec/javascripts
    spec_files: [ '**/*[Ss]pec.*' ]
    helpers: [ 'helpers/**/*' ]

!SLIDE
# JavaScript Load Paths

!SLIDE
# Sprockets and Jasmine load files differently

!SLIDE
# The Sprockets Way

!SLIDE
# spec/javascripts/support/jasmine.yml
    @@@ yaml
    src_dir: app/assets/javascripts
    asset_paths:
    - lib/assets/javascripts
    - vendor/assets/javascripts
    spec_dir: spec/javascripts

!SLIDE
    @@@ ruby
    # ...somewhere in JHW...
    env.append_path "app/assets/javascripts"
    env.append_path "lib/assets/javascripts"
    env.append_path "vendor/assets/javascripts"
    env.append_path "spec/javascripts"

!SLIDE
    @@@ javascript
    //= require backbone/models/cat
    //= require backbone/collections/cats
    //= require backbone/views/global_view

    class window.CatsView extends GlobalView

!SLIDE
# The Jasmine Way
    @@@ yaml
    src_dir: app/assets/javascripts
    src_files: [ '**/*' ]

    spec_dir: spec/javascripts
    spec_files: [ '**/*[Ss]pec.*' ]
    helpers: [ 'helpers/**/*' ]

!SLIDE
    @@@ ruby
    Dir["app/assets/javascripts/**/*"]
    Dir["spec/javascripts/**/*[Ss]pec.*"]
    Dir["spec/javascripts/helpers/**/*"]

!SLIDE
# JHW ensures that no file is loaded twice

!SLIDE
# Ensures Sprockets dependencies are loaded in the right order

