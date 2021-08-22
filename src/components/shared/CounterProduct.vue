<template>
  <div class="counter-container">
    <div class="number-counter">{{ counter }}</div>
    <div>
      <div class="justify-center border-bottom-left" @click="add()">+</div>
      <div class="justify-center border-left" @click="rest()">-</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CounterProduct',
  setup() {
    const counter = ref(1);
    const add = () => {
      counter.value++;
    };
    const rest = () => (counter.value > 0 ? counter.value-- : counter);

    return { counter, add, rest };
  }
});
</script>

<style scoped lang="scss">
.counter-container {
  border: 1px solid #000;
  border-radius: 8px;
  height: 45px;
  width: 100px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  .number-counter {
    grid-column: span 3 / span 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .justify-center {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .border-bottom-left {
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
  }
  .border-left {
    border-left: 1px solid #000;
  }
}
</style>
