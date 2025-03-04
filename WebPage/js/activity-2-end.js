var firstAns = false;
var Retry = false;
var star4 = "";
var star5 = "";
var star6 = "";
var starsArray = new Array();
var op1 = document.getElementById("option-1");
var op2 = document.getElementById("option-2");
var op3 = document.getElementById("option-3");
var num1 = false;
var num2 = false;
var num3 = false;
var answer1 = "We Are Family"
var answer2 = "Harmony"
var answer3 = "Community"

// window.onload = clear;
// function clear() {
//     localStorage.clear()
// }

loadStars()
function loadStars() {
    var star4 = localStorage.getItem("star4")
    var star5 = localStorage.getItem("star5")
    var star6 = localStorage.getItem("star6")
    var qNum = localStorage.getItem("qNum")
    if (star4 != null && star4 != "false") {
        document.getElementById(`star4`).src = "Assets/act-1/star.svg"
        if (star5 != null && star5 != "false") {
            if (star6 != null && star6 != "false") {
                document.getElementById("bonus2").style.display = "block"
            }
        }
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

