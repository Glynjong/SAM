$("#classInput").on('keyup', function (e) {
    if (e.keyCode === 13 ) {
        saveUser();
    }
})
$("#classInput").on('keyup', function (e) {
    if (e.keyCode === 84 ) {
        test();
    }
})

function test() {
    var user = getUser();
    console.log(user.UName)
    console.log(user.UClass)
}

function saveUser() {
    var UName = document.getElementById("nameInput").value;
    var UClass = document.getElementById("classInput").value;
    const Score = 0;
    localStorage.setItem("userName", UName)
    localStorage.setItem("userClass", UClass)
    localStorage.setItem("Score", Score)

    // console.log(UName, UClass)
    if (UName == "" && UClass == ""){
        alert("Please fill in your name and class")
    }
    else if (UName != "" && UClass !="") {
        console.log("next")
        $("#Next").attr("href", "S1-Pre-activity-instruction.html")
    }
}

function getUser() {
    UName = localStorage.getItem("userName"),
    UClass = localStorage.getItem("userClass")
    Score = localStorage.getItem("Score")

    return {UName, UClass, Score};
}

