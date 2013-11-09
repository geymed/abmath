// smiling face image:http://delhi4cats.files.wordpress.com/2011/05/smiley-face.jpg?w=468&h=468
// crying face image http://doblelol.com/uploads/20/funny-smiley-face-icons-image-search-results.jpg

function init() {
    var first=Math.floor(Math.random()*10) + 1;
    var second = Math.floor(Math.random()*10) + 1;
    $("#first").text(first);
    $("#second").text(second);
    $("#submit").click(function () {
        if (parseInt($("#result").val()) == first+second) {
            $("#pic").attr('src','http://www.worldpeace-uk.org/wp-content/uploads/2013/07/smiley-face.jpg');
        } else {
   $("#pic").attr('src','http://vector-magz.com/wp-content/uploads/2013/07/sad-face-clip-art.jpg');
        }
    });
}

$(document).ready(function(){
    init();
});

//TODO add help button with graphic representation of the exercise (x red balls + y green balls, 8 red balls three of them eaten by worms))