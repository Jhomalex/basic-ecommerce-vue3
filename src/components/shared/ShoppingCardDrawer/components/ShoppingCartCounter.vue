<template>
  <div class="shopping-cart">
    <div class="action-button" @click="rest()">
      <i class="fa fa-minus action-icon"></i>
    </div>
    <div class="counter-number">{{ counting }}</div>
    <div class="action-button" @click="add()">
      <i class="fa fa-plus action-icon"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'ShoppingCartCounter',
  props: { counter: { type: Number, required: true } },
  emits: ['update:counter'],
  setup(props, { emit }) {
    const counting = computed(() => props.counter);

    const add = () => emit('update:counter', props.counter + 1);
    const rest = () =>
      emit('update:counter', props.counter > 0 ? props.counter - 1 : 0);
    return { counting, add, rest };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars';

.shopping-cart {
  display: flex;
  background-color: $text-color;
  color: #fff;
  border-radius: 7px;
  height: 35px;
}
.counter-number {
  margin: auto 0px;
  width: 50px;
  text-align: center;
}
.action-button {
  cursor: pointer;
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .action-icon {
    font-size: 10px;
  }
}
</style>
