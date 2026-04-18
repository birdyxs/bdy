var music = document.getElementById("bg-music");
    var icon = document.getElementById("music-icon");


    window.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            icon.classList.remove("ph-play");
            icon.classList.add("ph-pause");
        }
    }, { once: true });

    function toggleMusic() {
        if (music.paused) {
            music.play();
            icon.classList.remove("ph-play");
            icon.classList.add("ph-pause");
        } else {
            music.pause();
            icon.classList.remove("ph-pause");
            icon.classList.add("ph-play");
        }
    }

document.addEventListener('contextmenu', event => event.preventDefault());
							
document.onkeydown = function (e) {
							
if(e.keyCode == 123) {
return false;
}

if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
return false;
}
							
if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
return false;
}
							
if(e.ctrlKey && e.keyCode == 85) {
return false;
}
}