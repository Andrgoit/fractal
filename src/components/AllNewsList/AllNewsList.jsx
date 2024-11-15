import newsList from "src/data/newsList";
import NewsItem from "./NewsItem";

export default function NewsList() {
  const reverseNewsList = [...newsList].reverse();

  const elements = reverseNewsList.map((item) => (
    <NewsItem key={item.id} item={item} />
  ));

  return (
    <section className="bg-gray-200 py-10">
      <a name="news"></a>
      <div className="cont flex flex-col items-center gap-4">
        <div>
          <h2 className="mb-5 text-center uppercase">новини</h2>
          <ul className="flex flex-col gap-4">{elements}</ul>
        </div>
      </div>
    </section>
  );
}
