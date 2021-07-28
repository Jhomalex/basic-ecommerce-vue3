<template>
  <div class="container">
    <div class="image-container">
      <i class="fas fa-times-circle image-close-icon"></i>
      <img
        height="90"
        width="90"
        class="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_l3zvV6aCPVOx93YWaukVVAUTCKedJoVYoSPKs5VyEXocxqScDBJZSc0IqASoTVS6ps&usqp=CAU"
      />
    </div>
    <div class="content">
      <span class="product-name">Galletas Don Vitorio</span>
      <span class="product-price">Unit Price: 20$</span>
      <div class="counter-and-price">
        <shopping-cart-counter v-model:counter="quantity" />
        <span class="price">$2.00</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ShoppingCartCounter from '@/components/shared/ShoppingCardDrawer/components/ShoppingCartCounter.vue';

export default defineComponent({
  name: 'ShoppingCartItem',
  components: { ShoppingCartCounter },
  setup() {
    let quantity = ref(0);
    return { quantity };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars';

.container {
  display: flex;
  align-items: center;
  padding: 20px 40px;
  .image-container::before {
    opacity: 0;
    transition: 0.3s;
  }
  .image-close-icon {
    font-size: 6px;
    opacity: 0;
    transition: 0.3s;
  }
}
.container:hover {
  .image-container::before {
    opacity: 0.3;
  }
  .image-close-icon {
    font-size: 18px;
    opacity: 1;
  }
}
.image-container {
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  .image-close-icon {
    color: #fff;
    position: absolute;
    left: 45px;
  }
  .image {
    border-radius: 5px;
    object-fit: cover;
  }
}
.image-container::before {
  content: '';
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.2;
}
.content {
  margin-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .product-name {
    font-size: 13px;
    color: $text-color;
    margin-bottom: 5px;
  }
  .product-price {
    font-size: 13px;
    color: $text-light-color;
    margin-bottom: 8px;
  }
  .counter-and-price {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .price {
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
