<template>
  <RadioApp :tracks="cachedTracks"></RadioApp>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { fetchTracks, type Track } from '@/services/radio.service';
import RadioApp from '@/components/RadioApp.vue';
import { useCached } from '@vueuse/core';

const tracks = ref<Track[]>([]);

const cachedTracks = useCached<Track[]>(tracks, (_tracks, _cached) => {
  const nowplayingTrack = _tracks.find(({ status }) => status === 'playing') || null;
  const nowplayingTrackCache = _cached.find(({ status }) => status === 'playing') || null;

  return !!nowplayingTrack && !!nowplayingTrackCache && nowplayingTrack.time === nowplayingTrackCache.time;
})

const fetchData = async () => {
  const { nowplaying } = await fetchTracks();

  tracks.value = nowplaying;
}

const timer = setInterval(fetchData, 2000);

onMounted(fetchData);
onUnmounted(() => clearInterval(timer));
</script>

<style lang="scss" scoped></style>