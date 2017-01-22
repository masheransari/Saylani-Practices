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
    questionArr[5] = [5, "What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id=\"demo\">This is a demonstration.</p>", "document.getElementByName(\"p\").innerHTML = \"Hello World!\";", "document.getElementById(\"demo\").innerHTML = \"Hello World!\";", "document.getElement(\"p\").innerHTML = \"Hello World!\";", "#demo.innerHTML = \"Hello World!\";", "document.getElementById(\"demo\").innerHTML = \"Hello World!\";"];
    questionArr[6] = [6, "What is the correct syntax for referring to an external script called \"xxx.js\"?", "&lt;script src=\"xxx.js\">", "&lt;script href=\"xxx.js\">", "&lt;script name=\"xxx.js\">", "None of Them", "&lt;script src=\"xxx.js\">"];
    questionArr[7] = [7, "How do you write \"Hello World\" in an alert box?", "msgBox(\"Hello World\");", "msg(\"Hello World\");", "alert(\"Hello World\");", "alertBox(\"Hello World\");", "alert(\"Hello World\");"];
    questionArr[8] = [8, "How does a FOR loop start?", "for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5; i++)"];
    questionArr[9] = [9, "var f = function g(){ return 23; };typeof g();", "number", "undefined", "function", "Error", "function"];
}

questionReload();
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < 7; j++) {
//         console.log("data = " + questionArr[i][j]);
//     }
// }
var count = 1;
var randomNumber;

var option1, option2, option3, option4;
var radio1, radio2, radio3, radio4;
var question;
var tempAnswer;
var marks = 0;

function choiceQUestion() {
    if (count <= 10) {
        newQuestion();
    } else {
        console.log("in else Body");
    }
}




function newQuestion() {
    randomNumber = Math.random() * id.length;
    randomNumber = Math.floor(randomNumber);
    console.log(questionArr[randomNumber]);

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


    // console.log("count " + (count) + " and  size= " + questionArr.length + " and id = " + id.length);
    // if (questionArr.length == 1) {
    //     console.log("" + questionArr);
    //     questionArr = [];
    // }
    id.splice(randomNumber, 1);
    alert(randomNumber);
    questionArr.splice(randomNumber, 1);

    count++;
}