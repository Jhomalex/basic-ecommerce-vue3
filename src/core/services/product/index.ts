import { ProductRepository } from '@/dataSources/firebase/ProductRepository';
import { ListProductsService } from './ListProductsService';
import { GetProductByIdService } from './GetProductByIdService';

const productRepo = new ProductRepository();

export const listProductService = new ListProductsService(productRepo);
export const getProductByIdService = new GetProductByIdService(productRepo);
