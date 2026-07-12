import { Pagination } from '@/components/custom/Pagination';
import { products } from '@/mocks/products.mock';
import { Jumbotron } from '@/shop/components/Jumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';

export const HomePage = () => {
  return (
    <>
      <Jumbotron
        title={`Colección ${new Date().getFullYear()}`}
        subtitle='Ropa minimalista y elegante inspirada en el diseño futurista de Tesla.'
      />

      <ProductsGrid products={products} />

      <Pagination totalPages={10} />
    </>
  );
};
