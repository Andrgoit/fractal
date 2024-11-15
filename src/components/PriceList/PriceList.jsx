import PriceInternet from "./PriceInternet";
import PriceInternetPlus from "./PriceInternetPlus";

export default function PriceList() {
  return (
    <section className="pb-10">
      <div className="cont">
        <PriceInternet />
        <PriceInternetPlus />
      </div>
    </section>
  );
}
