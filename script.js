 var music = document.getElementById("bg-music");
    var icon = document.getElementById("music-icon");
    var modal = document.getElementById("friends-modal");

    function toggleMusic() {
        if (music.paused) {
            music.play();
            icon.classList.replace("ph-play", "ph-pause");
        } else {
            music.pause();
            icon.classList.replace("ph-pause", "ph-play");
        }
    }

    function toggleModal() {
        modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
    }

    function closeModalOutside(e) {
        if (e.target === modal) toggleModal();
    }

    document.onkeydown = function(e) {
        if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) return false;
    };
    document.addEventListener('contextmenu', event => event.preventDefault());

document.querySelector('.query').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('search-form').submit();
    }
});
