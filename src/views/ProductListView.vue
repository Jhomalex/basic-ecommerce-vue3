<template>
  <div class="home">
    <div
      v-for="(product, key) in productListFiltered"
      :key="key"
      style="height: 4rem"
    >
      <span>{{ product.title }}</span>
    </div>
  </div>
  <div class="listing-section">
    <product-card />
    <product-card />
    <product-card />
    <product-card />
  </div>
</template>

<script lang="ts">
import { InternalResponse } from '@/core/entities/InternalResponse';
import { Product } from '@/core/entities/Product';
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import ProductCard from '@/components/shared/ProductCard.vue';

export default defineComponent({
  name: 'ProductList',
  components: { ProductCard },
  setup() {
    const store = useStore();

    const productList = computed(() => store.state.productList as Product[]);
    const searchText = computed(() => store.state.searchText as string);
    const productListFiltered = computed(() => {
      if (searchText.value.length > 0) {
        return productList.value.filter((p) =>
          p.title.toLowerCase().includes(searchText.value.toLowerCase())
        );
      }
      return productList.value;
    });

    onMounted(() => {
      listProducts();
    });

    const listProducts = (): Promise<InternalResponse> =>
      store.dispatch('listProducts');

    return { productListFiltered };
  }
});
</script>

<style scoped>
.listing-section {
  width: 100%;
  float: left;
  padding: 1%;
  padding-top: 150px;
}
</style>
