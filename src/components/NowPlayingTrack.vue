<template>
  <div class="playing-track">
    <img :src="track.imageUrl" alt="track artwork" class="playing-track__artwork">
    <div class="playing-track__meta">
      <h2 class="playing-track__title">{{ track.title }}</h2>
      <p class="playing-track__artist"> {{ track.artist }}</p>
    </div>
    <progress class="playing-track__progress" :value="currentProgress" min="0" max="100"></progress>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '@/services/radio.service';
import { ref, watchEffect } from 'vue';

const props = defineProps<{ track: Track }>()
const currentProgress = ref(0);
const interval = ref(0);

watchEffect(() => {
  const startTime = new Date(props.track.time).getTime();

  if (interval.value) {
    clearInterval(interval.value);
  }

  interval.value = setInterval(() => {
    const now = new Date().getTime();
    const [hours, minutes, seconds] = props.track.duration.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const elapsedSeconds = Math.floor((now - startTime) / 1000);
    currentProgress.value = (elapsedSeconds / totalSeconds) * 100;
  }, 1000)
})
</script>

<style lang="scss" scoped>
.playing-track {
  display: flex;
  flex-direction: column;

  &__artwork {
    align-self: center;
    width: 75%;
    border-radius: 10px;
  }

  &__meta {
    margin: 1.5rem 0;
  }

  &__progress {
    width: 100%;
    height: 7px;
    appearance: none;
    border: none;
    border-radius: 5px;
    background-color: #e0e0f0;

    &::-webkit-progress-bar {
      background-color: lightgray;
      border-radius: 5px;
    }

    &::-webkit-progress-value {
      background-color: gray;
      border-radius: 5px;
    }

    &::-moz-progress-bar {
      background-color: gray;
      border-radius: 5px;
    }

    &::ms-fill {
      background-color: gray;
      border-radius: 5px;
    }
  }
}
</style>