export interface ICategory {
  id: string;
  name?: string | null;
}

export type NewCategory = Omit<ICategory, 'id'> & { id: null };
