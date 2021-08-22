<template>
  <div class="container">
    <div class="image-box">
      <img :src="productDetailed.image" class="image-product" />
    </div>
    <div class="info-box">
      <span class="title-product">{{ productDetailed.title }}</span>
      <span class="price-product">{{ productDetailed.price }} USD</span>
      <span class="description-product">{{ productDetailed.description }}</span>
      <div class="cart-box">
        <counter-product />
        <button class="add-cart-button">
          <span>Add to cart</span>
        </button>
      </div>
      <span>
        <span style="color: #5a5a5a">Category: </span>
        <span class="category-product">
          {{ productDetailed.category }}
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { InternalResponse } from '@/core/entities/InternalResponse';
import { Product } from '@/core/entities/Product';
import { computed, defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import CounterProduct from '@/components/shared/CounterProduct.vue';

export default defineComponent({
  name: 'ProductDetail',
  components: { CounterProduct },
  setup() {
    const route = useRoute();
    const store = useStore();

    const productId = parseInt(route.params.productId as string);

    const productDetailed = computed(
      () => store.state.productDetailed as Product
    );
    const getProductData = (productId: number): Promise<InternalResponse> =>
      store.dispatch('getProductById', { productId });

    onMounted(() => {
      getProductData(productId);
    });

    return { productDetailed };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars';
.container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 80px;

  .image-box {
    display: flex;
    justify-content: center;
    align-items: center;

    .image-product {
      object-fit: contain;
      width: 300px;
      height: 400px;
    }
  }

  .info-box {
    display: flex;
    flex-direction: column;
    .title-product {
      color: $text-color;
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 10px;
    }
    .price-product {
      color: $text-color;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .description-product {
      color: #5a5a5a;
      font-size: 16px;
      margin-bottom: 30px;
    }
    .cart-box {
      display: flex;
      margin-bottom: 30px;
      .add-cart-button {
        cursor: pointer;
        background-color: #000;
        border-radius: 6px;
        color: #ffffff;
        max-height: 45px;
        padding: 0.8rem 2rem 0.8rem 2rem;
        border: 0px;
        margin-left: 10px;
      }
    }
    .category-product {
      color: $text-color;
      font-weight: 500;
    }
  }
}
</style>
