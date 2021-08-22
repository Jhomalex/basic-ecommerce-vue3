<template>
  <div class="navbar">
    <div class="title" @click="goToProductList()">
      <img src="@/assets/logo.png" height="50" />
      <span class="text">Ecommerce</span>
    </div>
    <search-box v-model:search-text="searchText" />
    <div class="navbar-right-menu">
      <button class="navbar-options">My Account</button>
      <button
        class="navbar-options"
        @click="isOpenShoppingCart = !isOpenShoppingCart"
      >
        <div class="cart-item-badge">
          <i class="fas fa-shopping-bag"></i>
          <span class="count">{{ shoppingBagCounter }}</span>
        </div>
      </button>
    </div>
  </div>
  <shopping-cart-drawer v-model:open="isOpenShoppingCart" />
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import SearchBox from '@/components/shared/SearchBox.vue';
import ShoppingCartDrawer from '@/components/shared/ShoppingCardDrawer/ShoppingCartDrawer.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { SearchBox, ShoppingCartDrawer },
  setup() {
    const searchText = ref('');
    const isOpenShoppingCart = ref(false);
    const store = useStore();
    const router = useRouter();

    const updateSearchText = (text: string) =>
      store.commit('updateSearchText', { text });

    const goToProductList = () => {
      router.push({ name: 'ProductList' });
    };

    const shoppingBagCounter = computed(() => store.getters.shoppingBagCount);

    watch(searchText, (text) => {
      updateSearchText(text);
    });

    return {
      searchText,
      goToProductList,
      isOpenShoppingCart,
      shoppingBagCounter
    };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars';

.navbar {
  background: white;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0rem;
}

.navbar-right-menu {
  display: flex;
  margin-right: 2rem;
}

.navbar-options {
  background-color: white;
  border: 0rem;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: $text-color;
}

.title {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: $text-color;
  margin-left: 2rem;
  cursor: pointer;
  .text {
    margin-left: 5px;
  }
}

.cart-item-badge {
  font-size: 22px !important;
  margin-left: 1rem;
  position: relative;
  padding: 10px;
}

.cart-item-badge .count {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: tomato;
  position: absolute;
  color: #ffffff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 5px;
  right: -0px;
}
</style>
