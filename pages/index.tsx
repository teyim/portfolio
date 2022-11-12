import type { NextPage } from 'next';
import Grid from '@components/grid';
import Header from '@components/header';

const Home: NextPage = () => {
  return (
    <section className="overflow-hidden ">
      <Grid />
      <Header />
    </section>
  );
};

export default Home;
