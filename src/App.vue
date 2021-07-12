<template>
  <navbar />
  <router-view style="padding-top: 6rem" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/shared/Navbar.vue';

export default defineComponent({
  components: { Navbar }
});
</script>

<style lang="scss"></style>
