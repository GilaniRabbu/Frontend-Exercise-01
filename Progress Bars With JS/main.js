function move1() {
    var elem = document.getElementById("myBar1");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 50) { // Fill the bar you can change this
            clearInterval(id); // commented this then ⇩
            // width = 0; Remove this comment, this will move bar infinitely
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
move1();

function move2() {
    var elem = document.getElementById("myBar2");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
move2();

function move3() {
    var elem = document.getElementById("myBar3");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
move3();

function move4() {
    var elem = document.getElementById("myBar4");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
move4();

function move5() {
    var elem = document.getElementById("myBar5");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
move5();

function move6() {
    var elem = document.getElementById("myBar6");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 95) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
move6();

function move7() {
    var elem = document.getElementById("myBar7");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
move7();