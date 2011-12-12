!SLIDE
# Debugging

!SLIDE
# Most problems are debuggable

!SLIDE
# Qt WebKit widget has a big limitation...

!SLIDE
# No stack traces!

!SLIDE
# Chrome, Safari, and other WebKit browsers implement their own stack traces

!SLIDE
# How do you debug problems like SyntaxErrors and other weird ones?

!SLIDE bullets incremental
# Write out the runner file!

* `--keep`
* `runner_output`

!SLIDE
# One-time shot?

!SLIDE
# `jasmine-headless-webkit --keep`

!SLIDE
# `--runner-out runner.html`

!SLIDE
# `open runner.html`

!SLIDE
# Write it all the time?

!SLIDE
## spec/javascripts/support/jasmine.yml
    @@@ yaml
    runner_output: "runner.html"

!SLIDE
# Debugging Sprockets includes

!SLIDE
# `jasmine-headless-webkit -l`

!SLIDE
# List all files that JHW will include, in order

