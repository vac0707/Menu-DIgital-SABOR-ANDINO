export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entradas' | 'principales' | 'especialidades' | 'bebidas' | 'postres';
  image: string;
  labels?: string[];
}

export interface Category {
  id: string;
  name: string;
}
