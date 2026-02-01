export interface PlaybackAPI {
  play(): void;
  pause(): void;

  seek(time: number): void;

  getCurrentTime(): number;
  getDuration(): number;

  getVideoElement(): HTMLVideoElement;

  captureFrame(): Promise<ImageBitmap>;
}
