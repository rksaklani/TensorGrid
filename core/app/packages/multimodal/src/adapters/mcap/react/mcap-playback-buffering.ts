import {
  setBufferedRanges,
  setBufferingDetail,
  setIsBuffering,
  type PlaybackStore,
} from "@tensorgrid/playback";

/** Clears MCAP-owned playback buffering feedback during source transitions. */
export function resetMcapPlaybackBuffering(store: PlaybackStore): void {
  setBufferingDetail(store, null);
  setIsBuffering(store, false);
  setBufferedRanges(store, []);
}
