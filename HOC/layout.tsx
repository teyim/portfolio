import Navbar from '@components/global/navbar';

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <section className="text-gray-400 font-SG ">
      <Navbar />
      {children}
    </section>
  );
}

export default Layout;
