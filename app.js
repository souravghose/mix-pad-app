// variabeles
let play = document.getElementById('sound1');
let play2 = document.getElementById('sound2');
let play3 = document.getElementById('sound3');
let play4 = document.getElementById('sound4');
let play5 = document.getElementById('sound5');
let play6 = document.getElementById('sound6');
let play7 = document.getElementById('sound7');
let play8 = document.getElementById('sound8');
let play9 = document.getElementById('sound9');
let play10 = document.getElementById('sound10');
let play11 = document.getElementById('sound11');
let play12 = document.getElementById('sound12');
let play13 = document.getElementById('sound13');
let play14 = document.getElementById('sound14');
let play15 = document.getElementById('sound15');
let play16 = document.getElementById('sound16');
let play17 = document.getElementById('sound17');
let play18 = document.getElementById('sound18');
let play19 = document.getElementById('sound19');
let play20 = document.getElementById('sound20');
let play21 = document.getElementById('sound21');
let play22 = document.getElementById('sound22');
let play23 = document.getElementById('sound23');
let play24 = document.getElementById('sound24');
// adding eventListener
play.addEventListener('click', playBase1);
play2.addEventListener('click', playBase2);
play3.addEventListener('click', playBase3);
play4.addEventListener('click', playBase4);
play5.addEventListener('click', playBase5);
play6.addEventListener('click', playBase6);
play7.addEventListener('click', playBase7);
play8.addEventListener('click', playBase8);
play9.addEventListener('click', playBase9);
play10.addEventListener('click', playBase10);
play11.addEventListener('click', playBase11);
play12.addEventListener('click', playBase12);
play13.addEventListener('click', playBase13);
play14.addEventListener('click', playBase14);
play15.addEventListener('click', playBase15);
play16.addEventListener('click', playBase16);
play17.addEventListener('click', playBase17);
play18.addEventListener('click', playBase18);
play19.addEventListener('click', playBase19);
play20.addEventListener('click', playBase20);
play21.addEventListener('click', playBase21);
play22.addEventListener('click', playBase22);
play23.addEventListener('click', playBase23);
play24.addEventListener('click', playBase24);
//adding function
function playBase1() {
    let audio = document.getElementById("mix1");
    if (play.classList.contains('pad')) {
        play.classList.remove('pad');
        play.classList.add('pad-active');
    } else {
        play.classList.add('pad');
        play.classList.remove('pad-active');
    }
    return audio.paused ? audio.play() : audio.pause();
}

function playBase2() {
    let audio2 = document.getElementById("mix2");
    if (play2.classList.contains('pad')) {
        play2.classList.remove('pad');
        play2.classList.add('pad-active');
    } else {
        play2.classList.add('pad');
        play2.classList.remove('pad-active');
    }
    return audio2.paused ? audio2.play() : audio2.pause();
}

function playBase3() {
    let audio3 = document.getElementById("mix3");
    if (play3.classList.contains('pad')) {
        play3.classList.remove('pad');
        play3.classList.add('pad-active');
    } else {
        play3.classList.add('pad');
        play3.classList.remove('pad-active');
    }
    return audio3.paused ? audio3.play() : audio3.pause();
}

function playBase4() {
    let audio4 = document.getElementById("mix4");
    if (play4.classList.contains('pad')) {
        play4.classList.remove('pad');
        play4.classList.add('pad-active');
    } else {
        play4.classList.add('pad');
        play4.classList.remove('pad-active');
    }
    return audio4.paused ? audio4.play() : audio4.pause();

}

function playBase5() {
    let audio5 = document.getElementById("mix5");
    if (play5.classList.contains('pad')) {
        play5.classList.remove('pad');
        play5.classList.add('pad-active');
    } else {
        play5.classList.add('pad');
        play5.classList.remove('pad-active');
    }
    return audio5.paused ? audio5.play() : audio5.pause();

}

function playBase6() {
    let audio6 = document.getElementById("mix6");
    if (play6.classList.contains('pad')) {
        play6.classList.remove('pad');
        play6.classList.add('pad-active');
    } else {
        play6.classList.add('pad');
        play6.classList.remove('pad-active');
    }
    return audio6.paused ? audio6.play() : audio6.pause();


}

function playBase7() {
    let audio7 = document.getElementById("mix7");
    if (play7.classList.contains('pad')) {
        play7.classList.remove('pad');
        play7.classList.add('pad-active');
    } else {
        play7.classList.add('pad');
        play7.classList.remove('pad-active');
    }
    return audio7.paused ? audio7.play() : audio7.pause();

}

function playBase8() {
    let audio8 = document.getElementById("mix8");
    if (play8.classList.contains('pad')) {
        play8.classList.remove('pad');
        play8.classList.add('pad-active');
    } else {
        play8.classList.add('pad');
        play8.classList.remove('pad-active');
    }
    return audio8.paused ? audio8.play() : audio8.pause();

}

function playBase9() {
    let audio9 = document.getElementById("mix9");
    if (play9.classList.contains('pad')) {
        play9.classList.remove('pad');
        play9.classList.add('pad-active');
    } else {
        play9.classList.add('pad');
        play9.classList.remove('pad-active');
    }
    return audio9.paused ? audio9.play() : audio9.pause();

}

function playBase10() {
    let audio10 = document.getElementById("mix10");
    if (play10.classList.contains('pad')) {
        play10.classList.remove('pad');
        play10.classList.add('pad-active');
    } else {
        play10.classList.add('pad');
        play10.classList.remove('pad-active');
    }
    return audio10.paused ? audio10.play() : audio10.pause();

}

