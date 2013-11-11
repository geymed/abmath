/**
 * Angry Birds Math gamoe for kids
 * @author Gilad Foyer AKA Geyme
 */
var abPics = ['static/images/pink-ab-sw.png',
              'static/images/angry-bird-red.png',
              'static/images/angry-bird-war.png'
              ];
var pigPics = ['static/images/pig.gif',
                'static/images/king-pig.png'
              ] ;
function init() {
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
            $("#pic").attr('src',getRandomPic(abPics));
           // $("#imgHolder").animate({top:'+=50'},2000, function() {
             
        //$("#imgHolder").animate({top:'-=50'},2000, function() {});
  //});
            setTimeout(init,5000);
        } else {
   $("#pic").attr('src',getRandomPic(pigPics));
   $("#result").val("");
   $("#result").focus();
    //$("#imgHolder").animate({left:'+=50'},2000, function() {
             
      //  $("#imgHolder").animate({left:'-=50'},2000, function() {});
  //});
        }
    });
}

function getRandomPic(pics) {
 return  pics[Math.floor(Math.random()*pics.length)];
}
//todo add numbers from 1-20 on screen, make images animated


$(document).ready(function(){
    init();
});

//TODO add help button with graphic representation of the exercise (x red balls + y green balls, 8 red balls three of them eaten by worms))