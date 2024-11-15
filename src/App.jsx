import "./index.css";
import {
  Header,
  PriceLabelsList,
  Footer,
  FAQ,
  NewsList,
  AllNewsList,
  PriceList,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <NewsList />
      <PriceLabelsList />
      <PriceList />
      <FAQ />
      <AllNewsList />
      <Footer />
    </>
  );
}

export default App;
