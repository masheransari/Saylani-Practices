// alert("Assalam-0-Alaikum World");

var questionArr;
questionArr = new Array(7);
var id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function questionReload() {
    questionArr[0] = [0, "Which of the following is correct about features of JavaScript?", "JavaScript is a lightweight, interpreted programming language.", "JavaScript is designed for creating network-centric applications", "JavaScript is complementary to and integrated with Java.", "All of the above.", "All of the above."];
    questionArr[1] = [1, "Which built-in method returns the length of the string?", "length()", "size()", "index()", "None of the above.", "length()"];
    questionArr[2] = [2, "Which built-in method returns the calling string value converted to lower case?", "toLowerCase()", "toLower()", "changeCase(LowerCase)", "None of the above.", "toLowerCase()"];
    questionArr[3] = [3, "Which of the following function of Number object returns a string value version of the current number?", "toString()", "toFixed()", "toLocaleString()", "toPrecision()", "toString()"];
    questionArr[4] = [4, "Inside which HTML element do we put the JavaScript?", "&lt;javascript>", "&lt;script>", "&lt;scripting>", "&lt;js>", "&lt;script>"];
    questionArr[5] = [5, "What is the correct JavaScript syntax to change the content of the HTML element below? <br/> &lt;p id=\"demo\"&gt;This is a demonstration.&lt;/p&gt;", "document.getElementByName(\"p\").innerHTML = \"Hello World!\";", "document.getElementById(\"demo\").innerHTML = \"Hello World!\";", "document.getElement(\"p\").innerHTML = \"Hello World!\";", "#demo.innerHTML = \"Hello World!\";", "document.getElementById(\"demo\").innerHTML = \"Hello World!\";"];
    questionArr[6] = [6, "What is the correct syntax for referring to an external script called \"xxx.js\"?", "&lt;script src=\"xxx.js\">", "&lt;script href=\"xxx.js\">", "&lt;script name=\"xxx.js\">", "None of Them", "&lt;script src=\"xxx.js\">"];
    questionArr[7] = [7, "How do you write \"Hello World\" in an alert box?", "msgBox(\"Hello World\");", "msg(\"Hello World\");", "alert(\"Hello World\");", "alertBox(\"Hello World\");", "alert(\"Hello World\");"];
    questionArr[8] = [8, "How does a FOR loop start?", "for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5; i++)"];
    questionArr[9] = [9, "var f = function g(){ return 23; };typeof g();", "number", "undefined", "function", "Error", "function"];
}

questionReload();

var count = 1;
var randomNumber;
var option1, option2, option3, option4;
var radio1, radio2, radio3, radio4;
var question;
var tempAnswer, selectedAnswer;
var marks = 0;

newQuestion();

function choiceQUestion() {
    if (count <= 10) {
        submitAns();
    } else {
        voidFields();
        var btnText = document.getElementById('nextBtn').innerHTML;
        if (btnText === "Show Result") {
            document.getElementById('form_id').style.display = 'none';
            if (marks >= 60 && marks <= 100) {
                document.getElementById('resultImage').setAttribute("src", "images/congrats.gif");
            } else {
                document.getElementById('resultImage').setAttribute("src", "images/fail.png");
            }
            document.getElementById('resultImage').setAttribute("class", "resultImage_container");
        }
    }
}

function voidFields() {
    document.getElementById("question").innerHTML = "";

    document.getElementById("option1").innerHTML = "";
    document.getElementById("radio1").style.display = 'none';
    document.getElementById("radio1").value = "";

    document.getElementById("option2").innerHTML = "";
    document.getElementById("radio2").value = "";
    document.getElementById("radio2").style.display = 'none';

    document.getElementById("option3").innerHTML = "";
    document.getElementById("radio3").value = "";
    document.getElementById("radio3").style.display = 'none';

    document.getElementById("option4").innerHTML = "";
    document.getElementById("radio4").value = "";
    document.getElementById("radio4").style.display = 'none';
    document.getElementById("question_image").style.display = 'none';
    document.getElementById('nextBtn').innerHTML = "Show Result";
}


function checkedRadio() {
    var whichRadioIsChecked = document.getElementsByName("choice");
    var len = whichRadioIsChecked.length;
    for (var i = 0; i < len; i++) {
        if (whichRadioIsChecked[i].checked) {
            selectedAnswer = whichRadioIsChecked[i].value;
            break;
        }
    }
}

function addEvent() {
    for (var i = 1; i < 5; i++) {
        var newEvent = document.getElementById("radio" + i);
        newEvent.setAttribute("onClick", "checkedRadio()");
    }
}

function submitAns() {
    checkedRadio();
    if (selectedAnswer == "" || selectedAnswer == null) {
        alert("Please Select the Option First..");
    } else {
        if (selectedAnswer == tempAnswer) {
            marks += 10;
        }
        newQuestion();
    }
}




function newQuestion() {
    addEvent();
    randomNumber = Math.random() * id.length;
    randomNumber = Math.floor(randomNumber);

    document.getElementById("question").innerHTML = questionArr[randomNumber][1];

    document.getElementById("option1").innerHTML = questionArr[randomNumber][2];
    document.getElementById("radio1").value = questionArr[randomNumber][2];

    document.getElementById("option2").innerHTML = questionArr[randomNumber][3];
    document.getElementById("radio2").value = questionArr[randomNumber][3];

    document.getElementById("option3").innerHTML = questionArr[randomNumber][4];
    document.getElementById("radio3").value = questionArr[randomNumber][4];

    document.getElementById("option4").innerHTML = questionArr[randomNumber][5];
    document.getElementById("radio4").value = questionArr[randomNumber][5];
    tempAnswer = questionArr[randomNumber][6];


    id.splice(randomNumber, 1);
    questionArr.splice(randomNumber, 1);
    count++;
}