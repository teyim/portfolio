import type { NextPage } from 'next';
import Grid from '@components/grid';
import Navbar from '@components/global/navbar';
import Header from '@components/header';

const Home: NextPage = () => {
  return (
    <section className="font-SG overflow-hidden text-gray-400 ">
      <Grid />
      <Navbar />
      <Header />
    </section>
  );
};

export default Home;
