<template>
  <div
    class="product-card-counter"
    :style="[count === 0 ? { display: 'none' } : { display: '' }]"
  >
    <span class="product-card-cart-button">
      <span class="icon counter-btn" @click="reduceItem()">-</span>
      <span class="label counter-value">{{ count }}</span>
      <span class="icon counter-btn" v-on:click="addItem()">+</span>
    </span>
  </div>
  <div
    class="product-card-counter"
    :style="[count !== 0 ? { display: 'none' } : { display: '' }]"
  >
    <span class="product-card-cart-button add-product" @click="addItem()">
      <span class="label">Agrgar</span>
      <span class="icon icon-product-add">+</span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';

export default defineComponent({
  name: 'ProductCounter',
  props: { product: Object },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    ...mapMutations({
      addProductInShoppingCart: 'addProductInShoppingCart',
      removeProductInShoppingCart: 'removeProductInShoppingCart'
    }),
    addItem() {
      this.addProductInShoppingCart({ product: this.product });
      return this.count++;
    },
    reduceItem() {
      this.removeProductInShoppingCart({ product: this.product });
      if (this.count !== 0) return this.count--;
    }
  }
});
</script>

<style scoped>
.product-card-counter {
  padding-top: 20px;
  margin-right: 60px;
  margin: auto;
  width: 75%;
  padding: 10px;
}

.product-card-cart-button {
  height: 35px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  background-color: #f3f3f3;
  z-index: 1;
  -webkit-transition: 0.15s ease-in-out;
  -o-transition: 0.15s ease-in-out;
  transition: 0.15s ease-in-out;
}

.product-card-cart-button .label {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
}

.product-card-cart-button .icon {
  width: 35px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #e6e6e6;
  -webkit-transition: 0.15s ease-in-out;
  -o-transition: 0.15s ease-in-out;
  transition: 0.15s ease-in-out;
}

.product-card-cart-button .counter-btn {
  background-color: #000000;
  color: #ffffff;
}

.product-card-cart-button .counter-value {
  background-color: #ffffff;
}

.add-product:hover {
  background-color: #000000;
  color: #ffffff;
}

.product-card-cart-button:hover .icon-product-add {
  background-color: #000000;
  color: #ffffff;
}
</style>
