import { MediaPlayerFacade } from './src/facade/MediaPlayer';

const mediaPlayer = new MediaPlayerFacade();

mediaPlayer.playAudio('song.mp3');
mediaPlayer.playVideo('movie.mp4');
