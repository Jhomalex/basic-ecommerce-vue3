import { createStore } from 'vuex';
import { Product } from '@/core/entities/Product';
import {
  getProductByIdService,
  listProductService
} from '@/core/services/product';
import { InternalResponse } from '@/core/entities/InternalResponse';

export default createStore({
  state: {
    productList: [] as Product[],
    productDetailed: {} as Product,
    productShoppingCartList: [] as Product[],
    searchText: '',
  },
  getters: {
    shoppingCartCount(state) {
      return state.productShoppingCartList.length;
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
    addProductInShoppingCart(state, payload: { product: Product, quantity:number }) {
      state.productShoppingCartList.push(payload.product);
    },
    removeProductInShoppingCart(state, payload: { product: Product }) {
      const id = state.productShoppingCartList.findIndex(
        (p) => p.id === payload.product.id
      );
      state.productShoppingCartList.splice(id, 1);
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
