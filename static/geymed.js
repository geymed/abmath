/**
 * Angry Birds Math game for kids
 * @author Gilad Foyer AKA Geymed
 * 
 */
;(function ($) {
    "use strict";

    // Global `vars` and `consts`    
var abPics = ['static/images/pink-ab-sw.png',
              'static/images/angry-bird-red.png',
              'static/images/angry-bird-war.png',
              'static/images/angry-bird-black.png',
              'static/images/angry-bird-white.png'
              
              ];
var pigPics = ['static/images/pig.gif',
                'static/images/king-pig.png'
                
              ] ;
var MAX = 10;            
$.extend({abMath: (function () {  
                 var abm = {
 init:function () {
      abm.initNumbers();
      abm.refresh();
},
initNumbers: function() {
  for (var i = 1; i<=MAX*2;i++) {
    var num = $("<div class='num'></div>");
    num.text(i);
    $('#numbers').append(num);
    
  } 
  $('.num').click(function() {
      $('#result').text($(this).text());
       abm.clearPic();
    });
},
refresh:function () {
   var first=Math.floor(Math.random()*MAX) + 1;
        var second = Math.floor(Math.random()*MAX) + 1;
        
        $("#first").text(first);
        $("#second").text(second);
        abm.clearPic();
        abm.clearResult();
        $("#submitCont").click(function () {
          
            if (parseInt($("#result").text()) == first+second) {
              $("#submitCont").unbind('click');
                $("#pic").attr('src',abm.getRandomPic(abPics));
               // $("#imgHolder").animate({top:'+=50'},2000, function() {
                 
            //$("#imgHolder").animate({top:'-=50'},2000, function() {});
      //});
                setTimeout(abm.refresh,5000);
            } else {
       $("#pic").attr('src',abm.getRandomPic(pigPics));
      abm.clearResult();
       
        //$("#imgHolder").animate({left:'+=50'},2000, function() {
                 
          //  $("#imgHolder").animate({left:'-=50'},2000, function() {});
      //});
            }
    });
},
clearResult: function () {
   $("#result").text("?");
},
clearPic:function() {
  $("#pic").attr("src","");
},
getRandomPic:function (pics) {
 return  pics[Math.floor(Math.random()*pics.length)];
}

};
  return {
    init:abm.init  
  }}())});
}(jQuery));
//todo add numbers from 1-20 on screen, make images animated


$(document).ready(function(){
   $.abMath.init();
});

//TODO add help button with graphic representation of the exercise (x red balls + y green balls, 8 red balls three of them eaten by worms))