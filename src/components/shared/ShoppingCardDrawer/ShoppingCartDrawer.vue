<template>
  <div class="drawer">
    <div
      class="drawer-content"
      :class="[isOpen ? 'drawer-opened' : 'drawer-closed']"
    >
      <header class="header">
        <div class="content">
          <p class="title">Shopping Cart</p>
          <button class="close-button" @click="close()">
            <i class="fas fa-times close-icon"></i>
          </button>
        </div>
      </header>
      <div class="body">
        <div v-if="isVoid" class="shopping-cart-void">
          <div class="shopping-cart-void-content">
            <img src="@/assets/shopping-bag.svg" class="bag-img" />
            <p class="text-shopping-cart-void">No products in the cart.</p>
          </div>
        </div>
        <div v-else class="shopping-cart">
          <shopping-cart-item
            v-for="(product, key) in products"
            :key="key"
            :id="product.id"
            :image="product.image"
            :name="product.title"
            :quantity="product.quantity"
            :unitPrice="product.price"
          />
        </div>
      </div>
      <div class="footer">
        <div class="center">
          <checkout-button :enabled="!isVoid" />
        </div>
      </div>
    </div>
  </div>
  <div class="dimmer" v-if="isOpen"></div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import CheckoutButton from '@/components/shared/ShoppingCardDrawer/components/CheckoutButton.vue';
import ShoppingCartItem from '@/components/shared/ShoppingCardDrawer/components/ShoppingCartItem.vue';
import { Product } from '@/core/entities/Product';

export default defineComponent({
  components: { CheckoutButton, ShoppingCartItem },
  name: 'ShoppingCartDrawer',
  props: { open: Boolean },
  emits: ['update:open'],
  setup(props, { emit }) {
    const products = ref([
      {
        id: 1,
        title: 'Galletas Santa Verónica',
        price: 10,
        description: 'Galletas de vainilla con chispas de chocolate',
        category: 'cookies',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_l3zvV6aCPVOx93YWaukVVAUTCKedJoVYoSPKs5VyEXocxqScDBJZSc0IqASoTVS6ps&usqp=CAU',
        quantity: 1
      }
    ] as (Product & { quantity: number })[]);
    const isOpen = computed(() => props.open);
    const isVoid = computed(() => products.value.length === 0);
    const close = () => {
      emit('update:open', false);
    };

    return { isOpen, isVoid, close, products };
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/_vars';

.drawer {
  position: fixed;
  height: 100vh;
  background-color: #fff;
  right: 0px;
  flex-direction: row;
  z-index: 10;
}
.drawer-content {
  height: 100%;
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
.drawer-opened {
  max-width: 28rem;
}
.drawer-closed {
  max-width: 0px;
}
.dimmer {
  position: fixed;
  flex: 1 1 0%;
  background-color: rgb(50, 50, 50);
  height: 100%;
  width: 100%;
  opacity: 0.5;
}
.header {
  padding-left: 2rem;
  padding-right: 2rem;
  border-bottom: 1px solid $light-line-color;
  width: 24rem;
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    font-weight: 700;
    font-size: 20px;
  }
  .close-button {
    background-color: white;
    border: 0rem;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    color: $text-color;
  }
  .close-icon {
    font-size: 16px !important;
    margin-left: 1rem;
  }
}
.body {
  height: 80%;
  width: 100%;
  display: flex;
}
.shopping-cart-void {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.shopping-cart {
  width: 100%;
}
.bag-img {
  padding: 0px 8.4rem;
}
.text-shopping-cart-void {
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: $text-color;
}
.footer {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0px;
  height: 90px;
  width: 100%;
  .center {
    margin: 0 auto;
  }
}
</style>
