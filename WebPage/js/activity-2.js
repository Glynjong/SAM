var firstAns = false;
var Retry = false;
var star4 = "";
var star5 = "";
var star6 = "";
var starsArray = new Array();
var num1 = false;
var num2 = false;
var num3 = false;

// window.onload = clear;
// function clear() {
//     localStorage.clear()
// }

loadStars()
function loadStars() {
    document.getElementById('next').style.display = "none"
    document.getElementById('retry').style.display = "none"
    document.getElementById('retry-next').style.display = "none"
    var star4 = localStorage.getItem("star4")
    var star5 = localStorage.getItem("star5")
    var star6 = localStorage.getItem("star6")
    var qNum = localStorage.getItem("qNum")
    if (star4 != null && star4 != "false") {
        document.getElementById(`star4`).src = "Assets/act-1/star.svg"
    } else if(star4 != null && star4 == "false") {
        document.getElementById(`star4`).src = "Assets/act-1/greystar.svg"
    }
    if (star5 != null && star5 != "false") {
        document.getElementById(`star5`).src = "Assets/act-1/star.svg" 
    } else if(star5 != null && star5 == "false") {
        document.getElementById(`star5`).src = "Assets/act-1/greystar.svg"
    }
    if (star6 != null && star6 != "false") {
        document.getElementById(`star6`).src = "Assets/act-1/star.svg"
    } else if(star6 != null && star6 == "false") {
        document.getElementById(`star6`).src = "Assets/act-1/greystar.svg"
    }  
}

function submit(e) {
  var answer1 = "1"
  var answer2 = "2"
  var answer3 = "3"
    var answers = [];
    $("#answers > div").each((index, elem) => {
    answers.push(elem.id);
    });
  if (firstAns == false) {
      firstAns = true;
      if (answers[0] == answer1) {
        document.getElementById("1").style.background = "#5BBF7F";  
        document.getElementById("1").style.borderColor = "white";
        num1 = true;   
      } else {
        document.getElementById("1").style.background = "#E0873D";  
        document.getElementById("1").style.borderColor = "white"; 
      }
      if (answers[1] == answer2) {
        document.getElementById("2").style.background = "#5BBF7F";
        document.getElementById("2").style.borderColor = "white";
        num2 = true;
      } else {
        document.getElementById("2").style.background = "#E0873D";
        document.getElementById("2").style.borderColor = "white";
      }
      if (answers[2] == answer3) {
        document.getElementById("3").style.background = "#5BBF7F";
        document.getElementById("3").style.borderColor = "white";
        num3 = true;
      } else {
        document.getElementById("3").style.background = "#E0873D";
        document.getElementById("3").style.borderColor = "white";
      }
      if (num1 && num2 && num3 == true) {
        document.getElementById("submit").style.display = "none"
        document.getElementById('next').style.display = "block"
        var qNum = localStorage.getItem("qNum")
        qNum ++;
        document.getElementById(`star${qNum}`).src = "Assets/act-1/star.svg"
        localStorage.setItem("qNum", qNum)
        var logic = "true";
        localStorage.setItem(`star${qNum}`, logic)
      } else {
        document.getElementById("submit").style.display = "none"
        document.getElementById("retry").style.display = "block"
        var qNum = localStorage.getItem("qNum")
        qNum ++;
        document.getElementById(`star${qNum}`).src = "Assets/act-1/greystar.svg"
        localStorage.setItem("qNum", qNum)
        var logic = "false";
        localStorage.setItem(`star${qNum}`, logic)
      }
  }
  if (Retry == true) {
    if (answers[0] == answer1) {
        document.getElementById("1").style.background = "#5BBF7F";
        document.getElementById("1").style.borderColor = "white";  
        num1 = true;   
      } else {
        document.getElementById("1").style.background = "#E0873D";
        document.getElementById("1").style.borderColor = "white";   
      }
      if (answers[1] == answer2) {
        document.getElementById("2").style.background = "#5BBF7F";
        document.getElementById("2").style.borderColor = "white";
        num2 = true;
      } else {
        document.getElementById("2").style.background = "#E0873D";
        document.getElementById("2").style.borderColor = "white";
      }
      if (answers[2] == answer3) {
        document.getElementById("3").style.background = "#5BBF7F";
        document.getElementById("3").style.borderColor = "white";
        num3 = true;
      } else {
        document.getElementById("3").style.background = "#E0873D";
        document.getElementById("3").style.borderColor = "white";
      }
      if (num1 && num2 && num3 == true) {
        document.getElementById("submit").style.display = "none"
        document.getElementById('retry-next').style.display = "block"
      } else {
        document.getElementById("submit").style.display = "none"
        document.getElementById("retry").style.display = "block"
      }
  }
}

function reset() {
    document.getElementById("1").style.background = "#fff";
    document.getElementById("2").style.background = "#fff";
    document.getElementById("3").style.background = "#fff";
    document.getElementById("1").style.borderColor = "#3D9CD7";
    document.getElementById("2").style.borderColor = "#3D9CD7";
    document.getElementById("3").style.borderColor = "#3D9CD7";
}

function retry() {
  reset()
  document.getElementById("retry").style.display = "none"
  document.getElementById("submit").style.display = "block"
  Retry = true;
}

new Sortable(answers, {
  animation: 150,
  ghostClass: 'blue-background-class'
});

// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     id = ev.target.id;
//     ev.dataTransfer.setData("text", id);
//     var quizDrag = document.getElementById(id).innerHTML;
//     localStorage.setItem("quizDrag", quizDrag)
//     var quizDrop = localStorage.getItem("quizDrop")
//     localStorage.setItem("prevID", id)
//     console.log(quizDrag)
//     console.log(quizDrop)
//     console.log(id)
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var quizDrop = document.getElementById(ev.target.id).innerHTML;
//     localStorage.setItem("quizDrop", quizDrop) 
//     var quizDrag = localStorage.getItem("quizDrag")
//     var id = localStorage.getItem("prevID")
//     document.getElementById(ev.target.id).innerHTML = quizDrag;
//     document.getElementById(id).innerHTML = quizDrop;
//     console.log(quizDrag)
//     console.log(quizDrop)
//   }