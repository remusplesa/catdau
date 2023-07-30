import Head from 'next/head'
import { Nav, Hero, Footer } from '@/components';
import { Form } from '@/components/Form';
import { Background } from '@/components/Background';
import { FormBasic } from '@/components/FormBasic';

export default function Home() {
  return (
    <main className="relative h-screen">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Cât?</title>
        <meta name="description" content="Calculatorul pentru darul de nunta, botez, cumetrie - Cat Dau. Descopera trendurile actuale si pregateste-te pentru petrecere." />
        <meta name="keywords" content="dar, nunta, botez, cumetrie, cadou, calculator" />
        <meta name="robots" content="index, follow" />
        {/* <meta name="author" content="Andrei Plesa"/> */}
        <meta property="og:title" content="Cat Dau? | Calculatorul pentru cadou" />
        <meta property="og:description" content="Calculatorul pentru darul de nunta, botez, cumetrie - Cat Dau. Descopera trendurile actuale si pregateste-te pentru petrecere." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1521478706270-f2e33c203d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
        <meta property="og:url" content="https://www.catdau.eu" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cat Dau? | Calculatorul pentru cadou" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cat Dau? | Calculatorul pentru cadou" />
        <meta name="twitter:description" content="Calculatorul pentru darul de nunta, botez, cumetrie - Cat Dau. Descopera trendurile actuale si pregateste-te pentru petrecere." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1521478706270-f2e33c203d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
        <link rel="canonical" href="https://www.catdau.eu" />
      </Head>
      <Nav />
      <Background>

        <div>
          {/* <Form /> */}
          <FormBasic />
        </div>
      </Background>

      {/* <Footer /> */}
    </main>
  )
}
