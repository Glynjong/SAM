// canvas for mobile
if ($(window).width() <= 1366) {
    console.log(" <=1366")
    window.canvas = new fabric.Canvas('canvas', {
        width: ($(window).width() / 3),
        height: ($(window).width() / 3),
        backgroundColor: "white"
    });
}
// canvas for pc
if ($(window).width() > 1366) {
    console.log(" > 1366")
    console.log($(window).width()* (16/9))
    console.log($(window).height()* (9/16))
    window.canvas = new fabric.Canvas('canvas', {
        width: $(window).height()  -350,
        height: $(window).height()  -350,
        left: 1000,
        backgroundColor: "white"
    });
}
'use strict';
(function() {

    fabric.Object.prototype.setControlsVisibility({
        mt: false,
        mtr: false,
        mb: false,
        ml: false,
        mr: false,
      });

    fabric.Canvas.prototype.customiseControls({
        tl: {
            action: 'moveUp',
            cursor: "move"
        },
        tr: {
            action: 'rotate',
            cursor: "pointer"
        },
        bl: {
            action: 'scale',
        },
        br: {
            action: 'remove',
            cursor: 'pointer',
        },
    });

    // basic settings
    fabric.Object.prototype.customiseCornerIcons({
        settings: {
            borderColor: '#0094dd',
            cornerSize: 25,
            cornerShape: 'rect',
        },
        tl: {
            icon: './Assets/act-3/movebtn.svg',
        },
        tr: {
            icon: './Assets/act-3/rotatebtn.svg',
        },
        bl: {
            icon: './Assets/act-3/scalebtn.svg',
        },
        br: {
            icon: './Assets/act-3/deletebtn.svg',
        },
    }, function() {
        window.canvas.renderAll();
    });
    // canvas responsive when changing size
    resizeCanvas = function() {
        if ($(window).width() > 1366) {
            var winW = $(window).width(),
                winH = $(window).height(),
                curW = window.canvas.getWidth(),
                curH = window.canvas.getHeight(),
                canW = winW - (winW / 2),
                canH = winH - 350;
    
            /*  $wrapper.add('.refs').css({
              width: canW,
              height: canH
            }); */
            canvas.setWidth(canH);
            canvas.setHeight(canH);
            canvas.renderAll();
        }
      };
    $(window).resize(resizeCanvas);

})();

// check for bonus items
function bonusItems() {
    var star1 = localStorage.getItem("star1")
    var star2 = localStorage.getItem("star2")
    var star3 = localStorage.getItem("star3")
    var star4 = localStorage.getItem("star4")
    var star5 = localStorage.getItem("star5")
    var star6 = localStorage.getItem("star6")
    if (star1 != null && star1 != "false") {
        if (star2 != null && star2 != "false") {
            if (star3 != null && star3 != "false") {
                document.getElementById("bonus").style.display = "block"
                console.log("bouns")
            }
        }
    }
    if (star4 != null && star4 != "false") {
        if (star5 != null && star5 != "false") {
            if (star6 != null && star6 != "false") {
                document.getElementById("bonus2").style.display = "block"
                console.log("bouns2")
            }
        }
    }
}
bonusItems();

// creating shapes on canvas when clicked
function createShape(e) {
    fabric.Image.fromURL(`Assets/act-3/${e.target.id}.svg`,
    function(img) {
    img.scale(2).set({
    left: 45,
    top: 35,
    right:0,
    bottom:0,
    angle: 0,
    settings : {
    centeredRotation: true
    }
    });
        window.canvas.add(img).setActiveObject(img);
    });
}

// changes the tabs for sidebars
function changeTab(e) {
    var id = e.target.id;
    document.getElementById("sidebar1").style.display = "none";
    document.getElementById("sidebar2").style.display = "none";
    document.getElementById("sidebar3").style.display = "none";
    document.getElementById("sidebar4").style.display = "none";
    document.getElementById("sidebar1_img").style.display = "none";
    document.getElementById("sidebar2_img").style.display = "none";
    document.getElementById("sidebar3_img").style.display = "none";
    document.getElementById("sidebar4_img").style.display = "none";
    document.getElementById(`sidebar${id}`).style.display = "block";
    document.getElementById(`sidebar${id}_img`).style.display = "block";
}

