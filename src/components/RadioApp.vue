<template>
    <div class="radio-app">
        <NowPlayingTrack :track="nowPlayingTrack"></NowPlayingTrack>
        <TracksHistory :tracks="historyTracks"></TracksHistory>
    </div>
</template>

<script setup lang="ts">
import { type Track } from '@/services/radio.service';
import NowPlayingTrack from './NowPlayingTrack.vue';
import TracksHistory from './TracksHistory.vue';
import { computed } from 'vue';

const props = defineProps<{ tracks: Track[] }>();

const nowPlayingTrack = computed<Track | null>(() => props.tracks.find(({ status }) => status === 'playing') || null);
const historyTracks = computed<Track[]>(() => props.tracks.filter(({ status }) => status === 'history'));
</script>

<style lang="scss" scoped></style>