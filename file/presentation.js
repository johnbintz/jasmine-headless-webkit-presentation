
  $(function() {
    var delay, isTiming, time, timer;
    isTiming = false;
    time = 0;
    delay = 1000;
    timer = null;
    timer = function() {
      var minute, output, second;
      $('#footer span#timeInfo').remove();
      $('#footer').append('<span id="timeInfo" />');
      minute = ("00" + (Math.floor(time / 60))).substr(-2);
      second = ("00" + (time % 60)).substr(-2);
      output = "" + minute + ":" + second;
      if (isTiming) output += " (running)";
      $('#footer #timeInfo').text(output);
      if (isTiming) time += 1;
      return setTimeout(timer, delay);
    };
    timer();
    return $(document).keyup(function(event) {
      if (event.keyCode === 77) {
        isTiming = !isTiming;
        if (isTiming) time = 0;
      }
      return true;
    });
  });
