// oop - abstraction


// interface
//abstract class


// idea
// interface MediaPlayer{
//     play(): void;
//     pause() : void;
//     stop() : void;
// }



// implementations
// class MusicPlayer implements MediaPlayer{
//     play(): void {
//         console.log("playing music....");
        
//     }
//     pause(): void {
//         console.log("playing pause....");
        
//     }
//     stop(): void {
//         console.log("playing stop....");
        
//     }
// }


// const MezbaPlayer = new MusicPlayer();
// MezbaPlayer.play();


//idea
abstract class MediaPlayer {
   abstract play(): void;
    abstract pause() : void;
    abstract stop() : void;
}


// implementation
class MezbaPlayer extends MediaPlayer{
    play(): void {
        console.log("playing music...");
        
    }
    pause(): void {
        console.log("pausing music...");
        
    }
    stop(): void {
        console.log("stopping music...");
        
    }
}
const mezbapler1 = new MezbaPlayer()