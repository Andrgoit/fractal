import newsList from "src/data/newsList";
import NewsItem from "./NewsItem";

export default function NewsList() {
  const reverseNewsList = [...newsList].reverse().slice(0, 1);

  const elements = reverseNewsList.map((item) => (
    <NewsItem key={item.id} item={item} />
  ));

  return (
    <section className="py-10">
      <div className="cont flex flex-col items-center gap-4">
        <div>
          <h2 className="mb-5 text-center uppercase">Останні новини</h2>
          <ul>{elements}</ul>
        </div>
        <a
          href="#news"
          className="inline-block rounded-lg bg-red-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-red-700"
        >
          інші новини...
        </a>
      </div>
    </section>
  );
}
