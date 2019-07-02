$(document).ready(function () {
    console.log("It's working !!!")
    var number = 4;

    var questionCounter = 0;
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
            "Question": "What is the name of Tony Stark’s personal butler?",
            "Choises": ["Jeeves", "Jarvis", "Alfred", "Jennings"],
            "Answer": "Jarvis",
            "Picture": "https://thumbs.gfycat.com/FreshAnyHanumanmonkey-size_restricted.gif"
        },
        {
            "Question": "What do Spider Man’s powers help him to do?",
            "Choises": ["travel through time", "become invisible", "fly", "fight crime on the street"],
            "Answer": "fight crime on the street",
            "Picture": "https://media.giphy.com/media/xUySTBMa6eUeFrl5PG/giphy.gif"
        },
        {
            "Question": "What actor played Ant-Man?",
            "Choises": ["Chris Hemsworth", "Paul Rudd", "Chris Pratt", "Benedict Cumberbatch"],
            "Answer": "Paul Rudd",
            "Picture": "https://media0.giphy.com/media/10gw2AJC21VWRW/giphy.gif"
        },
        {
            "Question": "At the end of “The Avengers”, what do the Avengers do eat together before disassembling?",
            "Choises": ["sushi", "shawarma", "spaghetti", "salad"],
            "Answer": "shawarma",
            "Picture": "https://media.giphy.com/media/8xNzjrtiIfLag/giphy.gif"
        },
    ]

    function startpage() {
        $(".container-initialTimer").prepend("<button type='button' class='btn btn-success start-button btn-lg'>Start</button>");
        $("body").on("click", '.start-button', function (event) {
            console.log("button clicked " + $(this).text());
            askQuestion();
            // console.log("clicked start");
        });
    }
    startpage();
    function askQuestion() {
        if (questionIndex === (questionArray.length)) {
            $(".container-initialTimer").empty();
            questionDiv.empty();
            endGame();
        }
        else {
            questionDiv.empty();
            console.log(questionArray + " Here is the question array");
            $(".container-initialTimer").empty();

            questionDiv.append("<div id='timerDiv'>Time Remaining: <span id=timer>10</span> seconds</div" + "<br>");
            questionDiv.append("<div id='questionDiv'>" + questionArray[questionIndex].Question + "</div" + "<br>");

            for (var i = 0; i < questionArray[questionIndex].Choises.length; i++) {

                questionDiv.append("<br><button type='button' class='btn btn-success answer-button btn-lg'>" + questionArray[questionIndex].Choises[i] + "</button>");
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
        noAnswer++;

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
            questionDiv.empty();
            questionDiv.append($("<div>Wrong Answer</div>"))
            questionDiv.append("<img src='" + questionArray[questionIndex].Picture + "'/>")
            questionIndex++;
            inCorrectTotal++;
            setTimeout(() => {
                askQuestion();
            }, 1000);
        }
    });
    function restart() {

        $("body").on("click", '.restart-button', function (event) {
            console.log("button clicked " + $(this).text());
            
            // console.log("clicked start");
            questionCounter = 0;
            questionIndex = 0;
            questionDiv = $("<div>")
            correctTotal = 0;
            inCorrectTotal = 0;
            noAnswer = 0;
            askQuestion();
        });
    }
    function endGame() {
        console.log("endGame Function")
        $(".container-initialTimer").empty();
        questionDiv.append($("<div>Correct Answer: " + correctTotal + "</div>"));
        questionDiv.append($("<div>Wrong Answer: " + inCorrectTotal + "</div>"));
        questionDiv.append($("<div>No Answer: " + noAnswer + "</div>"));
        questionDiv.append("<div><img src='https://media.giphy.com/media/l3vQXpNnRGaAVprjO/giphy.gif' width = '300px' height ='300px'/></div>")
        questionDiv.append("<button type='button' class='btn btn-success restart-button btn-lg'>Restart</button>");
        number = 0;
        $(".container-initialTimer").prepend(questionDiv);
        clearInterval(questionCounter)
        restart();
        


    }

});