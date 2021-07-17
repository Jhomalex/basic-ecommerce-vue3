<template>
  <div class="column">
    <div class="card">
      <img class="product-image" v-bind:src="productImage" />
      <div class="container">
        <h4>
          <b>{{ productPrice }}</b>
        </h4>
        <p class="product-description">{{ productDescription }}</p>
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
  data() {
    return {
      productTitle: 'Product Title',
      productPrice: 'Product Price',
      productDescription: 'Product Description',
      productCategory: 'Product Category',
      productImage:
        'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg'
    };
  }
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.column {
  float: left;
  width: 25%;
  padding: 0 10px;
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
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.product-description {
  font-size: 13px;
  color: #5a5a5a;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
