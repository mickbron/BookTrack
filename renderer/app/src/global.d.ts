import { AppAPI } from './app/types/electron';

declare global {
  interface Window {
    api: AppAPI;
  }
}

export {};
