<template>
  <div>
    <p>{{ productDetailed.title }}</p>
  </div>
</template>

<script lang="ts">
import { InternalResponse } from '@/core/entities/InternalResponse';
import { Product } from '@/core/entities/Product';
import { computed, defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ProductDetail',
  components: {},
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
