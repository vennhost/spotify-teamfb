class AudioHelper {
    player = document.getElementById("audio-player");
    togglePlay() {
        if (this.player.paused) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }

    get paused() {
        return this.player.paused;
    }

    setSource(source) {
        this.player.src = source;
    }
    play(source) {
        this.player.play();
    }
    pause(source) {
        this.player.pause();
    }
}

export default AudioHelper;