!SLIDE
# Writing Jasmine Tests

!SLIDE
# RSpec?

!SLIDE
    @@@ ruby
    (2 + 2).should == 4

!SLIDE
# Jasmine!

!SLIDE
    @@@ javascript
    expect(2 + 2).toEqual(4)

!SLIDE
# RSpec?
    @@@ ruby
    describe "CatsView" do
      before do
        @cats = [ stub ]
      end

      it 'should show cats' do
        render

        rendered.should have_css('#cats li')
      end
    end

!SLIDE
# JavaScript?
    @@@ javascript
    describe("CatsView", function() {
      var view;

      beforeEach(function() {
        view = new CatsView({collection: [ {} ]})
      }):

      it('should show cats', function() {
        view.render()

        expect($(view.el)).toContain('#cats li')
      });
    });

!SLIDE
# CoffeeScript?
    @@@ coffeescript
    describe "CatsView", ->
      view = null

      beforeEach ->
        view = new CatsView(collection: [ {} ])

      it 'should show cats', ->
        view.render()

        expect($(view.el)).toContain('#cats li')

!SLIDE
# Plenty of resources to learn Jasmine itself

!SLIDE
# tryjasmine.com

!SLIDE
# But once you know Jasmine...

