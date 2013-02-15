/*! Travis Sample - v1.0.0 - 2013-02-15
* https://github.com/STAR-ZERO/jquery-travis-sample
* Copyright (c) 2013 STAR_ZERO; Licensed MIT */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
