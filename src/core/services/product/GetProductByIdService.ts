import { Success, Invalid, Error } from '@/core/entities/InternalResponse';
import { Product } from '@/core/entities/Product';
import { IProductRepository } from '@/core/repositories/IProductRepository';

export class GetProductByIdService {
  constructor(private productRepo: IProductRepository) {}

  async run(productId: string): Promise<Success<Product> | Invalid | Error> {
    return await this.productRepo.getById(productId);
  }
}
