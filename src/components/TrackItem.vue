<template>
  <div class="history-track">
    <img :src="track.imageUrl" alt="track artwork" class="history-track__artwork" data-cy="track-image">
    <div class="history-track__meta">
      <h3 data-cy="track-title">{{ track.title }}</h3>
      <p data-cy="track-artist">{{ track.artist }}</p>
      <p class="history-track__meta__duration" data-cy="track-duration">{{ track.duration }}</p>
    </div>
    <p class="history-track__time" data-cy="track-start-time">{{ trackStartTime }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '@/services/radio.service';
import { computed } from 'vue';

const props = defineProps<{ track: Track }>();

const trackStartTime = computed(() => new Date(props.track.time).toLocaleTimeString())

</script>

<style lang="scss" scoped>
.history-track {
  height: 6rem;
  display: flex;

  &__artwork {
    margin-right: 1.5rem;
    border-radius: 5px;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;

    &__duration {
      font-size: 0.75rem;
      margin-top: auto;
    }
  }

  &__time {
    margin-left: auto;
    font-size: 0.75rem;
  }
}
</style>