function playBase11() {
    let audio11 = document.getElementById("mix11");
    if (play11.classList.contains('pad')) {
        play11.classList.remove('pad');
        play11.classList.add('pad-active');
    } else {
        play11.classList.add('pad');
        play11.classList.remove('pad-active');
    }
    return audio11.paused ? audio11.play() : audio11.pause();

}

function playBase12() {
    let audio12 = document.getElementById("mix12");
    if (play12.classList.contains('pad')) {
        play12.classList.remove('pad');
        play12.classList.add('pad-active');
    } else {
        play12.classList.add('pad');
        play12.classList.remove('pad-active');
    }

    return audio12.paused ? audio12.play() : audio12.pause();

}

function playBase13() {
    let audio13 = document.getElementById("mix13");
    if (play13.classList.contains('pad')) {
        play13.classList.remove('pad');
        play13.classList.add('pad-active');
    } else {
        play13.classList.add('pad');
        play13.classList.remove('pad-active');
    }

    return audio13.paused ? audio13.play() : audio13.pause();

}

function playBase14() {
    let audio14 = document.getElementById("mix14");
    if (play14.classList.contains('pad')) {
        play14.classList.remove('pad');
        play14.classList.add('pad-active');
    } else {
        play14.classList.add('pad');
        play14.classList.remove('pad-active');
    }

    return audio14.paused ? audio14.play() : audio14.pause();

}

function playBase15() {
    let audio15 = document.getElementById("mix15");
    if (play15.classList.contains('pad')) {
        play15.classList.remove('pad');
        play15.classList.add('pad-active');
    } else {
        play15.classList.add('pad');
        play15.classList.remove('pad-active');
    }

    return audio15.paused ? audio15.play() : audio15.pause();

}

function playBase16() {
    let audio16 = document.getElementById("mix16");
    if (play16.classList.contains('pad')) {
        play16.classList.remove('pad');
        play16.classList.add('pad-active');
    } else {
        play16.classList.add('pad');
        play16.classList.remove('pad-active');
    }

    return audio16.paused ? audio16.play() : audio16.pause();

}

function playBase17() {
    let audio17 = document.getElementById("mix17");
    if (play17.classList.contains('pad')) {
        play17.classList.remove('pad');
        play17.classList.add('pad-active');
    } else {
        play17.classList.add('pad');
        play17.classList.remove('pad-active');
    }

    return audio17.paused ? audio17.play() : audio17.pause();

}

function playBase18() {
    let audio18 = document.getElementById("mix18");
    if (play18.classList.contains('pad')) {
        play18.classList.remove('pad');
        play18.classList.add('pad-active');
    } else {
        play18.classList.add('pad');
        play18.classList.remove('pad-active');
    }

    return audio18.paused ? audio18.play() : audio18.pause();

}

function playBase19() {
    let audio19 = document.getElementById("mix19");
    if (play19.classList.contains('pad')) {
        play19.classList.remove('pad');
        play19.classList.add('pad-active');
    } else {
        play19.classList.add('pad');
        play19.classList.remove('pad-active');
    }

    return audio19.paused ? audio19.play() : audio19.pause();

}

function playBase20() {
    let audio20 = document.getElementById("mix20");
    if (play20.classList.contains('pad')) {
        play20.classList.remove('pad');
        play20.classList.add('pad-active');
    } else {
        play20.classList.add('pad');
        play20.classList.remove('pad-active');
    }

    return audio20.paused ? audio20.play() : audio20.pause();

}

function playBase21() {
    let audio21 = document.getElementById("mix21");
    if (play21.classList.contains('pad')) {
        play21.classList.remove('pad');
        play21.classList.add('pad-active');
    } else {
        play21.classList.add('pad');
        play21.classList.remove('pad-active');
    }

    return audio21.paused ? audio21.play() : audio21.pause();

}

function playBase22() {
    let audio22 = document.getElementById("mix22");
    if (play22.classList.contains('pad')) {
        play22.classList.remove('pad');
        play22.classList.add('pad-active');
    } else {
        play22.classList.add('pad');
        play22.classList.remove('pad-active');
    }

    return audio22.paused ? audio22.play() : audio22.pause();

}

function playBase23() {
    let audio23 = document.getElementById("mix23");
    if (play23.classList.contains('pad')) {
        play23.classList.remove('pad');
        play23.classList.add('pad-active');
    } else {
        play23.classList.add('pad');
        play23.classList.remove('pad-active');
    }

    return audio23.paused ? audio23.play() : audio23.pause();

}

function playBase24() {
    let audio24 = document.getElementById("mix24");
    if (play24.classList.contains('pad')) {
        play24.classList.remove('pad');
        play24.classList.add('pad-active');
    } else {
        play24.classList.add('pad');
        play24.classList.remove('pad-active');
    }

    return audio24.paused ? audio24.play() : audio24.pause();

}
//loop audio
document.getElementById('mix1').loop = true;
document.getElementById('mix2').loop = true;
document.getElementById('mix3').loop = true;
document.getElementById('mix4').loop = true;
document.getElementById('mix5').loop = true;
document.getElementById('mix6').loop = true;
document.getElementById('mix7').loop = true;
document.getElementById('mix8').loop = true;
document.getElementById('mix9').loop = true;
document.getElementById('mix10').loop = true;
document.getElementById('mix11').loop = true;
document.getElementById('mix12').loop = true;
document.getElementById('mix13').loop = true;
document.getElementById('mix14').loop = true;
document.getElementById('mix15').loop = true;
document.getElementById('mix16').loop = true;
document.getElementById('mix17').loop = true;
document.getElementById('mix18').loop = true;
document.getElementById('mix19').loop = true;
document.getElementById('mix20').loop = true;
document.getElementById('mix21').loop = true;
document.getElementById('mix22').loop = true;
document.getElementById('mix23').loop = true;
document.getElementById('mix24').loop = true;