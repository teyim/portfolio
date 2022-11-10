import type { NextPage } from 'next';
import Cell, { cellSize } from '@components/cell';
import Grid from '@components/grid';
import Navbar from '@components/global/navbar';

const Home: NextPage = () => {
  return (
    <section className="font-SG overflow-hidden text-gray-300 ">
      <Grid />
      <Navbar />
    </section>
  );
};

export default Home;
