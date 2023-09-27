<template>
    <div playing-track v-if="track">
        <img :src="track.imageUrl" alt="track artwork">
        <h3>{{ track.title }}</h3>
        <p>{{ track.artist }}</p>
        <p>{{ track.duration }}</p>
    </div>
</template>
<script setup lang="ts">
import type { Track } from '@/services/radio.service';

const props = defineProps<{ track: Track | null }>()

</script>
<style lang="scss" scoped></style>