// smiling face image:http://delhi4cats.files.wordpress.com/2011/05/smiley-face.jpg?w=468&h=468
// crying face image http://doblelol.com/uploads/20/funny-smiley-face-icons-image-search-results.jpg

var abPics = ['http://art.ngfiles.com/images/189/lavagasm_angry-birds-star-wars-pink.png',
              'http://art.ngfiles.com/images/157/lavagasm_red-angry-bird.png',
              'http://art.ngfiles.com/images/190/lavagasm_angry-birds-star-wars-chewie.png'
              ];
var pigPics = ['http://cf.broadsheet.ie/wp-content/uploads/2013/04/Angry-Birds-pig.gif',
                'http://images2.wikia.nocookie.net/__cb20120506164521/abcc/images/thumb/f/f5/Angry_birds_pig_03_by_gsgill37-d3h6acq.jpg/480px-Angry_birds_pig_03_by_gsgill37-d3h6acq.jpg'
              ] ;
function init() {
    var first=Math.floor(Math.random()*10) + 1;
    var second = Math.floor(Math.random()*10) + 1;
    $("#first").text(first);
    $("#second").text(second);
    $("#pic").attr("src","");
    $("#result").val("");
    $("#result").bind("input",function () { $("#pic").attr("src","");});
    $("#submitCont").click(function () {
        if (parseInt($("#result").val()) == first+second) {
            $("#pic").attr('src',getRandomPic(abPics));
            setTimeout(init,5000);
        } else {
   $("#pic").attr('src',getRandomPic(pigPics));
        }
    });
}

function getRandomPic(pics) {
 return  pics[Math.floor(Math.random()*pics.length)];
}



$(document).ready(function(){
    init();
});

//TODO add help button with graphic representation of the exercise (x red balls + y green balls, 8 red balls three of them eaten by worms))