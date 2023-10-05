<template>
  <div class="history-tracks">
    <TrackItem v-for="track in tracks" :key="track.time" :track="track"></TrackItem>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '@/services/radio.service';
import TrackItem from './TrackItem.vue';

defineProps<{ tracks: Track[] }>();
</script>

<style lang="scss" scoped>
.history-tracks {
  overflow: scroll;
  margin-top: 1.5rem;
  height: 30rem;

  :deep(.history-track) {
    &:not(:first-of-type):not(:last-of-type) {
      margin: 1.5rem 0;
    }
  }
}
</style>
