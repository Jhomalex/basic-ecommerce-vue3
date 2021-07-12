import { Invalid, Success, Error } from '../entities/InternalResponse';
import { Product } from '../entities/Product';

export interface IProductRepository {
  list(): Promise<Success<Product[]> | Invalid | Error>;
  getById(productId: number): Promise<Success<Product> | Invalid | Error>;
}
