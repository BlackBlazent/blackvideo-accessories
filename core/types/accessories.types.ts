import { PlaybackAPI } from "../api/playback.api";

export interface BlackVideoAccessory {

  id: string;
  name: string;
  description: string;
  version: string;

  activate(api: PlaybackAPI): void;

  deactivate(): void;

  config?: Record<string, any>;
}
