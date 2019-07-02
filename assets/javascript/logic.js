$(document).ready(function () {
    console.log("It's working !!!")
    var number = 4;

    var questionCounter;
    var questionIndex = 0;
    var questionDiv = $("<div>")
    var correctTotal = 0;
    var inCorrectTotal = 0;
    var noAnswer = 0;



    var questionArray = [
        {
            "Question": "Captain America’s shield is made of?",
            "Choises": ["vibranium", "adamantium", "kryptonite", "chrome"],
            "Answer": "vibranium",
            "Picture": "https://media.giphy.com/media/8xHpZTacWUREs/giphy.gif"
        },
        {
            "Question": "Who am I?",
            "Choises": ["vibranium", "adamantium", "kryptonite", "chrome"],
            "Answer": "adamantium",
            "Picture": "https://media.giphy.com/media/8xHpZTacWUREs/giphy.gif"
        }
    ]

    askQuestion();
    function askQuestion() {
        if (questionIndex === questionArray.length) {
            $(".container-initialTimer").empty();
            questionDiv.empty();
            endGame();
        }
        else {


            questionDiv.empty();
            console.log(questionArray + " Here is the question array");
            $(".container-initialTimer").empty();

            questionDiv.append("<div>Time Remaining: <span id=timer>10</span> seconds</div" + "<br>");
            questionDiv.append("<div>" + questionArray[questionIndex].Question + "</div" + "<br>");

            for (var i = 0; i < questionArray[questionIndex].Choises.length; i++) {

                questionDiv.append("<br><div type='button' class='btn btn-primary btn-lg btn-block answer-button'>" + questionArray[questionIndex].Choises[i] + "</div>");
            }



            $(".container-initialTimer").prepend(questionDiv);
            number = 10;



            run2();
        }

    }
    function run2() {
        clearInterval(questionCounter);
        questionCounter = setInterval(decrement, 1000);
    }


    function decrement() {
        number--;
        $("#timer").html(number);

        if (number === 0) {

            stop();

        }
    }
    function stop() {

        clearInterval(questionCounter);
        questionDiv.empty();
        alert("Times Up")
        //questionDiv.append("<img src='" + questionArray[questionIndex].Picture + "'/>")
        questionIndex++
        askQuestion();
    }

    $(document).on("click", ".answer-button", function () {
        console.log("Button got clicked");
        var clicked = $(this).text();
        if (clicked == questionArray[questionIndex].Answer) {
            console.log("Correct answer")
            questionDiv.empty();
            questionDiv.append($("<div>This is the right Answer</div>"))
            questionDiv.append("<img src='" + questionArray[questionIndex].Picture + "'/>")
            questionIndex++;
            correctTotal++;
            setTimeout(() => {
                askQuestion();
            }, 1000);
        }
        else {
            console.log("Wrong answer")
            questionDiv.append($("<div>Wrong Answer</div>"))
            questionDiv.append("<img src='" + questionArray[questionIndex].Picture + "'/>")
            questionIndex++;
            inCorrectTotal++;
            setTimeout(() => {
                askQuestion();
            }, 1000);
        }
    });
    function endGame() {
        $(".container-initialTimer").empty();
        questionDiv.empty();
        alert("The game is Over!!")
    }
});