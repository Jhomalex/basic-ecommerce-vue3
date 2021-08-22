<template>
  <div class="column">
    <div class="card">
      <img
        class="product-image"
        v-bind:src="productDatas.image"
        @click="go('ProductDetail', { productId: productDatas.id })"
      />
      <div class="container">
        <h4>
          <b>{{ productDatas.price }} USD</b>
        </h4>
        <p class="product-description">{{ productDatas.title }}</p>
        <product-counter />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCounter from '@/components/shared/ProductCounter.vue';

export default defineComponent({
  components: { ProductCounter },
  name: 'ProductCard',
  props: {
    productDatas: {
      type: Object
    }
  },
  methods: {
    go(routeName: string, params: Record<string, string>) {
      this.$router.push({ name: routeName, params });
    }
  }
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  margin-bottom: 20px;
}

.row {
  margin: 0 -5px;
}

.row:after {
  content: '';
  display: table;
  clear: both;
}

@media screen and (max-width: 800px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 6px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.product-image {
  object-fit: contain;
  width: 60%;
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

.product-description {
  font-size: 13px;
  color: #5a5a5a;
  white-space: nowrap;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
