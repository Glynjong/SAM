$("#option-1").click(function(e) {
    selected(e)
});
$("#option-2").click(function(e) {
    selected(e)
});
$("#answer").click(function(e) {
    selected(e)
});
$("#submit").click(function(e) {
    submit(e)
});
var firstAns = false;
var Retry = false;
var star1 = "";
var star2 = "";
var star3 = "";
var starsArray = new Array();

// window.onload = clear;
// function clear() {
//     localStorage.clear()
// }

loadStars()
function loadStars() {
    document.getElementById('next').style.display = "none"
    document.getElementById('retry').style.display = "none"
    document.getElementById('retry-next').style.display = "none"
    document.getElementById('option-1').style.color = "#463383"
    document.getElementById('option-2').style.color = "#463383"
    document.getElementById('answer').style.color = "#463383"
    var star1 = localStorage.getItem("star1")
    var star2 = localStorage.getItem("star2")
    var star3 = localStorage.getItem("star3")
    var qNum = localStorage.getItem("qNum")
    if (star1 != null && star1 != "false") {
        document.getElementById(`star1`).src = "Assets/act-1/star.svg"
        if (star2 != null && star2 != "false") {
            if (star3 != null && star3 != "false") {
                document.getElementById("bonus1").style.display = "block"
            }
        }
    } else if(star1 != null && star1 == "false") {
        document.getElementById(`star1`).src = "Assets/act-1/greystar.svg"
    }
    if (star2 != null && star2 != "false") {
        document.getElementById(`star2`).src = "Assets/act-1/star.svg" 
    } else if(star2 != null && star2 == "false") {
        document.getElementById(`star2`).src = "Assets/act-1/greystar.svg"
    }
    if (star3 != null && star3 != "false") {
        document.getElementById(`star3`).src = "Assets/act-1/star.svg"
    } else if(star3 != null && star3 == "false") {
        document.getElementById(`star3`).src = "Assets/act-1/greystar.svg"
    }  
}

function selected(e){
    window.select = e.target.id;
    reset();
    document.getElementById(window.select).style.background = "#463383";
    document.getElementById(window.select).style.color = "#fff";
}

function reset() {
  document.getElementById("option-1").style.background = "#fff";
  document.getElementById("option-1").style.color = "#463383";
  document.getElementById("option-1").style.borderColor = "#3D9CD7";
  document.getElementById("option-2").style.background = "#fff";
  document.getElementById("option-2").style.color = "#463383";
  document.getElementById("option-2").style.borderColor = "#3D9CD7";
  document.getElementById("answer").style.background = "#fff";
  document.getElementById("answer").style.color = "#463383";
  document.getElementById("answer").style.borderColor = "#3D9CD7";
}

function disableClick() {
    document.getElementById("link").style.pointerEvents ="none"
}

function submit(e) {
    var user = getUser();
    answer =  window.select;
    if (answer != "") {
        if (firstAns == false) {
            firstAns = true
            if (answer == "answer"){
                document.getElementById("answer").style.background = "#5BBF7F"
                document.getElementById("answer").style.borderColor = "white";
                disableClick()
                document.getElementById("submit").style.display = "none"
                document.getElementById('next').style.display = "block"
                var qNum = localStorage.getItem("qNum")
                qNum ++;
                document.getElementById(`star${qNum}`).src = "Assets/act-1/star.svg"
                localStorage.setItem("qNum", qNum)
                var logic = "true";
                localStorage.setItem(`star${qNum}`, logic)
            } 
            else {
                document.getElementById(answer).style.background ="#E0873D"
                document.getElementById(answer).style.borderColor = "white";
                disableClick()
                var qNum = localStorage.getItem("qNum")
                qNum ++;
                document.getElementById("submit").style.display = "none"
                document.getElementById("retry").style.display = "block"
                document.getElementById(`star${qNum}`).src = "Assets/act-1/greystar.svg"
                localStorage.setItem("qNum", qNum)
                var logic = "false";
                localStorage.setItem(`star${qNum}`, logic)
            } 

        } 
        if (Retry == true) {
            if (answer == "answer"){
                document.getElementById("answer").style.background = "#5BBF7F"
                document.getElementById("answer").style.borderColor = "white";
                disableClick()
                document.getElementById("submit").style.display = "none"
                document.getElementById('retry-next').style.display = "block"
            } 
            else {
                document.getElementById(answer).style.background ="#E0873D"
                document.getElementById(answer).style.borderColor = "white";
                disableClick()
                document.getElementById("submit").style.display = "none"
                document.getElementById("retry").style.display = "block"
            } 
        }
    }
    // console.log(user.Score)
}

function retry() {
    reset()
    document.getElementById("retry").style.display = "none"
    document.getElementById("submit").style.display = "block"
    document.getElementById("link").style.pointerEvents ="auto"
    answer = ""
    Retry = true;
}
