var questions=[];
questions.push({quest:"Which of these songs is from the movie 'Mulan'?", a1:"I'll Make a Man Out of You", a2:"I Just Can't Wait to be King", a3:"Colors of the Wind",a4:"Be Our Guest",corrAns:"I'll Make a Man Out of You"});
questions.push({quest:"Which of these characters is not from the movie 'Tarzan'?", a1:"Jane", a2:"Clayton", a3:"Turk",a4:"Gaston",corrAns:"Gaston"});
questions.push({quest:"What book is the movie 'Treasure Planet' based on?", a1:"Moneyball", a2:"Robinson Crusoe", a3:"Treasure Island",a4:"The Martian Chronicles",corrAns:"Treasure Island"});
questions.push({quest:"Which of these movies was not nominated for 'Best Picture' at the Academy Awards?", a1:"Toy Story 3", a2:"Beauty and the Beast (1991)", a3:"The Lion King",a4:"Up",corrAns:"The Lion King"});
questions.push({quest:"Which of these movies did not win 'Best Animated Feature' at the Academy Awards?", a1:"Beauty and the Beast (1991)", a2:"The Incredibles", a3:"Big Hero 6",a4:"Finding Nemo",corrAns:"Beauty and the Beast (1991)"});
questions.push({quest:"Which of the following is not a quality a man must possess according to the song 'I'll Make a Man Out of You'?", a1:"Being as swift as a coursing river", a2:"Being as bright as the sun at high noon", a3:"Being as tranquil as a forest",a4:"Being mysterious as the dark side of the moon",corrAns:"Being as bright as the sun at high noon"});
var count=0;
var time=30;
var timer=0;
var inter=0;
var rightAns=0;
var wrongAns=0;
var unAns=0;
$(".button").click(evaluate);
$("#reset-button").click(function(){
    reset();
    next();
});
function evaluate()
{
    var selection=$(this).text();
    if(selection==questions[count].corrAns)
    {
        $("#message").text("Correct!");
        rightAns++;
    }
    else
    {
        $("#message").text("No, the correct answer was: "+questions[count].corrAns);
        wrongAns++;
    }
    time=30;
    clearInterval(inter);
    clearTimeout(timer);
    count++;
    timer=setTimeout(next,3000);
}
function timeKeeper()
{
    time--;
    $("#time").text("Time left: "+time);
}
function timeOut()
{
    clearInterval(inter);
    $("#message").text("Time's up! The correct answer was: "+questions[count].corrAns);
    clearTimeout(timer);
    timer=setTimeout(next,3000);
    time=30;
    unAns++;
    count++;
}
function next()
{
    $("#reset-button").hide();
    if(count==questions.length)
    {
        gameOver();
    }
    else
    {
        $(".button").show();
        $("#message").text(questions[count].quest);
        $("#btn1").text(questions[count].a1);
        $("#btn2").text(questions[count].a2);
        $("#btn3").text(questions[count].a3);
        $("#btn4").text(questions[count].a4);
        inter=setInterval(timeKeeper,1000);
        timer=setTimeout(timeOut,30000);
    }
}
function gameOver()
{
    $("#message").text("Game Over");
    $("#answer-holder").append($("<div>").text("Correct Answers: "+rightAns));
    $("#answer-holder").append($("<br>"));
    $("#answer-holder").append($("<div>").text("Incorrect Answers: "+wrongAns));
    $("#answer-holder").append($("<br>"));
    $("#answer-holder").append($("<div>").text("Unanswered Questions: "+unAns));
    $(".button").hide();
    $("#reset-button").show();
    $("#reset-button").text("Play Again?");
}
function reset()
{
    count=0;
    time=30;
    rightAns=0;
    wrongAns=0;
    $("#answer-holder").empty();
    $(".button").hide();
    clearInterval(inter);
    clearTimeout(timer);
}
reset();