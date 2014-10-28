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
      sign:'*',
      op: function (a,b) {return a*b;},
      genFirst: function (max) { return Math.floor(Math.random()*max/2) + 1;},
      genSec: function (max,first) { return Math.floor(Math.random()*((max*2)/first)) + 1;}

    }

];

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
        var op = abm.getRandomElement(ops);
        var first= op.genFirst(MAX);
        var second = op.genSec(MAX,first);

        $("#first").text(first);
        $("#second").text(second);
        $("#op").text(op.sign);
        abm.clearPic();
        abm.clearResult();
        $("#submitCont").on('click',function () {
          $('#pic').removeClass('animated bounce wobble');
          if (parseInt($("#result").text()) == abm.calc(op,first,second)) {
            $("#submitCont").unbind('click');
            $("#pic").attr('src',abm.getRandomElement(abPics));
            $('#pic').addClass('animated bounce');

            setTimeout(abm.refresh,2000);
          } else {
            $("#pic").attr('src',abm.getRandomElement(pigPics));
            $('#pic').addClass('animated wobble');
            abm.clearResult();
          }
        });
      },
      clearResult: function () {
        $("#result").text("?");
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
