<template>
  <div class="quantity">
    <button class="plus-btn" type="button" v-on:click="addItem()">
      <span>+</span>
    </button>
    <input type="text" v-bind:value="count" readonly />
    <button class="minus-btn" type="button" @click="reduceItem()">
      <span>-</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCounter',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    addItem() {
      return this.count++;
    },
    reduceItem() {
      if (this.count !== 0) return this.count--;
    }
  }
});
</script>

<style>
.quantity {
  padding-top: 20px;
  margin-right: 60px;
  margin: auto;
  width: 75%;
  padding: 10px;
}

.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 100px;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}

.quantity input:focus {
  outline: none;
}

.plus-btn {
  margin-top: 2px;
  border: #43484d;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 2px;
}

.minus-btn {
  margin-bottom: 3px;
  border: #43484d;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 2px;
}
</style>
