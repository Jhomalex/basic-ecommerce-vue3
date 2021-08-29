import { Success, Invalid, Error } from '@/core/entities/InternalResponse';
import { Product } from '@/core/entities/Product';
import { IProductRepository } from '@/core/repositories/IProductRepository';

export class ProductRepository implements IProductRepository {
  async list(): Promise<Success<Product[]> | Invalid | Error> {
    try {
      const res = await fetch(
        'https://basic-ecommerce-vue3-d6663-default-rtdb.firebaseio.com/products.json'
      );
      const productsRes = await res.json();
      const productIds = Object.keys(productsRes);
      const products = productIds.map((productId) => {
        return {
          id: productId,
          category: productsRes[productId].category as string,
          title: productsRes[productId].title as string,
          description: productsRes[productId].description as string,
          image: productsRes[productId].image as string,
          price: productsRes[productId].price as number
        } as Product;
      });

      return { code: 'success', message: products };
    } catch (err) {
      return { code: 'error', message: err };
    }
  }
  async getById(
    productId: string
  ): Promise<Invalid | Error | Success<Product>> {
    try {
      const res = await fetch(
        `https://basic-ecommerce-vue3-d6663-default-rtdb.firebaseio.com/products/${productId}.json`
      );
      const productRes = await res.json();
      const product = {
        id: productId,
        category: productRes.category as string,
        title: productRes.title as string,
        description: productRes.description as string,
        image: productRes.image as string,
        price: productRes.price as number
      } as Product;

      return { code: 'success', message: product };
    } catch (err) {
      return { code: 'error', message: err };
    }
  }
}
