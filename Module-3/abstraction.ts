// oop - abstraction


// interface

interface MediaPlayer{
    play(): void;
    pause() : void;
    stop() : void;
}



// implementations
class MusicPlayer implements MediaPlayer{
    play(): void {
        console.log("playing music....");
        
    }
    pause(): void {
        console.log("playing pause....");
        
    }
    stop(): void {
        console.log("playing stop....");
        
    }
}


const MezbaPlayer = new MusicPlayer();
MezbaPlayer.play();