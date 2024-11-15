export default function NewsItem({ item }) {
  const { title, date, description } = item;
  return (
    <li className="rounded-lg border border-gray-400 p-2 shadow-md">
      <div className="flex gap-3">
        <span className="text-sky-600">{date}</span>{" "}
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="mt-2">
        <p
          style={{
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      </div>
    </li>
  );
}
