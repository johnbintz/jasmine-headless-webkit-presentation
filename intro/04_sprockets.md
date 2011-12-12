!SLIDE
# Sprockets fun!

!SLIDE
# JST templates

!SLIDE
# templates/cats_view.jst.ejs
    @@@ html
    <h1>All the cats</h1>
    <h2>Owned by <%= owner %></h2>
    <ul id="#cats"></ul>
    <h3>List generated: <%= date %></h3>

!SLIDE
# templates/cats_view.jst.hamljs
    @@@ haml
    %h1 All the cats
    %h2 Owned by #{owner}
    %ul#cats
    %h3 List generated: #{date}

!SLIDE
## (no highlighting for haml :( )

!SLIDE
# backbone/views/cats_view.js.coffee
    @@@ coffeescript
    #= require templates/cats_view.jst.hamljs

    class window.CatsView extends Backbone.View
      template: JST['templates/cats_view']

      render: =>
        $(@el).html(this.template(this.templateData()))
        this

!SLIDE
# EJS and Eco come as part of Sprockets

!SLIDE
# JHW supports `haml-sprockets` for `.hamljs`

!SLIDE
    @@@ ruby
    gem 'jasmine-headless-webkit', '~> 0.8.0'
    gem 'haml-sprockets'

!SLIDE bullets incremental
# ERB files

* app/assets/javascripts/application.js.coffee.erb

!SLIDE
# ERB integrates with the host application

!SLIDE
# Since it integrates...

!SLIDE
# Integration testing...

!SLIDE
# Not our domain!

!SLIDE
# `.erb` files are actively ignored

!SLIDE
# application.js.coffee.erb
    @@@ coffeescript
    window.Routes = <%= Routes.to_json %>
    window.CatTypes = <%= CatType.all.to_json %>
    window.DefaultCatName = <%= CatName::DEFAULT %>

!SLIDE
# Testing code that relies on these values?

!SLIDE
# Mock and stub it in a helper!

!SLIDE
# spec/javascripts/support/jasmine.yml
    @@@ yaml
    spec_dir: spec/javascripts
    helpers: [ "helpers/**.*" ]

!SLIDE
# Helpers load after code-under-test, but before specs

!SLIDE
## spec/javascripts/helpers/application_stubs.js.coffee
    @@@ coffeescript
    window.Routes = { what: 'ever' }
    window.CatTypes = [ 'cute', 'mean' ]
    window.DefaultCatName = "Fluffy"

!SLIDE bullets incremental
# Gems with JavaScript assets

* `jquery-rails`
* `backbone-rails`

!SLIDE
    @@@ coffeescript
    #= require jquery
    $(->
        alert "this works"
    )

!SLIDE
# But now that we have Sprockets...

!SLIDE
# Jasmine libraries in gems!

!SLIDE bullets incremental
# `jasmine-spec-extras`

* `jasmine-jquery`
* `sinon`

!SLIDE
## spec/javascripts/helpers/spec_helper.js.coffee
    @@@ coffeescript
    #= require jasmine-jquery
    #= require sinon

!SLIDE
## spec/javascripts/backbone/views/cats\_view\_spec.js.coffee
    @@@ coffeescript
    describe 'CatsView', ->
      it 'should fire the action', ->
        spy = sinon.spy()
        view.bind('meow', spy)

        view.$('button').trigger('click')

        expect(spy.called).toBeTruthy()

!SLIDE smaller
## spec/javascripts/backbone/views/cats\_view\_spec.js.coffee
    @@@ coffeescript
    describe 'CatsView', ->
      it 'should hit the server', ->
        data = [ 'cat' ]

        @server.respondWith('GET', 'cats', this.validResponse(data))
        view.$('button').trigger('click')
        @server.respond()

        expect(view.cats).toEqual(data)

!SLIDE
# More Jasmine libraries will be added later!

!SLIDE bullets incremental
# Any of these folders in a loaded gem get added to the asset path

* app/assets/javascripts
* lib/assets/javascripts
* vendor/assets/javascripts

!SLIDE
# Very exciting!

