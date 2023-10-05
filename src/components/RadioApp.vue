<template>
  <div class="radio-app">
    <NowPlayingTrack v-if="nowPlayingTrack" :track="nowPlayingTrack" data-cy="now-playing"></NowPlayingTrack>
    <TracksHistory :tracks="historyTracks" data-cy="history-tracks"></TracksHistory>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type Track } from '@/services/radio.service';
import NowPlayingTrack from './NowPlayingTrack.vue';
import TracksHistory from './TracksHistory.vue';

const props = defineProps<{ tracks: Track[] }>();

const nowPlayingTrack = computed<Track | null>(() => props.tracks.find(({ status }) => status === 'playing') || null);
const historyTracks = computed<Track[]>(() => props.tracks.filter(({ status }) => status === 'history'));
</script>

<style lang="scss" scoped>
.radio-app {
  max-width: 500px;
}
</style>
