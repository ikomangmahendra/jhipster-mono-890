import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: '3f6853fc-9968-4423-8381-fa32179cf059',
};

export const sampleWithPartialData: ICategory = {
  id: '03bafe64-7b0c-4fef-88e4-0ccf33b03790',
  name: 'readily excited',
};

export const sampleWithFullData: ICategory = {
  id: 'e30493ab-c428-4aa1-bcc5-8eb30a1baaec',
  name: 'incidentally',
};

export const sampleWithNewData: NewCategory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