// reset canvas
function reset() {
    // window.canvas.clear();
    // window.canvas.backgroundColor = "white";
    window.canvas.remove(...canvas.getObjects().concat())
}
// undo canvas
function undo() {
    window.canvas.undo();
}
// redo canvas
function redo() {
    window.canvas.redo();
}

// download image
function download_img(e) {
    canvas = new fabric.Canvas('canvas-dl', {
    });
    // var ctest = document.getElementById('myCanvas');
    // var context = ctest.getContext('2d');
    // var maxWidth = 400;
    // var lineHeight = 24;
    // var x = (ctest.width - maxWidth) / 2;
    // var y = 60;
    // var text = 'All the world\'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';

    // context.font = '15pt Calibri';
    // context.fillStyle = '#333';

    // wrapText3(context, text, x, y, maxWidth, lineHeight);
    var canvas1 = document.getElementById('qn1');
    var ctxQ1 = canvas1.getContext('2d');
    var canvas2 = document.getElementById('qn2');
    var ctxQ2 = canvas2.getContext('2d');
    var maxWidth = 600;
    var lineHeight = 24;
    var x1 = 0;//((canvas1.width - maxWidth)+100)/ 2;
    var x2 = 0
    var y = 25;
    // var text = 'All the world\'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';
    var text1 = document.getElementById("qn-1").value;
    ctxQ1.font = '18pt Poppins';
    ctxQ1.fillStyle = '#463383';
    var text2 = document.getElementById("qn-3").value;
    ctxQ2.font = '18pt Poppins';
    ctxQ2.fillStyle = '#463383';
    wrapText1(ctxQ1, text1, x1, y, maxWidth, lineHeight);
    wrapText2(ctxQ2, text2, x2, y, maxWidth, lineHeight);
    var c = document.getElementById("canvas-dl")
    var ctx = c.getContext("2d")
    c.width = 2500;
    c.height = 1500;
    var star1 = localStorage.getItem("star1")
    var star2 = localStorage.getItem("star2")
    var star3 = localStorage.getItem("star3")
    var star4 = localStorage.getItem("star4")
    var star5 = localStorage.getItem("star5")
    var star6 = localStorage.getItem("star6")
    var act1 = new Image();
    act1.src = `./Assets/stars/act1${star1}${star2}${star3}.svg`;
    var act2 = new Image();
    act2.src = `./Assets/stars/act2${star4}${star5}${star6}.svg`;
    var bgimg = new Image();
    bgimg.src = "Assets/act-3/bgimg.jpg";
    bgimg.onload = function() {
        ctx.drawImage(bgimg,0,0,2500,1500)
        var canvas = $("#gameplay #canvas");
        var dataURL = canvas[0].toDataURL({
            format: 'png',
            multiplier: 1
        });
        var artwork = new Image();
        artwork.src = dataURL;
        artwork.onload = function(){
            var Name = new Image();
            Name.src = window.canvasImgN;
            var uClass = new Image();
            uClass.src = window.canvasImgC;
            var Q1 = new Image();
            Q1.src = window.CanvasQ1
            var Q2 = new Image();
            Q2.src = window.CanvasQ2
            var test = new Image();
            test.src = window.test;
            ctx.drawImage(artwork, 225, 125, 1150, 1150);
            ctx.drawImage(Name, 1475,225)
            ctx.drawImage(uClass, 1475,300)
            ctx.drawImage(Q1, 1520,460)
            ctx.drawImage(Q2, 1780,750)
            var dataURL = c.toDataURL({
                format: 'png',
                multiplier: 1
            });
            $("#artworkImg").attr("src", dataURL);
            $("#artworkLink").attr("href", dataURL);
        }
    }
}
function dl_canvas(e) {
    var image = window.canvas.toDataURL({
        format: 'jpeg',
        quality: 0.8
    });
    e.href = image;
}
// go to qn 1
function qn1() {
    canvas_blank = new fabric.Canvas('canvas-blank', {
        width: window.canvas.width,
        height: window.canvas.height,
        backgroundColor: "white"
    });
    if (document.getElementById("canvas").toDataURL() == document.getElementById("canvas-blank").toDataURL()) {
        // console.log("blank")
        alert("Please add something to the canvas")
    } else {
        // console.log("false")
        $("#gameplay").hide()
        $("#question-1").show()
        $("#promptOverlay").attr("id", "")
        $("#logoC").hide();
        $("#testMeta").replaceWith($('<meta name="viewport" content="width=device-width, initial-scale=1.0">'));
    }
}
// go to qn 2
function qn2() {
    console.log(document.getElementById("qn-1").value)
    if (document.getElementById("qn-1").value != "") {
        $("#question-1").hide()
        $("#question-3").show()
    } else {
        alert("Please type something")
    }
}
// go to download page
function dl_page() {
    if (document.getElementById("qn-3").value != "") {
        $("#question-3").hide()
        $("#dl-page").show()
        window.canvas.discardActiveObject().renderAll();
        var user = getUser();
        var Name = user.UName
        var uClass = user.UClass
        document.getElementById("name").innerHTML = Name;
        document.getElementById("uClass").innerHTML = uClass;
        html2canvas(document.getElementById("name"), {
            onrendered: function (cv) {
                window.canvasImgN = cv.toDataURL("image/jpg");
                $('#canvasImg').html('<img src="'+window.canvasImgN+'" alt="">');
            }
        });
        html2canvas(document.getElementById("uClass"), {
            onrendered: function (cv) {
                window.canvasImgC = cv.toDataURL("image/jpg");
                $('#canvasImg2').html('<img src="'+window.canvasImgC+'" alt="">');
            }
        });
        download_img()
    } else {
        alert("Please type something")
    }
    
}
// fetch qn 1 input
function wrapText1(ctxQ1, text1, x1, y, maxWidth, lineHeight) {
    var words = text1.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = ctxQ1.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctxQ1.fillText(line, x1, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    ctxQ1.fillText(line, x1, y);
    window.CanvasQ1 = document.getElementById('qn1').toDataURL("image/jpg");
    $('#canvasImg3').html('<img src="'+window.CanvasQ1+'" alt="">');
}
// fetch qn 2 input
function wrapText2(ctxQ2, text2, x2, y, maxWidth, lineHeight) {
    var words = text2.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = ctxQ2.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctxQ2.fillText(line, x2, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    ctxQ2.fillText(line, x2, y);
    window.CanvasQ2 = document.getElementById('qn2').toDataURL("image/jpg");
    $('#canvasImg4').html('<img src="'+window.CanvasQ2+'" alt="">');
}

// next for instructions
function nextSteps(elem) {
            $(elem).parent().next().show()
            $(elem).parent().hide();
}
// close instructions
function closeStep(elem) {
    $(elem).parents('.instructions').hide()
    $(elem).parents('.instructions').find('> div').hide();
    $("#gameplay").show();
    $("#sidebar1").show();
    $("#logoC").show();
}
$("button[href='#canvas']").click(function() {
    console.log("scrolldown")
    $("html, body").animate({ scrollTop: $(document).height() }, "fast");
    return false;
  });
  // show instructions
function showSteps() {
    $("#gameplay").hide();
    $("#logoC").hide();
    parent = $("#freeplay");
    parent.find('> div:first-child').show();
    parent.show();
}
// instructions upon page load
function initialSteps() {
    parent = $("#freeplay");
    parent.find('> div:first-child').show();
    parent.show();
}
