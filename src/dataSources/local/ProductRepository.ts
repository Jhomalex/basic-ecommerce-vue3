import { Success, Invalid, Error } from '@/core/entities/InternalResponse';
import { Product } from '@/core/entities/Product';
import { IProductRepository } from '@/core/repositories/IProductRepository';
import * as json from '@/assets/products.json';

export class ProductRepository implements IProductRepository {
  async list(): Promise<Success<Product[]> | Invalid | Error> {
    try {
      const res = JSON.parse(JSON.stringify(json)) as { default: Product[] };
      return { code: 'success', message: res.default };
    } catch (err) {
      return { code: 'error', message: err };
    }
  }

  async getById(
    productId: number
  ): Promise<Invalid | Error | Success<Product>> {
    try {
      const res = JSON.parse(JSON.stringify(json)) as { default: Product[] };
      const idx = res.default.findIndex((d) => d.id === productId);
      return { code: 'success', message: res.default[idx] };
    } catch (err) {
      return { code: 'error', message: err };
    }
  }
}
