/* eslint-disable no-unused-vars */
function play() {
    'use strict';
    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById("four").style.display = 'block';
    document.getElementById("beastboy").style.display = 'none';
}

audio.onended = function () {
    'use strict';
    audio.play();
};
/* eslint-disable no-unused-vars */