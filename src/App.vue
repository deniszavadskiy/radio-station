<template>
  <RadioApp :tracks="tracks"></RadioApp>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { fetchTracks, type Track } from '@/services/radio.service';
import RadioApp from '@/components/RadioApp.vue';

const tracks = ref<Track[]>([]);

const fetchData = async () => {
  const { nowplaying } = await fetchTracks();

  tracks.value = nowplaying;
}

const timer = setInterval(fetchData, 2000);

onMounted(fetchData);
onUnmounted(() => clearInterval(timer));
</script>

<style lang="scss" scoped></style>