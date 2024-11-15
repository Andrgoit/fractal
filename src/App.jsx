import "./index.css";
import {
  Header,
  ButtonBlock,
  PriceLabelsList,
  Footer,
  FAQ,
  NewsList,
  AllNewsList,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <NewsList />
      <PriceLabelsList />
      <FAQ />
      <AllNewsList />
      <Footer />
    </>
  );
}

export default App;
