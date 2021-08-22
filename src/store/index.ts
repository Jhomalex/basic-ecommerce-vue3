import { createStore } from 'vuex';
import { Product } from '@/core/entities/Product';
import { ProductShoppingCart } from '@/core/entities/ProductShoppingCart';
import {
  getProductByIdService,
  listProductService
} from '@/core/services/product';
import { InternalResponse } from '@/core/entities/InternalResponse';

export default createStore({
  state: {
    productList: [] as Product[],
    productDetailed: {} as Product,
    productShoppingCartList: [] as ProductShoppingCart[],
    searchText: '',
  },
  getters: {
    shoppingCartCount(state) {
      return state.productShoppingCartList.length;
    },
    shoppingBagCount(state) {
      let count = 0;
      const productShoppingCartList = state.productShoppingCartList;
      productShoppingCartList.forEach(element => {
        count += element.quantity;
      });
      return count;
    },
    shoppingCartList(state) {
      return state.productShoppingCartList;
    }
  },
  mutations: {
    updateProductList(state, payload: { products: Product[] }) {
      state.productList = payload.products;
    },
    updateProduct(state, payload: { product: Product }) {
      state.productDetailed = payload.product;
    },
    updateSearchText(state, payload: { text: string }) {
      state.searchText = payload.text;
    },
    addProductInShoppingCart(state, payload: { product: Product, quantity: number}) {
      const newProduct = {
        product: payload.product,
        quantity: payload.quantity,
      } as ProductShoppingCart;

      const addProductQuantity = () => {
        const foundProductId = state.productShoppingCartList.findIndex((currentProduct) => {
          return (currentProduct.product.id === payload.product.id) ? currentProduct.quantity = payload.quantity : '';
        });

        if(foundProductId < 0) 
        {
          state.productShoppingCartList.push(newProduct);
        }
      };

      (state.productShoppingCartList.length <= 0) ? state.productShoppingCartList.push(newProduct) : addProductQuantity();
    },
    removeProductInShoppingCart(state, payload: { product: Product }) {
      state.productShoppingCartList.findIndex((currentProduct, id) => {
        if (currentProduct.product.id === payload.product.id) 
        {
          return currentProduct.quantity != 1 ? currentProduct.quantity-- : state.productShoppingCartList.splice(id, 1);
        }
      });
    }
  },
  actions: {
    async listProducts({ commit }): Promise<InternalResponse> {
      try {
        const res = await listProductService.run();
        switch (res.code) {
          case 'success':
            commit('updateProductList', { products: res.message });
            return {
              code: 'success',
              message: 'Listado de productos realizado con éxito'
            };
          case 'invalid':
            return { code: 'invalid', message: res.message };
          case 'error':
            return { code: 'invalid', message: res.message };
        }
      } catch (err) {
        return { code: 'error', message: 'Error al listar los productos' };
      }
    },

    async getProductById(
      { commit },
      payload: { productId: number }
    ): Promise<InternalResponse> {
      try {
        const res = await getProductByIdService.run(payload.productId);
        switch (res.code) {
          case 'success':
            commit('updateProduct', { product: res.message });
            return {
              code: 'success',
              message: 'El producto se encontró'
            };
          case 'invalid':
            return { code: 'invalid', message: res.message };
          case 'error':
            return { code: 'invalid', message: res.message };
        }
      } catch (err) {
        return { code: 'error', message: 'Error al listar los productos' };
      }
    }
  },
  modules: {}
});
