export default function PriceLabelsItem({ price }) {
  const { name, description, href } = price;
  return (
    <li className="flex flex-col gap-5 overflow-hidden rounded-3xl bg-white pb-4 shadow-md md:w-1/2">
      <div className="bg-red-500 py-2">
        <h2 className="flex flex-row justify-center gap-1 uppercase text-white">
          тарифний план
          <span>«{name}»</span>
        </h2>
      </div>
      <div className="px-2 text-center">
        <p>{description}</p>
      </div>
      <div className="text-center">
        <a
          href={href}
          className="inline-block rounded-lg bg-red-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-red-700"
        >
          Докладніше
        </a>
      </div>
    </li>
  );
}
