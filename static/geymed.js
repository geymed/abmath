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
  'static/images/angry-bird-green.png',
  'static/images/angry-bird-orange.png',
  'static/images/angry-bird-blue.png',
  'static/images/angry-bird-white.png'

  ];
  var pigPics = ['static/images/pig.gif',
  'static/images/king-pig.png'

  ] ;

  var ops = [
    {
      name:'plus',
      sign:'+',
      op: function (a,b) {return a+b;},
      genFirst: function (max) { return Math.floor(Math.random()*max) + 1;},
      genSec: function (max,first) { return Math.floor(Math.random()*max) + 1;}

     },
    {
      name:'minus',
      sign:'-',
      op: function (a,b) {return a-b;},
      genFirst: function (max) { return Math.floor(Math.random()*max*2) + 2;},
      genSec: function (max,first) { return Math.floor(Math.random()*(first - 1)) + 1;}

    },
    {
      name:'multiply',
      sign:'x',
      op: function (a,b) {return a*b;},
      genFirst: function (max) { return Math.floor(Math.random()*max/2) + 1;},
      genSec: function (max,first) { return Math.floor(Math.random()*((max*2)/first)) + 1;}

    }

];

  var MAX = 20;
  $.extend({abMath: (function () {
    var abm = {
      init:function () {
        abm.initNumbers(MAX);
        abm.refresh();
      },
    initNumbers: function(max) {
        var numCount = Math.pow((Math.floor(max/2)),2);
        for (var i = 1; i<= numCount ;i++) {
          var numClass = max > 10 ? "numsmall" : "num";
          var num = $("<div class='" + numClass +"'></div>");
          num.text(i);
          $('#numbers').append(num);

        }
        $('.'+numClass).click(function() {
          $('#result').text($(this).text());
          abm.clearPic();
        });
      },
      refresh:function () {
        var op = abm.getRandomElement(ops);
        var first= op.genFirst(MAX);
        var second = op.genSec(MAX,first);

        $("#first").text(first);
        $("#second").text(second);
        $("#op").text(op.sign);
        abm.clearPic();
        abm.clearResult();
        $("#submitCont").on('click',function () {

          if (parseInt($("#result").text()) == abm.calc(op,first,second)) {
            $("#submitCont").unbind('click');
            $("#pic").attr('src',abm.getRandomElement(abPics));
            $('#pic').addClass('animated bounce');

            $('#pic').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {abm.refresh();});

          } else {
            $("#pic").attr('src',abm.getRandomElement(pigPics));
            $('#pic').addClass('animated wobble');
            $('#pic').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {abm.clearResult();});


          }
        });
      },
      clearResult: function () {
        $("#result").text("?");
        $('#pic').removeClass('animated bounce wobble');

      },
      clearPic:function() {
        $("#pic").attr("src","");

      },
      getRandomElement:function (elements) {
        return  elements[Math.floor(Math.random()*elements.length)];
      },
      calc: function (op, first, second) {
        return op.op(first,second);
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
