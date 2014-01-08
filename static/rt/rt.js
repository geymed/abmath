/**
 * Sample Duda App widget 
 * @author Gilad Foyer AKA Geymed
 * 
 */
;(function ($) {
    "use strict";
    var firebaseRef = NaN;
  $.extend({widgetRT: (function () {  
      var rt = {
        init:function () {
      
        }
      };

  return {
    init:rt.init  
  }}())});
}(jQuery));
//todo add numbers from 1-20 on screen, make images animated


$(document).ready(function(){
  //init
  $.widgetRT.init();
});