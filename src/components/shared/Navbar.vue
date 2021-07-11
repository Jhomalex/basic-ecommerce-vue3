<template>
  <div class="navbar">
    <div class="title">Ecommerce</div>
    <search-box v-model:search-text="searchText" />
    <div class="navbar-options">
      <button class="account-button">My Account</button>
      <button class="account-button">
        <i class="fas fa-shopping-bag car-button"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import SearchBox from '@/components/shared/SearchBox.vue';

export default defineComponent({
  components: { SearchBox },
  setup() {
    const searchText = ref('');

    watch(searchText, (searchText) => {
      console.log(searchText);
    });

    return { searchText };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars';

.navbar {
  background: white;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0rem;
}

.navbar-options {
  display: flex;
  margin-right: 2rem;
}

.account-button {
  background-color: white;
  border: 0rem;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: $text-color;
}

.car-button {
  font-size: 20px !important;
  margin-left: 1rem;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: $text-color;
  margin-left: 2rem;
}
</style>
