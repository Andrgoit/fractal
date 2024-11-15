import PriceLabelsItem from "./PriceLabelsItem";
import { priceList } from "src/data/priceList";

export default function PriceLabelsList() {
  const elements = priceList.map((price) => (
    <PriceLabelsItem key={price.id} price={price} />
  ));

  return (
    <section className="bg-gray-200 py-10">
      <div className="cont">
        <h2 className="text-center uppercase">Тарифи</h2>
        <ul className="mt-5 flex flex-col gap-10 md:flex-row">{elements}</ul>
      </div>
    </section>
  );
}
