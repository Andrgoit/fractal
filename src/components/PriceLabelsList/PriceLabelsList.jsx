import PriceLabelsItem from "./PriceLabelsItem";
import { priceList } from "src/data/priceList";

export default function PriceLabelsList() {
  const elements = priceList.map((price) => (
    <PriceLabelsItem key={price.id} price={price} />
  ));

  return (
    <section className="py-10">
      <div className="cont">
        <h2 className="bg-sky-700 text-center font-bold uppercase text-white">
          Тарифи
        </h2>
        <ul className="mt-5 flex flex-col gap-10 md:flex-row">{elements}</ul>
      </div>
    </section>
  );
}
