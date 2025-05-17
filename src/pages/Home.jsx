import Header from '../components/Header/Header.jsx';
import Hero from '../components/Hero/Hero.jsx';
import CollectionCards from '../components/CollectionCards/CollectionCards.jsx';
import TrendingProducts from '../components/TrendingProducts/TrendingProducts.jsx';
import CardShoes from '../components/CardShoes/CardShoes.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CollectionCards />
      <TrendingProducts />
      <CardShoes />
      <Footer />
    </>
  );
}
