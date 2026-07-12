import { Jumbotron } from '@/shop/components/Jumbotron';

export const HomePage = () => {
  return (
    <>
      <Jumbotron
        title={`Colección ${new Date().getFullYear()}`}
        subtitle='Ropa minimalista y elegante inspirada en el diseño futurista de Tesla.'
      />
    </>
  );
};
