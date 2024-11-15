import newsList from "src/data/newsList";
import NewsItem from "./NewsItem";

import { Accordion } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function NewsList() {
  const reverseNewsList = [...newsList].reverse();

  const elements = reverseNewsList.map((item) => (
    <NewsItem key={item.id} item={item} />
  ));

  return (
    <section className="py-10">
      <a name="news"></a>
      <div className="cont flex flex-col gap-4">
        <div>
          <h2 className="mb-5 bg-sky-700 text-center font-bold uppercase text-white">
            новини
          </h2>
          <Accordion className="overflow-hidden rounded-lg shadow-md">
            {elements}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
