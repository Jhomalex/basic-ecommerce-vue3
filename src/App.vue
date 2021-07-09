<template>
  <navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/shared/Navbar.vue';

export default defineComponent({
  components: { Navbar }
});
</script>

<style lang="scss"></style>
