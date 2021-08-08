<template>
  <button
    :class="{ 'enabled-button': enabled, 'disabled-button': !enabled }"
    @click="$emit('click')"
  >
    <span class="text">Proceed To checkout</span>
    <span class="amount">$0.00</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CheckoutButton',
  props: { enabled: { type: Boolean, default: false } },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.enabled-button {
  cursor: pointer;
  background-color: #000;
  width: 370px;
  border-radius: 6px;
  color: #ffffff;
  padding: 1.2rem 3rem 1.2rem 0rem;
  border: 0px;
  display: flex;
  font-size: 16px;
  .text {
    flex-grow: 1;
    text-align: center;
  }
  .amount {
    margin-left: 6px;
  }
  .amount:before {
    content: '';
    height: 30%;
    width: 1px;
    background-color: #fff;
    display: block;
    position: absolute;
    top: 30px;
    left: 300px;
  }
}
.enabled-button:hover {
  background-color: rgb(41, 41, 41);
}
.disabled-button {
  background-color: #7a7a7a;
  width: 370px;
  border-radius: 6px;
  color: #ffffff;
  padding: 1.2rem 3rem 1.2rem 0rem;
  border: 0px;
  display: flex;
  font-size: 16px;
  .text {
    flex-grow: 1;
    text-align: center;
  }
  .amount {
    margin-left: 6px;
  }
  .amount:before {
    content: '';
    height: 30%;
    width: 1px;
    background-color: #fff;
    display: block;
    position: absolute;
    top: 30px;
    left: 300px;
  }
}
</style>
