import { MenuItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'entradas', name: 'Entradas' },
  { id: 'principales', name: 'Platos Principales' },
  { id: 'especialidades', name: 'Especialidades' },
  { id: 'bebidas', name: 'Bebidas' },
  { id: 'postres', name: 'Postres' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Entradas
  {
    id: 'e1',
    name: 'Ceviche de Mercado',
    description: 'Pesca del día marinada en leche de tigre clásica, con camote glaseado, choclo y canchita serrana.',
    price: 42,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=800',
    labels: ['Popular', 'Recomendado'],
  },
  {
    id: 'e2',
    name: 'Causa Limeña de Cangrejo',
    description: 'Fina masa de papa amarilla con ají amarillo, rellena de pulpa de cangrejo, palta fuerte y mayonesa acevichada.',
    price: 38,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'e3',
    name: 'Anticuchos de Corazón',
    description: 'Finos cortes de corazón de res marinados en ají panca, servidos con papas doradas y choclo tierno.',
    price: 35,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    labels: ['Tradicional'],
  },

  // Principales
  {
    id: 'p1',
    name: 'Lomo Saltado Premium',
    description: 'Dados de lomo fino salteados al wok con cebolla, tomate, ají amarillo y un toque de pisco, acompañados de papas fritas crujientes y arroz con choclo.',
    price: 68,
    category: 'principales',
    image: 'https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?auto=format&fit=crop&q=80&w=800',
    labels: ['Favorito'],
  },
  {
    id: 'p2',
    name: 'Ají de Gallina Contemporáneo',
    description: 'Pechuga deshilachada en crema de ají amarillo y nueces, servida sobre papas nativas y coronada con huevo de codorniz.',
    price: 45,
    category: 'principales',
    image: 'https://images.unsplash.com/photo-1613769049487-b0979b707276?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p3',
    name: 'Arroz con Pato a la Chiclayana',
    description: 'Pierna de pato confitada sobre arroz meloso de culantro y cerveza negra, con zarza criolla de rabanito.',
    price: 58,
    category: 'principales',
    image: 'https://images.unsplash.com/photo-1512058560366-cd24270083cd?auto=format&fit=crop&q=80&w=800',
    labels: ['Especial'],
  },

  // Especialidades
  {
    id: 's1',
    name: 'Cuy Crocante con Papas Nativas',
    description: 'Cuy deshuesado y crocante, servido con ensalada de hierbabuena y papas nativas andinas salteadas en mantequilla de hierbas.',
    price: 75,
    category: 'especialidades',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    labels: ['Nuevo', 'Andino'],
  },
  {
    id: 's2',
    name: 'Risotto de Quinua y Setas',
    description: 'Quinua perlada cremosa con mix de setas del valle, queso paria y aceite de trufa blanca.',
    price: 52,
    category: 'especialidades',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
    labels: ['Vegetariano'],
  },

  // Bebidas
  {
    id: 'b1',
    name: 'Pisco Sour Catedral',
    description: 'Nuestra receta clásica con Pisco Quebranta premium, limón sutil, jarabe de goma y amargo de angostura.',
    price: 32,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    labels: ['Imperdible'],
  },
  {
    id: 'b2',
    name: 'Chicha Morada Artesanal',
    description: 'Elaborada con maíz morado, piña, manzana y especias andinas. 100% natural.',
    price: 15,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
  },

  // Postres
  {
    id: 'd1',
    name: 'Suspiro a la Limeña de Lúcuma',
    description: 'Manjar blanco de yemas con esencia de lúcuma, coronado con merengue al oporto y canela.',
    price: 25,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'd2',
    name: 'Chocolate Andino 70%',
    description: 'Mousse de chocolate de origen Cusco, con tierra de cacao y frutos rojos del bosque.',
    price: 28,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80&w=800',
    labels: ['Premium'],
  },
];
