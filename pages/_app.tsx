import '../styles/globals.css';
import Layout from 'HOC/layout';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextSeo
        title="Teyim Asobo"
        titleTemplate="Teyim Asobo"
        defaultTitle="Teyim Asobo"
        description="I am A frontend developer from cameroon, and a level 4 student of the University of Bamenda in Combined Maths and Computer Science"
        canonical="https://teyim.vercel.app/"
        openGraph={{
          url: 'https://teyim.vercel.app/',
          title: 'Teyim Asobo',
          description:
            'I am A frontend developer from cameroon, and a level 4 student of the University of Bamenda in Combined Maths and Computer Science',
          images: [
            {
              url: 'https://i.ibb.co/YL3Hm4J/Fire-Shot-Capture-003.png',
              width: 800,
              height: 420,
              alt: 'Teyim Asobo',
            },
          ],
        }}
        twitter={{
          handle: '@asofex',
          site: '@asofex',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
