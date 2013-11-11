/**
 * Angry Birds Math gamoe for kids
 * @author Gilad Foyer AKA Geymed
 * 
 */
;(function ($) {
    "use strict";

    // Global `vars` and `consts`    
var abPics = ['static/images/pink-ab-sw.png',
              'static/images/angry-bird-red.png',
              'static/images/angry-bird-war.png'
              ];
var pigPics = ['static/images/pig.gif',
                'static/images/king-pig.png'
                
              ] ;
            
              $.extend({abMath: (function () {  
                 var abm = {
 init:function () {
        var first=Math.floor(Math.random()*6) + 1;
        var second = Math.floor(Math.random()*6) + 1;
        $("#first").text(first);
        $("#second").text(second);
        $("#pic").attr("src","");
        $("#result").val("");
        $("#result").focus();
        $("#result").bind("input",function () { $("#pic").attr("src","");});
        $("#submitCont").click(function () {
          
            if (parseInt($("#result").val()) == first+second) {
              $("#submitCont").unbind('click');
                $("#pic").attr('src',abm.getRandomPic(abPics));
               // $("#imgHolder").animate({top:'+=50'},2000, function() {
                 
            //$("#imgHolder").animate({top:'-=50'},2000, function() {});
      //});
                setTimeout(abm.init,5000);
            } else {
       $("#pic").attr('src',abm.getRandomPic(pigPics));
       $("#result").val("");
       $("#result").focus();
        //$("#imgHolder").animate({left:'+=50'},2000, function() {
                 
          //  $("#imgHolder").animate({left:'-=50'},2000, function() {});
      //});
            }
    });
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