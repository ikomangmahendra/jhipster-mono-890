import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: '58da63fd-5d5c-49c2-bb80-c36259f193a1',
};

export const sampleWithPartialData: IProduct = {
  id: '7bbfd778-fc20-42b7-97cc-d85abe337d3f',
};

export const sampleWithFullData: IProduct = {
  id: '211a0cfe-1a07-4340-9f1a-3acd4260f789',
  name: 'ugh exactly',
};

export const sampleWithNewData: NewProduct = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
