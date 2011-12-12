$(->
  isTiming = false
  time = 0
  delay = 1000

  timer = null
  timer = ->
    $('#footer span#timeInfo').remove()
    $('#footer').append('<span id="timeInfo" />')

    minute = "00#{Math.floor(time / 60)}".substr(-2)
    second = "00#{time % 60}".substr(-2)

    output = "#{minute}:#{second}"
    output += " (running)" if isTiming

    $('#footer #timeInfo').text(output)

    time += 1 if isTiming

    setTimeout(timer, delay)
  timer()

  $(document).keyup (event) ->
    if event.keyCode == 77
      isTiming = !isTiming
      time = 0 if isTiming

    true
)
