import { AudioDecoder } from '../subsystems/audioDecoder';
import { Renderer } from '../subsystems/renderer';
import { VideoDecoder } from '../subsystems/videoDecoder';

export class MediaPlayerFacade {
  private audioDecoder: AudioDecoder;
  private videoDecoder: VideoDecoder;
  private render: Renderer;

  constructor() {
    this.audioDecoder = new AudioDecoder();
    this.videoDecoder = new VideoDecoder();
    this.render = new Renderer();
  }

  playAudio(file: string): void {
    this.audioDecoder.decodeAudio(file);
    this.render.renderAudio();
    console.log('Audio playback completed.');
  }

  playVideo(file: string): void {
    this.videoDecoder.decodeVideo(file);
    this.render.renderVideo();
    console.log('Video playback completed.');
  }
}
