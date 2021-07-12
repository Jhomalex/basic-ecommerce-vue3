import { Success, Invalid, Error } from '@/core/entities/InternalResponse';
import { Product } from '@/core/entities/Product';
import { IProductRepository } from '@/core/repositories/IProductRepository';

export class ListProductsService {
  constructor(private productRepo: IProductRepository) {}

  async run(): Promise<Success<Product[]> | Invalid | Error> {
    return await this.productRepo.list();
  }
}
